import { BackLink } from '@atoms';
import { fireEvent, render as rtlRender } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import createMockRouter from '@test/utils/createMockRouter';

const backMock = jest.fn();
const render = () =>
  rtlRender(
    <RouterContext.Provider value={createMockRouter({ back: backMock })}>
      <BackLink data-test-id="back-link" />
    </RouterContext.Provider>
  );

describe('Components -> Atoms -> Back Link', () => {
  afterEach(jest.resetAllMocks);
  afterAll(jest.restoreAllMocks);

  it('should render component', () => {
    const { getByTestId } = render();

    expect(getByTestId('back-link')).toBeInTheDocument();
  });

  it('should navigate to previous page when clicked', () => {
    const { getByTestId } = render();

    const button = getByTestId('back-link');

    act(() => {
      fireEvent.click(button);
    });

    expect(backMock).toBeCalled();
  });
});
