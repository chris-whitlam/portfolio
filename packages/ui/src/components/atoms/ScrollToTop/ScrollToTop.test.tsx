import { act, fireEvent, render } from '@testing-library/react';
import ScrollToTop from './ScrollToTop';

describe('Components -> Atoms -> ScrollToTop', () => {
  const testId = 'scroll-to-top';
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

  it('should render component', () => {
    const { getByTestId } = render(<ScrollToTop />);

    expect(getByTestId(testId)).toBeInTheDocument();
  });

  it('should scroll to top when clicked', () => {
    const { getByTestId } = render(<ScrollToTop />);

    const button = getByTestId(testId);

    act(() => {
      fireEvent.click(button);
    });

    expect(mockScrollTo).toHaveBeenCalled();
  });
});
