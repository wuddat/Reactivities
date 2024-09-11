
import { Tabs, Tab, Box } from '@mui/material';
import ProfilePhotos from './ProfilePhotos';
import { Profile } from '../../app/models/profile';
import { observer } from 'mobx-react-lite';
import ProfileAbout from './ProfileAbout';
import ProfileFollowings from './ProfileFollowings';
import { useStore } from '../../app/stores/store';
import ProfileActivities from './ProfileActivities';

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
        { menuItem: 'Events', render: <ProfileActivities /> },
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
