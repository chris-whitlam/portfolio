import { Button } from '@atoms';
import { act, fireEvent, render as rtlRender } from '@testing-library/react';
import { ButtonProps } from './Button';

const render = ({ onClick, isLoading = false }: ButtonProps = {}) =>
  rtlRender(
    <Button data-test-id="button" onClick={onClick} isLoading={isLoading}>
      My Button
    </Button>
  );

describe('Components -> Atoms -> Button', () => {
  it('should render component', () => {
    const { getByTestId, queryByTestId } = render();

    expect(getByTestId('button')).toBeInTheDocument();
    expect(queryByTestId('button-loading-icon')).not.toBeInTheDocument();
  });

  it('show loading icon if loading', () => {
    const { getByTestId } = render({ isLoading: true });

    const button = getByTestId('button');

    expect(getByTestId('button-loading-icon')).toBeInTheDocument();
    expect(button).toBeDisabled();
  });

  it('should call onClick function when clicked', () => {
    const onClick = jest.fn();
    const { getByTestId } = render({ onClick });

    const button = getByTestId('button');

    act(() => {
      fireEvent.click(button);
    });

    expect(onClick).toBeCalled();
  });
});
