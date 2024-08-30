import { observer } from 'mobx-react-lite';
import React from 'react'
import { Activity } from "../../../app/models/activity";
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Box, Grid, IconButton, Icon, Divider, CardHeader, Avatar, TextField } from '@mui/material/';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InfoIcon from '@mui/icons-material/Info';

interface Props {
    activity: Activity
}



export default observer(function ActivityDetailedChat({ activity }: Props) {

    return (
        <Card sx={{
            width: '100%',
            mt: 2,
        }}>
            <CardContent sx={{
                backgroundColor: "teal",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Typography variant="h5" color="white">Join the Conversation!</Typography>
            </CardContent>
            <Divider />
            <CardContent sx={{}}>
                <Grid container >
                    <Grid container spacing={2} sx={{ border: '0px solid blue' }}>
                        <Grid item xs={1} sx={{ border: '0px solid green' }}>
                            <Avatar sx={{ width: 50, height: 50 }} aria-label="avatar" src="/assets/user.png">
                            </Avatar>
                        </Grid>
                        <Grid item xs={11} sx={{ border: '0px solid red' }}>
                            <Grid container sx={{ border: '0px solid black' }} direction="row">
                                <Typography variant="body1">USER:</Typography>
                                <Typography sx={{ ml: 1 }} variant="body1" color='grey'>Today at 5:42PM</Typography>
                            </Grid>
                            <Grid item xs={12} sx={{ border: '0px solid yellow' }}>
                                <Typography variant="body1">I AM A COMMENT!</Typography>
                                <Button size="small">Reply</Button>
                            </Grid>
                        </Grid>

                    </Grid>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField fullWidth id="outlined-basic" variant="outlined" placeholder="Share something about the event.." multiline minRows='5' />
                        <Button sx={{ mt: 2 }} variant="contained">Add Reply</Button>
                    </Grid>
                </Grid>
            </CardContent>
        </Card >

    )
})