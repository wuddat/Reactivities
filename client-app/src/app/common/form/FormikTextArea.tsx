import React from 'react';
import { TextField } from '@mui/material';
import { Field, FieldProps } from 'formik';

interface FormikInputFieldProps {
    label: string;
    name: string;
    type?: string;
    rows?: number | string;
}

export default function FormikTextArea({ label, ...props }: FormikInputFieldProps) {
    return (
        <Field name={props.name}>
            {({ field, meta }: FieldProps) => (
                <TextField
                    {...field}
                    {...props}
                    label={label}
                    variant="outlined"
                    fullWidth
                    required
                    error={meta.touched && !!(meta.error)}
                    helperText={meta.touched && meta.error}
                    multiline
                />
            )}
        </Field>
    );
}