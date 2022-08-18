import React, { ChangeEventHandler, ForwardedRef } from 'react';
import { SxProps, TextField as MUITextField, Theme } from '@mui/material';

interface TextFieldProps {
  label?: string;
  placeholder?: string;
  name: string;
  value: string;
  error?: string;
  onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  'data-test-id'?: string;
  sx?: SxProps<Theme>;
}

const TextField = React.forwardRef(
  (
    {
      label,
      name,
      value,
      onChange,
      placeholder,
      error,
      sx,
      'data-test-id': dataTestId,
      ...rest
    }: TextFieldProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => (
    <MUITextField
      inputRef={ref}
      fullWidth
      variant="standard"
      id={name}
      label={label}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      error={!!error}
      helperText={error}
      sx={sx}
      data-test-id={dataTestId || 'text-field'}
      inputProps={{
        'data-test-id': `${dataTestId}-input` || 'text-field-input'
      }}
      FormHelperTextProps={{
        'data-test-id': `${dataTestId}-message` || 'text-field-message'
      }}
      {...rest}
    />
  )
);

export default TextField;
