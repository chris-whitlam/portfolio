import { useCallback, useEffect, useState } from "react";

import { RequestBody, RequestMethod, makeRequest } from '@utils';

export interface RequestState {
  loading: boolean;
  data?: any;
  error?: string;
}

export type RequestCallback = (body: RequestBody) => Promise<RequestState>;
export type LazyRequestHookReturn = [RequestCallback, RequestState];
export type RequestHookReturn = RequestState;

const useLazyRequest = (url: string, method: RequestMethod): LazyRequestHookReturn => {
  const [state, setState] = useState<RequestState>({
    data: undefined,
    loading: false,
    error: undefined
  });

  const callback = useCallback(
    async (body?: RequestBody) => {
      console.log('Making request', {
        url,
        body
      })
      setState({
        data: undefined, 
        loading: true, 
        error: undefined
      })

      try {
        const data = await makeRequest(url, method, body);

        setState({
          data, 
          loading: false, 
          error: undefined
        })

        console.log('Request complete', {
          url,
          body,
          data
        })
      } catch (err: any) {
        console.error('Request failed', {
          url,
          body,
          error: err
        })
        setState({
          data: undefined, 
          loading: false, 
          error: err.error
        })
      }

      return state;

  }, [state, method, url]);

  return [callback, state];
}

const useRequest = (url: string, method: RequestMethod, body: RequestBody): RequestHookReturn => {
  const [callback, state] = useLazyRequest(url, method);

  useEffect(
    () => {
      callback(body)
    }, 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )
  return state;
}

export const useGetRequest = (url: string, body: RequestBody) => useRequest(url, 'GET', body);
export const usePostRequest = (url: string, body: RequestBody) => useRequest(url, 'POST', body);
export const useLazyGetRequest = (url: string) => useLazyRequest(url, 'GET');
export const useLazyPostRequest = (url: string) => useLazyRequest(url, 'POST');