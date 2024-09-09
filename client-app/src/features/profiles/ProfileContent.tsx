
import { Tabs, Tab, Box, Typography } from '@mui/material';
import ProfilePhotos from './ProfilePhotos';
import { Profile } from '../../app/models/profile';
import { observer } from 'mobx-react-lite';
import ProfileAbout from './ProfileAbout';
import ProfileFollowings from './ProfileFollowings';
import { useStore } from '../../app/stores/store';

interface Panel {
    menuItem: string;
    render: React.ReactNode;
}

interface Props {
    profile: Profile;
}



export default observer(function ProfileContent({ profile }: Props) {
    const { profileStore } = useStore();

    const panels: Panel[] = [
        { menuItem: 'About', render: <ProfileAbout /> },
        { menuItem: 'Photos', render: <ProfilePhotos profile={profile} /> },
        { menuItem: 'Events', render: <Typography>Events Content</Typography> },
        { menuItem: 'Followers', render: <ProfileFollowings /> },
        { menuItem: 'Following', render: <ProfileFollowings /> },
    ];

    const activeTab = profileStore.activeTab;

    return (
        <Box display="flex" width="100%" minHeight="300px" sx={{ backgroundColor: "white", p: 2, border: "1px solid lightgray", }}>
            {/* Left side content rendering */}
            <Box flexGrow={1} overflow="auto">
                {panels[activeTab].render}
            </Box>

            {/* Right side tab menu */}
            <Tabs
                value={activeTab}
                onChange={(_, newVal) => profileStore.setActiveTab(newVal)}
                orientation="vertical"
                sx={{
                    borderLeft: 1, borderColor: 'divider', alignItems: 'flex-end', minWidth: '100px',
                }}

            >
                {panels.map((panel, index) => (
                    <Tab key={index} label={panel.menuItem} />
                ))}
            </Tabs>
        </Box>
    );
})













// import { Container, Grid, Avatar, Stack, Typography, Divider, Button, List, ListItem, ListItemButton, ListItemText } from "@mui/material";


// export default function ProfileContent() {


//     const panels = [
//         { menuItem: 'About', render: () =>}
//     ]


//     return (


//         <Grid container sx={{ alignItems: 'center', justifyContent: 'space-between' }} >
//             <Grid item xs={8} sx={{ display: "flex", backgroundColor: "white", p: 2, border: "1px solid lightgray", minHeight: "200px" }}>
//                 <Typography variant="body2">Events Content</Typography>
//             </Grid>

//             <Grid item xs={3} sx={{ minHeight: '200px', backgroundColor: "white", border: "1px solid lightgray" }}>
//                 <List>
//                     <ListItem disableGutters>
//                         <ListItemButton>
//                             <ListItemText primary="About" />
//                         </ListItemButton>
//                     </ListItem>
//                 </List>
//             </Grid>
//         </Grid >
//     )
// }