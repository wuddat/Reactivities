import { IconButton, Button, Typography, Toolbar, Box, AppBar } from '@mui/material/';
import HouseIcon from '@mui/icons-material/House';
import Diversity3Icon from '@mui/icons-material/Diversity3';

export default function NavBar() {
    return (
        <Box sx={{ flexGrow: 1, mb: 2 }}>
            <AppBar position="sticky" sx={{ pl: 5, pr: 5 }}>
                <Toolbar >
                    <IconButton
                        component="a"
                        href="/"
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <Diversity3Icon />
                    </IconButton>

                    <Typography
                        variant="h6"
                        component="a"
                        href='/activities'
                        sx={{
                            textDecoration: 'none',
                            color: "white",
                            flexGrow: 1
                        }}>
                        Activities
                    </Typography>
                    <Typography
                        variant="h6"
                        component="a"
                        href='/errors'
                        sx={{
                            textDecoration: 'none',
                            color: "white",
                            flexGrow: 20
                        }}>
                        Errors
                    </Typography>
                    <Button
                        component='a'
                        href="/createActivity"
                        color="success"
                        variant="contained"
                    >Add New Activity</Button>

                </Toolbar>
            </AppBar>
        </Box>
    );
}