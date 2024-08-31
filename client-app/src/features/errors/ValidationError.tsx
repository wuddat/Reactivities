import { Alert, Stack, AlertTitle, Box, Typography } from '@mui/material/';


interface Props {
    errors: string[];
}
export default function ValidationError({ errors }: Props) {

    return (
        <Box>
            <Stack sx={{ width: '100%' }} spacing={2}>
                {errors && (
                    <Alert sx={{ border: '2px solid red' }} severity="error">
                        <AlertTitle>Error!</AlertTitle>
                        {errors.map((err: string, i) => (
                            <Typography key={i}>{err}</Typography>
                        ))}
                    </Alert>
                )}
            </Stack>
        </Box>
    )
}