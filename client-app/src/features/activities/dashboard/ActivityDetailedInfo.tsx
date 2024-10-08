import { observer } from 'mobx-react-lite';
import { Activity } from "../../../app/models/activity";
import { Card, CardContent, Typography, Grid, Icon, Divider } from '@mui/material/';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InfoIcon from '@mui/icons-material/Info';

interface Props {
    activity: Activity
}



export default observer(function ActivityDetailedInfo({ activity }: Props) {

    return (<>
        <Card sx={{
            width: '100%',
            mt: 2,
        }}>
            <CardContent sx={{}}>
                <Grid container spacing={1}>
                    <Grid item xs={1} container alignItems="center">
                        <Icon color='primary'><InfoIcon /></Icon>
                    </Grid>
                    <Grid item xs={8} container alignItems="left">
                        <Typography variant="body2">{activity.description}</Typography>
                    </Grid>
                </Grid>
            </CardContent>
            <Divider />
            <CardContent sx={{}}>
                <Grid container spacing={1}>
                    <Grid item xs={1} container alignItems="center">
                        <Icon color='primary'><CalendarMonthIcon /></Icon>
                    </Grid>
                    <Grid item xs={8} container alignItems="left">
                        <Typography variant="body2">{activity.date.toString()}</Typography>
                    </Grid>
                </Grid>
            </CardContent>
            <Divider />
            <CardContent sx={{}}>
                <Grid container >
                    <Grid item xs={1} container alignItems="center">
                        <Icon color='primary'><LocationOnIcon /></Icon>
                    </Grid>
                    <Grid item xs={8} container alignItems="left">
                        <Typography variant="body2">{activity.city}, {activity.venue}</Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card >
    </>

    )
})