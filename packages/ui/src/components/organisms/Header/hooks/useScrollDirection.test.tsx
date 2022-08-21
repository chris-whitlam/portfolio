import {
  renderHook,
  RenderHookResult,
  render as rtlRender,
  act,
  fireEvent,
  waitFor
} from '@testing-library/react';
import useScrollDirection, { ScrollDirection } from './useScrollDirection';

const MockComponent = () => {
  const result = useScrollDirection();
  return <div data-result={result} data-test-id="mock-component" />;
};

const render = () =>
  rtlRender(
    <>
      <div data-test-id="scroll-up-target" />
      <MockComponent />
      <div data-test-id="scroll-down-target" />
    </>
  );

describe('Components -> Organisms -> Header -> Hooks -> useScrollDirection', () => {
  const originalScrollTo = window.scrollTo;
  const mockScrollTo = jest.fn();

  beforeAll(() => {
    window.scrollTo = mockScrollTo;
  });

  afterEach(() => {
    mockScrollTo.mockReset();
  });

  afterAll(() => {
    window.scrollTo = originalScrollTo;
  });

  it('should initially have scroll direction of NONE', async () => {
    const { result }: RenderHookResult<ScrollDirection, unknown> = renderHook(
      () => useScrollDirection()
    );

    expect(result.current).toBe(ScrollDirection.NONE);
  });

  it('should return DOWN when user scrolls down', async () => {
    const { getByTestId } = render();

    const mockComponent = getByTestId('mock-component');
    const scrollTarget = getByTestId('scroll-down-target');
    expect(mockComponent).toHaveAttribute('data-result', ScrollDirection.NONE);

    act(() => {
      fireEvent.scroll(scrollTarget);
    });

    waitFor(() => {
      expect(mockComponent).toHaveAttribute(
        'data-result',
        ScrollDirection.DOWN
      );
    });
  });

  it('should return UP when user scrolls up', async () => {
    const { getByTestId } = render();

    const mockComponent = getByTestId('mock-component');
    const scrollDownTarget = getByTestId('scroll-down-target');
    const scrollUpTarget = getByTestId('scroll-down-target');

    expect(mockComponent).toHaveAttribute('data-result', ScrollDirection.NONE);

    act(() => {
      fireEvent.scroll(scrollDownTarget);
    });

    act(() => {
      fireEvent.scroll(scrollUpTarget);
    });

    waitFor(() => {
      expect(mockComponent).toHaveAttribute('data-result', ScrollDirection.UP);
    });
  });
});
