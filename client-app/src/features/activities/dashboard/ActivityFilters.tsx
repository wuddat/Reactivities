import { observer } from 'mobx-react-lite';
import { Activity } from "../../../app/models/activity";
import { Card, CardContent, Button, Typography, Grid, Divider, Avatar, Icon } from '@mui/material/';
import StarIcon from '@mui/icons-material/Star';
import Calendar from "react-calendar";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { teal } from '@mui/material/colors';

interface Props {

}



export default observer(function ActivityFilters({ }: Props) {

    return (<>
        <Card sx={{
            width: '100%',
            mb: 3,
        }}>
            <CardContent sx={{
                backgroundColor: "white",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
            }}>
                <Icon ><FilterAltIcon sx={{ color: teal[500] }} /></Icon>
                <Typography variant="h6" color="teal">Filters</Typography>
            </CardContent>
            <Divider />
            <CardContent sx={{}}>
                <Grid container >
                    <Grid container spacing={2} sx={{ border: '0px solid blue' }}>
                        <Grid item xs={9} sx={{ border: '0px solid red' }}>
                            <Typography variant="body1">All Activities</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
            <Divider />
            <CardContent sx={{}}>
                <Grid container >
                    <Grid container spacing={2} sx={{ border: '0px solid blue' }}>
                        <Grid item xs={9} sx={{ border: '0px solid red' }}>
                            <Typography variant="body1">I'm going</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
            <Divider />
            <CardContent sx={{}}>
                <Grid container >
                    <Grid container spacing={2} sx={{ border: '0px solid blue' }}>
                        <Grid item xs={9} sx={{ border: '0px solid red' }}>
                            <Typography variant="body1">I'm hosting</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
        </Card >
        < Calendar />
    </>

    )
})