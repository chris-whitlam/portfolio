import {
  act,
  fireEvent,
  render as rtlRender,
  waitFor
} from '@testing-library/react';
import TextField from './TextField';

const render = (onChange = jest.fn()) =>
  rtlRender(
    <TextField
      data-test-id="text-field"
      name="name"
      value=""
      onChange={onChange}
    />
  );

describe('Components -> Atoms -> TextField', () => {
  it('should render component', () => {
    const { getByTestId } = render();
    expect(getByTestId('text-field')).toBeInTheDocument();
    expect(getByTestId('text-field-input')).toBeInTheDocument();
  });

  it('should call onChange when value changes', async () => {
    const onChange = jest.fn();

    const { getByTestId } = render(onChange);

    expect(onChange).not.toHaveBeenCalled();

    const textAreaInput = getByTestId('text-field-input');

    act(() => {
      fireEvent.change(textAreaInput, { target: { value: 't' } });
      fireEvent.change(textAreaInput, { target: { value: 'e' } });
    });

    await waitFor(async () => {
      expect(onChange).toHaveBeenCalledTimes(2);
    });
  });
});
