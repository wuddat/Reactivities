import { IconButton, Button, Typography, Toolbar, Box, AppBar } from '@mui/material/';
import HouseIcon from '@mui/icons-material/House';

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
                        <HouseIcon />
                    </IconButton>

                    <Typography
                        variant="h6"
                        component="a"
                        href='/activities'
                        sx={{ flexGrow: 1, color: "white" }}>
                        Activities
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