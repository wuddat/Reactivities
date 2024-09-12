import { IconButton, Button, Typography, Toolbar, Box, AppBar, MenuItem, Menu, Avatar, Stack, Divider } from '@mui/material/';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import AccountCircle from '@mui/icons-material/AccountCircle';
import PowerIcon from '@mui/icons-material/PowerSettingsNew';
import { useStore } from '../stores/store';
import { useState } from 'react';
import { observer } from 'mobx-react-lite';

export default observer(function NavBar() {

    const { userStore: { user, logout } } = useStore();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);


    const handleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

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
                        sx={{ mr: 2 }}
                    >
                        <Diversity3Icon />
                    </IconButton>
                    <Stack
                        direction="row"
                        divider={<Divider orientation="vertical" flexItem />}
                        spacing={2}
                    >
                        <Typography
                            variant="h6"
                            component="a"
                            href='/activities'
                            sx={{
                                textDecoration: 'none',
                                color: "white"
                            }}>
                            Activities
                        </Typography>
                        <Typography
                            variant="h6"
                            component="a"
                            href='/errors'
                            sx={{
                                textDecoration: 'none',
                                color: "white"
                            }}>
                            Errors
                        </Typography>
                        <Button
                            component='a'
                            href="/createActivity"
                            color="success"
                            variant="contained"
                        >Add New Activity</Button>
                    </Stack>
                    <Stack direction="row" sx={{ alignItems: 'center', marginLeft: "auto", }}>
                        <IconButton
                            onClick={handleMenu}
                        >
                            <Avatar alt="user" src={user?.image || "/assets/user.png"} />
                        </IconButton>{user?.displayName}
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem divider component='a' href={`/profiles/${user?.username}`}><AccountCircle />Profile</MenuItem>
                            <MenuItem onClick={logout}><PowerIcon />Logout</MenuItem>
                        </Menu>
                    </Stack>
                </Toolbar>
            </AppBar>
        </Box>
    );
})