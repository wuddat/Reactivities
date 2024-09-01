import React from 'react';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { TextField } from '@mui/material';
import { Field, FieldProps } from 'formik';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers';
import dayjs from 'dayjs';

interface FormikDateTimePickerProps {
    label: string;
    name: string;
    type?: string;
}

export default function FormikDateTimePicker({ label, name }: FormikDateTimePickerProps) {
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Field name={name}>
                {({ field, form }: FieldProps<any>) => (
                    <DateTimePicker
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label={label}
                                variant="outlined"
                                required
                                error={form.touched[name] && Boolean(form.errors[name])}
                                helperText={form.touched[name] && form.errors[name]}
                            />
                        )}
                        value={field.value || null}
                        onChange={(value) => form.setFieldValue(name, value)}
                        onError={(error) => form.setFieldError(name, error || '')}
                        format="MM/dd/yyyy' Time 'HH:mm"
                    />
                )}
            </Field>
        </LocalizationProvider>
    );
}