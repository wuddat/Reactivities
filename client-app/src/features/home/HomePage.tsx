import { Button, Container, Grid, Typography } from "@mui/material";
import Diversity3Icon from '@mui/icons-material/Diversity3';
import { createTheme, ThemeProvider } from '@mui/material/styles';


// Augment the palette to include an white color
declare module '@mui/material/styles' {
    interface Palette {
        light: Palette['primary'];
    }

    interface PaletteOptions {
        light?: PaletteOptions['primary'];
    }
}

// Update the Button's color options to include an white option
declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        light: true;
    }
}

const theme = createTheme({
    palette: {
        light: {
            main: '#e3f2fd',
            light: '#ffffff',
            dark: '#c0c0c0',
            contrastText: '#000000',
        },
    },
});

export default function HomePage() {
    return (<>
        <Container sx={{
            display: 'flex',
            justifyContent: 'center',  // Horizontally center
            alignItems: 'center',      // Vertically center
            height: '100vh',           // Full viewport height
            width: '100vw',            // Full viewport width
        }}>
            <Grid container spacing={3} direction='column' sx={{
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center'
            }}>
                <Grid item xs={12} container sx={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center'
                }}>
                    <Grid item xs={1}>
                        <Diversity3Icon sx={{ fontSize: 100, color: 'white' }} />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant='h1' color='white'>Reactivities</Typography>
                    </Grid>
                    <Grid item xs={12} sx={{ mt: 4 }}>
                        <Typography variant="h4" color="white">Welcome to Reactivities</Typography>
                        <ThemeProvider theme={theme}>
                            <Button variant="contained" size="large" color='light' sx={{ mt: 1 }} componenent="a" href="/activities">Take me to the Activities!</Button>
                        </ThemeProvider>
                    </Grid>
                </Grid>
            </Grid>
        </Container >
    </>
    );

}