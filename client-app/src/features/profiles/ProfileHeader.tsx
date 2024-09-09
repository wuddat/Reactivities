import { Grid, Avatar, Typography, Divider } from "@mui/material";
import { Profile } from "../../app/models/profile";
import { observer } from "mobx-react-lite";
import FollowButton from "./FollowButton";

interface Props {
    profile: Profile;
}


export default observer(function ProfileHeader({ profile }: Props) {

    return (

        <Grid container sx={{ backgroundColor: "white", p: 2, border: "1px solid lightgray", mb: 2 }}>
            <Grid item xs={8} sx={{ display: "flex", alignItems: 'center', }}>
                <Avatar sx={{ width: 150, height: 150 }} src={profile.image || '/assets/user.png'} />
                <Typography variant="h4" sx={{ ml: 2 }}>{profile.displayName}</Typography>
            </Grid>
            <Grid item container xs={4} sx={{ alignItems: 'center', justifyContent: 'center' }}>
                <Grid item xs={6} sx={{ mb: 1 }}>
                    <Typography variant="h3" align="center">{profile.followersCount}</Typography>
                    <Typography variant="subtitle2" align="center" sx={{ m: -1, p: 0 }}>Followers</Typography>
                </Grid>
                <Grid item xs={6} sx={{ mb: 1 }}>
                    <Typography variant="h3" align="center">{profile.followingCount}</Typography>
                    <Typography variant="subtitle2" align="center" sx={{ m: -1, p: 0 }}>Following</Typography>
                </Grid>
                <Grid item xs={12} >
                    <Divider />
                </Grid>
                <Grid item xs={12} >
                    <FollowButton profile={profile} />
                </Grid>
            </Grid>
        </Grid>

    )
})