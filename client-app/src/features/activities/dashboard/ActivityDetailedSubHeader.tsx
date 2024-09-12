import { observer } from 'mobx-react-lite';
import { Activity } from "../../../app/models/activity";
import { Card, CardActions, Button, Grid } from '@mui/material/';
import { useStore } from '../../../app/stores/store';
import { LoadingButton } from '@mui/lab';

interface Props {
    activity: Activity
}



export default observer(function ActivityDetailedSubHeader({ activity }: Props) {

    const { activityStore: { updateAttendance, loading, cancelActivityToggle } } = useStore();


    return (
        <Card sx={{}}>
            {/* {activity.isCancelled ? (
                <CardContent sx={{ borderBottom: '1px solid lightgrey' }}>
                    <Alert variant="filled" color="error" icon={<StarIcon />} sx={{ m: 0, pl: 1, pt: 0, pb: 0,}}>
                        <Typography sx={{ pr: 1 }}>EVENT CANCELLED!</Typography>
                    </Alert>
                </CardContent>) : (
                <CardContent sx={{ borderBottom: '1px solid lightgrey' }}>
                    <Alert variant="filled" color="success" icon={<StarIcon />} sx={{ m: 0, pl: 1, pt: 0, pb: 0 }}>
                        <Typography sx={{ pr: 1 }}>WE ARE LIVE!</Typography>
                    </Alert>
                </CardContent>
            )} */}




            <CardActions sx={{ mb: 0 }}>
                <Grid container sx={{ m: 0, p: 0, }}>
                    {activity.isHost ? (
                        <Grid item container xs={12} alignItems="center" justifyContent="space-between" sx={{ m: 0, p: 0 }}>
                            <LoadingButton
                                variant={activity.isCancelled ? "contained" : "outlined"}
                                color={activity.isCancelled ? "error" : "success"}
                                onClick={cancelActivityToggle}
                                loading={loading}
                            >
                                {activity.isCancelled ? 'Event Cancelled' : 'Event LIVE'}
                            </LoadingButton>
                            <Button
                                component="a"
                                href={`/manage/${activity.id}`}
                                variant='contained'
                                color='warning'
                                disabled={activity.isCancelled}>
                                Manage Event
                            </Button>
                        </Grid>
                    ) : activity.isGoing ? (
                        <Grid item xs={12} container alignItems="center" justifyContent="flex-end" sx={{ m: 0, p: 0 }}>

                            <LoadingButton loading={loading} variant="contained" color="error" onClick={updateAttendance} >
                                <span>Cancel attendance</span>
                            </LoadingButton>
                        </Grid>
                    ) : (
                        <Grid item xs={12} container alignItems="center" justifyContent="flex-end" sx={{ m: 0, p: 0 }}>
                            <LoadingButton
                                loading={loading}
                                variant="contained"
                                color="success"
                                onClick={updateAttendance}
                                disabled={activity.isCancelled} >
                                <span>Join Activity</span>
                            </LoadingButton>
                        </Grid>
                    )}
                </Grid></CardActions>
        </Card >

    )
})