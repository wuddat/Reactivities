import { IconButton, Button, Typography, Toolbar, Box, AppBar } from '@mui/material/';
import HouseIcon from '@mui/icons-material/House';
import { useStore } from '../stores/store';





export default function NavBar() {

    const {activityStore} = useStore();
    return (
        <Box sx={{ flexGrow: 1, mb: 5 }}>
            <AppBar position="sticky">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <HouseIcon />
                    </IconButton>

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Activities
                    </Typography>
                    <Button onClick={() => activityStore.openForm()} color="success" variant="contained">Add New Activity</Button>

                </Toolbar>
            </AppBar>
        </Box>
    );
}