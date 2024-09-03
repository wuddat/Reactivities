import { Card, CardActions, CardContent, Button, Typography, Box, Grid, IconButton, Avatar, CardHeader } from '@mui/material/';
import SendIcon from '@mui/icons-material/Send';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { Activity } from '../../../app/models/activity';
import { Link } from 'react-router-dom';

interface Props {
    activity: Activity
}

export default function ActivityListItem({ activity }: Props) {


    return (
        <Box sx={{ flexGrow: 1, mb:2 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Card sx={{ flexGrow: 1 }}>
                        <CardHeader as={Link} to={`/activities/${activity.id}`} sx={{ mb: 3 }}
                            avatar={
                                <Avatar sx={{ width: 100, height: 100 }} src="/assets/user.png">

                                </Avatar>
                            }
                            action={<Box></Box>}
                            title={<Typography variant="h5">{activity.title}</Typography>}
                            subheader={
                                <Box sx={{ flexGrow: 1 }}>
                                    <Grid container spacing={0}>
                                        <Grid item xs={8}>
                                            <Typography variant="body2">{activity.venue}, {activity.city}</Typography>
                                            <Typography gutterBottom fontSize={'.8em'}>Hosted by Bob</Typography>
                                        </Grid>
                                        <Grid item xs={4}> </Grid>
                                    </Grid>
                                </Box>}
                        />
                        <Box sx={{
                            width: '90%',
                            marginX: 'auto',
                        }}><Grid container spacing={2} ><Grid rowSpacing={0}  >

                        </Grid></Grid></Box>
                        <CardContent sx={{
                            width: '100%',
                            backgroundColor: '#eee',
                            borderBottom: '1px solid lightgrey',
                            borderTop: '1px solid lightgrey'
                        }}>
                            <Box sx={{
                                width: '90%',
                                marginX: 'auto'
                            }}>
                                <Typography variant="body2" color="text.secondary">
                                    {activity.description}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Attendees go here
                                </Typography>
                            </Box>
                        </CardContent>
                        <CardActions sx={{}}>
                            <Grid container spacing={2}>
                                <Grid item xs={3} container alignItems="center">
                                    <IconButton aria-label="add to favorites">
                                        <FavoriteIcon /><Typography fontSize={'.5em'} sx={{ ml: 1 }}>X people attending</Typography>
                                    </IconButton>
                                </Grid>
                                <Grid item xs={3} container alignItems="center" justifyContent="left">
                                    <IconButton aria-label="share">
                                        <ShareIcon />
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
        </Box>
    )
}