import { Grid, TextField } from '@mui/material';
import { Field, FieldProps } from 'formik';

interface FormikInputFieldProps {
    label: string;
    name: string;
    type?: string;
}

export default function FormikInputField({ label, ...props }: FormikInputFieldProps) {
    return (
        <Grid sx={{ m: 1 }} >
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
                        InputLabelProps={{ shrink: true }}
                    />
                )}
            </Field>
        </Grid>
    );
}