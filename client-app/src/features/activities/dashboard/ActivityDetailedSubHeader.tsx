import { observer } from 'mobx-react-lite';
import { Activity } from "../../../app/models/activity";
import { Card, CardActions, Button, Grid } from '@mui/material/';

interface Props {
    activity: Activity
}



export default observer(function ActivityDetailedSubHeader({ activity }: Props) {

    return (
        <Card sx={{
            width: '100%',
        }}>
            <CardActions sx={{ mb: 0 }}>
                <Grid container sx={{ m: 0, p: 0 }}>
                    <Grid item xs={3} alignItems="center" sx={{ m: 0, p: 0 }}>
                        <Button variant='contained' color='primary'>Join Activity</Button>
                    </Grid>
                    <Grid item xs={3} alignItems="center" justifyContent="left" sx={{ m: 0, p: 0 }}>
                        <Button variant='contained' disabled color='error'>Cancel attendance</Button></Grid>
                    <Grid item xs={6} container alignItems="center" justifyContent="flex-end" sx={{ m: 0, p: 0 }}>
                        <Button variant='contained' color='warning'>Manage Event</Button></Grid>
                </Grid></CardActions>
        </Card >

    )
})