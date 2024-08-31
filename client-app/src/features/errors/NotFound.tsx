import { Box, Button, Container, Typography } from "@mui/material";

export default function NotFound() {
    return (
        <Container sx={{
            display: 'flex',
            justifyContent: 'center',  // Horizontally center
            alignItems: 'center',      // Vertically center
            height: '100vh',           // Full viewport height
            width: '100vw',            // Full viewport width>
            textAlign: 'center'
        }}>
            <Box>
                <Typography variant='h1'>OOPS!</Typography>
                <Typography variant="body1">We've looked everywhere, but we can't find what you asked for!</Typography>
                <Button sx={{ mt: 2 }} variant="contained" component="a" href="/activities">Go Back?</Button>
            </Box>
        </Container >
    )
}