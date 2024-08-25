import { IconButton, Button, Typography, Toolbar, Box, AppBar } from '@mui/material/';
import HouseIcon from '@mui/icons-material/House';


interface Props {
    openForm: () => void;
}


export default function NavBar({ openForm }: Props) {
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
                    <Button onClick={openForm} color="success" variant="contained">Add New Activity</Button>

                </Toolbar>
            </AppBar>
        </Box>
    );
}