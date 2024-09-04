import { Card, CardActions, CardContent, Button, Typography, Box, Grid, IconButton, Avatar, CardHeader, Alert, Icon, Stack, Divider } from '@mui/material/';
import SendIcon from '@mui/icons-material/Send';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { Activity } from '../../../app/models/activity';
import ActivityAttendeesList from './ActivityAttendeesList';
import { Profile } from '../../../app/models/profile';
import StarIcon from '@mui/icons-material/Star';
import InfoIcon from '@mui/icons-material/Info';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';


interface Props {
    activity: Activity,
    attendees: Profile[]
}

export default function ActivityListItem({ activity, attendees }: Props) {



    return (
        <Box sx={{ flexGrow: 1, mb: 2 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Card sx={{ flexGrow: 1 }}>
                        {activity.isCancelled &&
                            <Grid component="div" sx={{ m: 1 }} >
                                <Alert variant="outlined" severity="error">
                                    Event is currently cancelled
                                </Alert>
                            </Grid>
                        }
                        <CardHeader sx={{ mb: 0 }}
                            avatar={
                                <Avatar sx={{ width: 100, height: 100 }} src="/assets/user.png" />
                            }
                            action={<Box></Box>}
                            title={<Typography variant="h5">{activity.title}</Typography>}
                            subheader={
                                <Box sx={{ flexGrow: 1 }}>
                                    <Grid container spacing={0}>
                                        <Grid item xs={8}>
                                            <Typography variant="body2">{activity.venue}, {activity.city}</Typography>
                                            <Typography gutterBottom fontSize={'.8em'}>Hosted by {activity.host?.displayName}</Typography>
                                        </Grid>
                                    </Grid>
                                </Box>}
                        />
                        <CardContent sx={{ borderTop: '1px solid lightgrey' }}>
                            <Stack direction="row" spacing={4}>
                                <Stack direction="row"
                                    divider={<Divider orientation="vertical" flexItem />}
                                    spacing={2}>
                                    <Icon><InfoIcon /></Icon>
                                    <Typography variant="body2">{activity.description}</Typography>
                                </Stack>
                                <Stack direction="row"
                                    divider={<Divider orientation="vertical" flexItem />}
                                    spacing={2}>
                                    <Icon><CalendarMonthIcon /></Icon>
                                    <Typography variant="body2">{activity.date}</Typography>
                                </Stack>
                            </Stack>
                        </CardContent>
                        <CardContent sx={{
                            width: '100%',
                            backgroundColor: '#eee',
                            borderBottom: '1px solid lightgrey',
                            borderTop: '1px solid lightgrey'
                        }}>
                            <ActivityAttendeesList attendees={activity.attendees!} />
                        </CardContent>
                        <CardActions sx={{}}>
                            <Grid container spacing={2}>
                                <Grid item xs={3} container alignItems="center">
                                    {activity.isGoing && !activity.isHost && (
                                        <Alert variant="filled" color="success" icon={<FavoriteIcon />} sx={{ m: 0, pl: 1, pt: 0, pb: 0 }}>
                                            <Typography sx={{ pr: 1 }} fontSize={'.8em'}>You are attending!</Typography>
                                        </Alert>
                                    )}
                                    {!activity.isGoing && (
                                        <IconButton aria-label="add to favorites">
                                            <FavoriteIcon /><Typography fontSize={'.5em'} sx={{ ml: 1 }}>{attendees.length} {attendees.length === 1 ? 'Person' : 'People'} going!</Typography>
                                        </IconButton>
                                    )}
                                    {activity.isHost && (
                                        <Alert variant="filled" color="warning" icon={<StarIcon />} sx={{ m: 0, pl: 1, pt: 0, pb: 0 }}>
                                            <Typography sx={{ pr: 1 }} fontSize={'.8em'}>You are the Host!</Typography>
                                        </Alert>
                                    )}
                                </Grid>
                                <Grid item xs={3} container alignItems="center" justifyContent="left">
                                    <IconButton aria-label="share">
                                        <ShareIcon /> <Typography fontSize={'.5em'} sx={{ ml: 1 }}>invite a friend</Typography>
                                    </IconButton>
                                </Grid>
                                <Grid item xs={6} container alignItems="center" justifyContent="flex-end">
                                    <Button component='a' href={`/activities/${activity.id}`} sx={{}} variant="contained" endIcon={<SendIcon />}>View</Button>
                                </Grid>
                            </Grid>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Box >
    )
}