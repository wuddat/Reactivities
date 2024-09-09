import { ChangeEvent, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Profile } from '../../app/models/profile';
import { useStore } from '../../app/stores/store';



import { Box, Button, Switch } from '@mui/material';

interface Props {
    profile: Profile;
}

export default observer(function FollowButton({ profile }: Props) {
    const { profileStore, userStore } = useStore();
    const { updateFollowing, } = profileStore;

    const [isChecked, setIsChecked] = useState(profile.following);
    const [followStatus, setFollowStatus] = useState(profile.following ? 'Following' : 'Not following');

    if (userStore.user?.username === profile.username) return null;




    // Function to be executed when the switch is toggled
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newFollowingStatus = (e.target.checked);
        setIsChecked(newFollowingStatus);
        updateFollowing(profile.username, newFollowingStatus);
        setFollowStatus(newFollowingStatus ? 'Following' : 'Not following');
    };

    return (
        <Box display="flex" alignItems="center" width="100%">
            <Switch
                checked={isChecked}
                onChange={handleChange}
                color="primary"
                sx={{ display: 'none' }}
            />
            <Button
                variant="contained"
                fullWidth

                sx={{
                    backgroundColor: isChecked ? 'green' : 'gray',
                    color: 'white',
                    '&:hover': {
                        backgroundColor: isChecked ? 'darkgreen' : 'darkgray',
                    }
                }}
                onClick={() => handleChange({ target: { checked: !isChecked } } as ChangeEvent<HTMLInputElement>)}
            >
                {followStatus}
            </Button>
        </Box>
    );
})
