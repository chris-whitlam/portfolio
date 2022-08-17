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
  'data-test-id'?: string;
}

const TextArea: FC<TextAreaProps> = ({
  name,
  label,
  value,
  onChange,
  placeholder,
  error,
  sx,
  'data-test-id': dataTestId,
  ...rest
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
    data-test-id={dataTestId || 'text-area'}
    inputProps={{ 'data-test-id': `${dataTestId}-input` || 'text-area-input' }}
    FormHelperTextProps={{
      'data-test-id': `${dataTestId}-message` || 'text-area-message'
    }}
    {...rest}
  />
);

export default TextArea;
