import { Button, Container, Grid, Typography, Stack } from "@mui/material";
import Diversity3Icon from '@mui/icons-material/Diversity3';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useStore } from "../../app/stores/store";
import LoginForm from "../users/LoginForm";
import RegisterForm from "../users/RegisterForm";


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

    const { userStore, modalStore } = useStore();

    return (<>
        <Container sx={{
            display: 'flex',
            justifyContent: 'center',  // Horizontally center
            alignItems: 'center',      // Vertically center
            height: '100vh',           // Full viewport height
            width: '100vw',            // Full viewport width
        }}>
            <ThemeProvider theme={theme}>
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

                        <Grid container item xs={12} spacing={2} sx={{ mt: 2, justifyContent: 'center' }}>
                            {userStore.isLoggedIn ? (
                                <Stack>
                                    <Typography variant="h4" color="white">Welcome to Reactivities</Typography>
                                    <Button variant="outlined" size="large" color='light' sx={{ mt: 1 }} href="/activities">Go to Activities</Button>

                                </Stack>
                            ) : (
                                <>
                                    <Grid item xs={6}>
                                        <Button
                                            fullWidth
                                            variant="outlined"
                                            size="large"
                                            sx={{ fontSize: '1.5rem', flexGrow: 1 }}
                                            color='light'
                                            onClick={() => modalStore.openModal(<LoginForm />)}
                                        >
                                            Login
                                        </Button>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Button
                                            fullWidth
                                            variant="outlined"
                                            size="large"
                                            sx={{ fontSize: '1.5rem' }}
                                            color='light'
                                            onClick={() => modalStore.openModal(<RegisterForm />)}
                                        >
                                            Register
                                        </Button>
                                    </Grid>
                                </>
                            )}
                        </Grid>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </Container >
    </>
    );

}