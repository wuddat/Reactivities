import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { Field, FieldProps } from 'formik';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers';

interface FormikDateTimePickerProps {
    label: string;
    name: string;
    type?: string;
}

export default function FormikDateTimePicker({ label, name }: FormikDateTimePickerProps) {
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Field name={name}>
                {({ field, form }: FieldProps<any>) => {
                    // Ensure that the helperText is either a string or undefined
                    const errorText = form.touched[name] && typeof form.errors[name] === 'string' ? form.errors[name] : "an error occured";

                    return (
                        <DateTimePicker
                            slotProps={{
                                textField: {
                                    label,
                                    variant: "outlined",
                                    required: true,
                                    error: Boolean(form.touched[name] && form.errors[name]),
                                    helperText: errorText,
                                }
                            }}
                            value={field.value || null}
                            onChange={(value) => form.setFieldValue(name, value)}
                            onError={(error) => form.setFieldError(name, error ?? '')}
                            format="MM/dd/yyyy' Time 'HH:mm"
                        />
                    );
                }}
            </Field>
        </LocalizationProvider>
    );
}
