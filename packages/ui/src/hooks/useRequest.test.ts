import {
  act,
  renderHook,
  RenderHookResult,
  waitFor
} from '@testing-library/react';
import * as makeRequestModule from '../utils/request';
import {
  RequestState,
  useGetRequest,
  usePostRequest,
  useLazyGetRequest,
  useLazyPostRequest,
  LazyRequestHookReturn
} from './useRequest';

describe('hooks -> useRequest', () => {
  const url = 'https://chriswhitlam.dev';
  const mockResponseData = { message: 'Success' };

  const makeRequestSpy = jest.spyOn(makeRequestModule, 'makeRequest');

  afterEach(jest.resetAllMocks);
  afterAll(jest.restoreAllMocks);

  describe('useRequest helpers', () => {
    it.each`
      hook                         | expectedMethod
      ${() => useGetRequest(url)}  | ${'GET'}
      ${() => usePostRequest(url)} | ${'POST'}
    `(
      `should set data when request is successful`,
      async ({ hook, expectedMethod }) => {
        makeRequestSpy.mockResolvedValueOnce(mockResponseData);

        const { result }: RenderHookResult<RequestState, unknown> =
          renderHook(hook);

        expect(result.current.loading).toBe(true);
        expect(result.current.data).toBeUndefined();
        expect(result.current.error).toBeUndefined();

        await waitFor(() => {
          expect(result.current.loading).toBe(false);
          expect(result.current.data).toStrictEqual(mockResponseData);
          expect(result.current.error).toBeUndefined();

          expect(makeRequestSpy).toBeCalledWith(url, expectedMethod, undefined);
        });

        makeRequestSpy.mockReset();
      }
    );

    it.each`
      hook                         | expectedMethod
      ${() => useGetRequest(url)}  | ${'GET'}
      ${() => usePostRequest(url)} | ${'POST'}
    `(
      `should set error when request fails`,
      async ({ hook, expectedMethod }) => {
        const mockError = 'Something went wrong';
        makeRequestSpy.mockRejectedValueOnce(new Error(mockError));

        const { result }: RenderHookResult<RequestState, unknown> =
          renderHook(hook);

        expect(result.current.loading).toBe(true);
        expect(result.current.data).toBeUndefined();
        expect(result.current.error).toBeUndefined();

        await waitFor(() => {
          expect(result.current.loading).toBe(false);
          expect(result.current.data).toBeUndefined();
          expect(result.current.error).toStrictEqual(mockError);

          expect(makeRequestSpy).toBeCalledWith(url, expectedMethod, undefined);
        });
        makeRequestSpy.mockReset();
      }
    );
  });

  describe('useLazyRequest helpers', () => {
    it.each`
      hook                             | expectedMethod
      ${() => useLazyGetRequest(url)}  | ${'GET'}
      ${() => useLazyPostRequest(url)} | ${'POST'}
    `(
      `should set data when request is successful`,
      async ({ hook, expectedMethod }) => {
        makeRequestSpy.mockResolvedValueOnce(mockResponseData);

        const { result }: RenderHookResult<LazyRequestHookReturn, unknown> =
          renderHook(hook);

        const [state, callback] = result.current;

        expect(state.loading).toBe(false);
        expect(state.data).toBeUndefined();
        expect(state.error).toBeUndefined();

        act(() => {
          callback();
        });

        // Loading state
        await waitFor(() => {
          const updatedState = result.current[0];
          expect(updatedState.loading).toBe(true);
          expect(updatedState.data).toBeUndefined();
          expect(updatedState.error).toBeUndefined();
        });

        // Complete state
        await waitFor(() => {
          const updatedState = result.current[0];

          expect(updatedState.loading).toBe(false);
          expect(updatedState.data).toStrictEqual(mockResponseData);
          expect(updatedState.error).toBeUndefined();

          expect(makeRequestSpy).toBeCalledWith(url, expectedMethod, undefined);
        });
        makeRequestSpy.mockReset();
      }
    );

    it.each`
      hook                             | expectedMethod
      ${() => useLazyGetRequest(url)}  | ${'GET'}
      ${() => useLazyPostRequest(url)} | ${'POST'}
    `(
      `should set error when request fails`,
      async ({ hook, expectedMethod }) => {
        const mockError = 'Something went wrong';
        makeRequestSpy.mockRejectedValueOnce(new Error(mockError));

        const { result }: RenderHookResult<LazyRequestHookReturn, unknown> =
          renderHook(hook);

        const [state, callback] = result.current;

        expect(state.loading).toBe(false);
        expect(state.data).toBeUndefined();
        expect(state.error).toBeUndefined();

        act(() => {
          callback();
        });

        // Loading state
        await waitFor(() => {
          const updatedState = result.current[0];
          expect(updatedState.loading).toBe(true);
          expect(updatedState.data).toBeUndefined();
          expect(updatedState.error).toBeUndefined();
        });

        // Complete state
        await waitFor(() => {
          const updatedState = result.current[0];

          expect(updatedState.loading).toBe(false);
          expect(updatedState.data).toBeUndefined();
          expect(updatedState.error).toStrictEqual(mockError);

          expect(makeRequestSpy).toBeCalledWith(url, expectedMethod, undefined);
        });
        makeRequestSpy.mockReset();
      }
    );

    it(`should use default error message if error has no message`, async () => {
      makeRequestSpy.mockRejectedValueOnce(new Error());

      const { result }: RenderHookResult<LazyRequestHookReturn, unknown> =
        renderHook(() => useLazyGetRequest(url));

      const [state, callback] = result.current;

      expect(state.loading).toBe(false);

      act(() => {
        callback();
      });

      // Complete state
      await waitFor(() => {
        const updatedState = result.current[0];

        expect(updatedState.loading).toBe(false);
        expect(updatedState.data).toBeUndefined();
        expect(updatedState.error).toStrictEqual('Something went wrong');
      });
      makeRequestSpy.mockReset();
    });
  });
});
