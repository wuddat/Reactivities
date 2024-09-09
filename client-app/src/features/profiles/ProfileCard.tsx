import { Profile } from '../../app/models/profile';
import { observer } from 'mobx-react-lite';
import { Card, CardContent, CardMedia, Typography, CardActions, Stack, Divider, CardActionArea } from '@mui/material';
import GroupsIcon from '@mui/icons-material/Groups';
import FollowButton from './FollowButton';

interface Props {
    profile: Profile;
}


export default observer(function ProfileCard({ profile }: Props) {

    return (
        <Card sx={{ height: '100%', width: '200px' }}>

            <CardActionArea href={`/profiles/${profile.username}`}>
                <CardMedia
                    component='img'
                    height='200'
                    image={profile.image || '/assets/user.png'} />
                <CardContent sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Typography gutterBottom variant='h5' sx={{ textJustify: 'center' }}>{profile.displayName}</Typography>
                    <Typography variant='body2' sx={{
                        color: 'text.secondary', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis'
                    }}>{profile.bio}</Typography>
                </CardContent >
                </CardActionArea>
                <Divider />
                <CardContent sx={{ p: 0, m: 1 }}>
                    <Stack direction="row" spacing={2}>
                        <GroupsIcon />
                        <Typography variant='subtitle2'>{profile.followersCount} {profile.followersCount === 1 ? 'person following' : 'people following'}</Typography>
                    </Stack>
                </CardContent>
                <Divider />

                    <CardActions disableSpacing sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: 0, m: 0,}}>
                        <FollowButton profile={profile} />
                    </CardActions>

        </Card>
    )

})