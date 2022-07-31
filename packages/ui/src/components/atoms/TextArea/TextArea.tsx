import { SxProps, Theme, TextField as MUITextField } from '@mui/material';
import { theme } from '@styles';
import { FC, ChangeEventHandler } from 'react';

interface TextAreaProps {
  label?: string;
  name: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  placeholder?: string;
  error?: string;
  sx?: SxProps<Theme>;
}

const TextArea: FC<TextAreaProps> = ({
  name,
  label,
  value,
  onChange,
  placeholder,
  error,
  sx
}) => (
  <MUITextField
    fullWidth
    variant="outlined"
    label={label}
    placeholder={placeholder}
    type="text"
    name={name}
    value={value}
    onChange={onChange}
    error={!!error}
    helperText={error}
    multiline
    rows={5}
    sx={{
      backgroundColor: theme.palette.background.default,
      ...sx
    }}
  />
);

export default TextArea;
