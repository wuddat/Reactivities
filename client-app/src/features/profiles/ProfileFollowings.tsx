import { observer } from "mobx-react-lite";
import { useStore } from "../../app/stores/store";
import { Grid, Typography } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';

import LoadingComponentMini from "../../app/layout/LoadingComponentMini";
import ProfileCard from "./ProfileCard";



export default observer(function ProfileFollowings() {
    const { profileStore } = useStore();
    const { profile, followings, loadingFollowings, activeTab } = profileStore;


    if (loadingFollowings) return <LoadingComponentMini content="Loading followings..." />

    return (
        <Grid container>
            <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center' }}>
                <PersonIcon />
                <Typography variant="h6" sx={{ ml: 1 }}>
                    {activeTab === 3 ? `People following ${profile?.displayName}` : `People ${profile?.displayName} is following`}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={2} direction='row'
                    sx={{
                        justifyContent: "space-evenly",
                        alignItems: "center",
                    }}>
                    {followings.map(profile => (
                        <Grid item xs={3} key={profile.username}
                        >
                            <ProfileCard profile={profile} key={profile.username + '1'} />
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );
})