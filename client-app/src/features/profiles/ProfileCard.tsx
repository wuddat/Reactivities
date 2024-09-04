import { Profile } from '../../app/models/profile';
import { observer } from 'mobx-react-lite';
import { Card, CardContent, CardMedia, CardActionArea, Typography, CardActions, Box, Stack } from '@mui/material';
import GroupsIcon from '@mui/icons-material/Groups';

interface Props {
    profile: Profile;
}


export default observer(function ProfileCard({ profile }: Props) {

    return (
        <Box sx={{ backgroundColor: 'transparent' }}>
            <Card raised sx={{ minHeight: '300px', width: '300px' }}>
                <CardActionArea
                    href={`/profiles/${profile.username}`}>
                    <CardMedia
                        component='img'
                        height='200'
                        image={profile.image || '/assets/user.png'} />
                </CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant='h5'>{profile.displayName}</Typography>
                    <Typography variant='body2' sx={{ color: 'text.secondary' }}>profile bio here</Typography>
                </CardContent>
                <CardActions>
                    <Stack direction="row" spacing={2}>
                        <GroupsIcon />
                        <Typography variant='subtitle2'>20 followers</Typography>
                    </Stack>
                </CardActions>
            </Card>
        </Box>
    )

})