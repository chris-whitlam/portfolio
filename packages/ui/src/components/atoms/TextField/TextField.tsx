import { ChangeEventHandler, ForwardedRef } from "react"
import { SxProps, TextField as MUITextField, Theme } from "@mui/material";
import React from "react";

interface TextFieldProps {
  label?: string;
  placeholder?: string;
  name: string;
  value: string;
  error?: string;
  onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
  sx?: SxProps<Theme>;
}

const TextField = React.forwardRef((
  {
    label,
    name,
    value,
    onChange,
    placeholder,
    error,
    sx
  }: TextFieldProps,
  ref: ForwardedRef<HTMLInputElement>) =>
  <MUITextField
    inputRef={ref}
    fullWidth
    variant='standard'
    id={name}
    label={label}
    placeholder={placeholder}
    name={name}
    value={value}
    onChange={onChange}
    error={!!error}
    helperText={error}
    sx={sx}
  />
)


export default TextField;