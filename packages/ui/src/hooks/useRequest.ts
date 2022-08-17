import { useCallback, useEffect, useState } from 'react';

import { RequestBody, RequestMethod, makeRequest } from '@utils';

export interface RequestState {
  loading: boolean;
  data?: object | unknown;
  error?: string;
}

export type RequestCallback = (body?: RequestBody) => Promise<RequestState>;
export type LazyRequestHookReturn = [RequestState, RequestCallback];
export type RequestHookReturn = RequestState;

const useLazyRequest = (
  url: string,
  method: RequestMethod
): LazyRequestHookReturn => {
  const [state, setState] = useState<RequestState>({
    data: undefined,
    loading: false,
    error: undefined
  });

  const callback = useCallback(
    async (body?: RequestBody) => {
      setState({
        data: undefined,
        loading: true,
        error: undefined
      });

      try {
        const data = await makeRequest(url, method, body);

        setState({
          data,
          loading: false,
          error: undefined
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        setState({
          data: undefined,
          loading: false,
          error: err.message || err
        });
      }

      return state;
    },
    [state, method, url]
  );

  return [state, callback];
};

const useRequest = (
  url: string,
  method: RequestMethod,
  body?: RequestBody
): RequestHookReturn => {
  const [state, callback] = useLazyRequest(url, method);

  useEffect(() => {
    callback(body);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return state;
};

export const useGetRequest = (url: string, body?: RequestBody) =>
  useRequest(url, 'GET', body);
export const usePostRequest = (url: string, body?: RequestBody) =>
  useRequest(url, 'POST', body);
export const useLazyGetRequest = (url: string) => useLazyRequest(url, 'GET');
export const useLazyPostRequest = (url: string) => useLazyRequest(url, 'POST');
