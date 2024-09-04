import { observer } from 'mobx-react-lite';
import { Activity } from "../../../app/models/activity";
import { Card, CardContent, Button, Typography, Grid, Divider, Avatar } from '@mui/material/';
import StarIcon from '@mui/icons-material/Star';


interface Props {
    activity: Activity
}



export default observer(function ActivityDetailedSidebar({ activity: { attendees, host } }: Props) {

    if (!attendees) return null;

    return (
        <Card sx={{
            width: '100%',
            mt: 0,
        }}>
            <CardContent sx={{
                backgroundColor: "teal",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Typography variant="h5" color="white">{attendees.length} {attendees.length === 1 ? 'Person' : 'People'} Going</Typography>
            </CardContent>
            <Divider />
            {attendees.map(attendee => (
                <CardContent sx={{ borderBottom: '1px solid lightgrey' }} key={attendee.username}>
                    <Grid container spacing={2}>
                        <Grid item sx={{ border: '0px solid green' }}>
                            <Avatar sx={{ width: 50, height: 50 }} alt={attendee.username} src={attendee.image || '/assets/user.png'} component='a' href={`/profiles/${attendee.username}`}>
                            </Avatar>
                        </Grid>
                        <Grid item xs={12} sm container sx={{ border: '0px solid red' }}>
                            <Grid item xs container direction='column' spacing={2}>
                                <Grid item xs>
                                    <Typography variant="body1">{attendee.displayName}</Typography>
                                    <Button size="small" sx={{ color: "orange", p: 0, m: 0 }}>Following</Button>
                                </Grid>
                            </Grid>
                            {attendee.username === host?.username &&
                                <Grid item xs={2} sx={{ border: '0px solid purple', display: 'flex', mr: 3 }}>
                                    <StarIcon color="warning" />
                                    <Typography variant="body1" sx={{ color: "orange", fontWeight: 800 }}>HOST</Typography>
                                </Grid>}
                        </Grid>
                    </Grid>
                </CardContent >


            ))}


            {/* <CardContent sx={{}}>
                <Grid container spacing={2} sx={{ border: '0px solid blue' }}>
                    <Grid item sx={{ border: '0px solid green' }}>
                        <Avatar sx={{ width: 50, height: 50 }} aria-label="avatar" src="/assets/user.png">
                        </Avatar>
                    </Grid>
                    <Grid item xs={12} sm container sx={{ border: '0px solid red' }}>
                        <Grid item xs container direction='column' spacing={2}>
                            <Grid item xs>
                                <Typography variant="body1">USER:</Typography>
                                <Button size="small" sx={{ color: "orange", p: 0, m: 0 }}>Following</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent >
            <Divider sx={{}} />

            <CardContent sx={{}}>
                <Grid container spacing={2} sx={{ border: '0px solid blue' }}>
                    <Grid item sx={{ border: '0px solid green' }}>
                        <Avatar sx={{ width: 50, height: 50 }} aria-label="avatar" src="/assets/user.png">
                        </Avatar>
                    </Grid>
                    <Grid item xs={12} sm container sx={{ border: '0px solid red' }}>
                        <Grid item xs container direction='column' spacing={2}>
                            <Grid item xs>
                                <Typography variant="body1">USER:</Typography>
                                <Button size="small" sx={{ color: "primary", p: 0, m: 0 }}>Follow</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent >
            <Divider sx={{}} /> */}

        </Card >

    )
})