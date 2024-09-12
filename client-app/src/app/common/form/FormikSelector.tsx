import { TextField, MenuItem } from '@mui/material';
import { Field, FieldProps } from 'formik';

interface FormikInputFieldProps {
    label: string;
    name: string;
    type?: string;
    options: Array<string>;
}

export default function FormikSelector({ label, ...props }: FormikInputFieldProps) {




    return (
        <Field name={props.name}>
            {({ field, meta }: FieldProps) => (
                <TextField
                    {...field}
                    {...props}
                    label={label}
                    select
                    variant="outlined"
                    fullWidth
                    required
                    error={meta.touched && !!(meta.error)}
                    helperText={meta.touched && meta.error}
                >
                    {props.options.map((option) => (
                        <MenuItem key={option} value={option}>
                            {option.toUpperCase()}
                        </MenuItem>
                    ))}
                </TextField>
            )}
        </Field>
    );
}