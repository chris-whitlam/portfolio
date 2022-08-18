import {
  act,
  fireEvent,
  render as rtlRender,
  waitFor
} from '@testing-library/react';
import TextArea from './TextArea';

const render = (onChange = jest.fn()) =>
  rtlRender(
    <TextArea
      data-test-id="text-area"
      name="name"
      value=""
      onChange={onChange}
    />
  );

describe('Components -> Atoms -> TextArea', () => {
  it('should render component', () => {
    const { getByTestId } = render();
    expect(getByTestId('text-area')).toBeInTheDocument();
    expect(getByTestId('text-area-input')).toBeInTheDocument();
  });

  it('should call onChange when value changes', async () => {
    const onChange = jest.fn();

    const { getByTestId } = render(onChange);

    expect(onChange).not.toHaveBeenCalled();

    const textAreaInput = getByTestId('text-area-input');

    act(() => {
      fireEvent.change(textAreaInput, { target: { value: 't' } });
      fireEvent.change(textAreaInput, { target: { value: 'e' } });
    });

    await waitFor(async () => {
      expect(onChange).toHaveBeenCalledTimes(2);
    });
  });
});
