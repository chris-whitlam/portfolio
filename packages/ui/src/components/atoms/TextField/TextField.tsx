import React, { ChangeEventHandler, ForwardedRef } from 'react';
import { SxProps, TextField as MUITextField, Theme } from '@mui/material';

interface TextFieldProps {
  label?: string;
  placeholder?: string;
  name: string;
  value: string;
  error?: string;
  onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
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
      data-test-id="text-field"
      inputProps={{ 'data-test-id': 'text-field-input' }}
      {...rest}
    />
  )
);

export default TextField;
