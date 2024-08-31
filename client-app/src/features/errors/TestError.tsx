import { Button, Typography, Box, Stack, Container } from '@mui/material/';
import axios from 'axios';
import { useState } from 'react';
import ValidationError from './ValidationError';

export default function TestErrors() {
    const baseUrl = 'http://localhost:5000/api/'
    const [errors, setErrors] = useState(null);

    function handleNotFound() {
        axios.get(baseUrl + 'buggy/not-found').catch(err => console.log(err.response));
    }

    function handleBadRequest() {
        axios.get(baseUrl + 'buggy/bad-request').catch(err => console.log(err.response));
    }

    function handleServerError() {
        axios.get(baseUrl + 'buggy/server-error').catch(err => console.log(err.response));
    }

    function handleUnauthorised() {
        axios.get(baseUrl + 'buggy/unauthorised').catch(err => console.log(err.response));
    }

    function handleBadGuid() {
        axios.get(baseUrl + 'activities/notaguid').catch(err => console.log(err.response));
    }

    function handleValidationError() {
        axios.post(baseUrl + 'activities', {}).catch(err => setErrors(err));
    }

    return (
        <Container sx={{
            display: 'flex',
            flexDirection: 'column'

        }}><Box width='100%' sx={{
            padding: 3,
            textAlign: 'center'
        }}>
                <Typography variant='h1' sx={{ mb: 2 }}>Test Error component</Typography>
                <Stack direction='row' spacing={2} sx={{ justifyContent: 'space-between' }}>
                    <Button onClick={handleBadRequest} variant='contained'>Bad Request</Button>
                    <Button onClick={handleNotFound} variant='contained'>Not Found</Button>
                    <Button onClick={handleValidationError} variant='contained'>Validation Error</Button>
                    <Button onClick={handleServerError} variant='contained'>Server Error</Button>
                    <Button onClick={handleUnauthorised} variant='contained'>Unauthorised</Button>
                    <Button onClick={handleBadGuid} variant='contained'>Bad Guid</Button>
                </Stack>

            </Box>
            {errors && <ValidationError errors={errors} />}
        </Container>
    )
}