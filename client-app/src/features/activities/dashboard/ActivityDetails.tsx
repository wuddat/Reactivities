import { Card, CardActions, CardContent, CardMedia, Button, Typography, Box, Grid } from '@mui/material/';
import { useStore } from '../../../app/stores/store';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import ActivityDetailedHeader from './ActivityDetailedHeader';
import ActivityDetailedInfo from './ActivityDetailedInfo';
import ActivityDetailedSidebar from './ActivityDetailedSidebar';
import ActivityDetailedChat from './ActivityDetailedChat';
import ActivityDetailedSubHeader from './ActivityDetailedSubHeader';

export default observer(function ActivityDetails() {

    const { activityStore } = useStore();
    const { selectedActivity: activity, loadActivity, loadingInitial } = activityStore;
    const { id } = useParams();

    useEffect(() => {
        if (id) loadActivity(id);
    }, [id, loadActivity])

    if (loadingInitial || !activity) return <LoadingComponent />;

    return (
        <Box>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <ActivityDetailedHeader activity={activity} />
                    <ActivityDetailedSubHeader activity={activity} />
                    <ActivityDetailedInfo activity={activity} />
                    <ActivityDetailedChat activity={activity} />
                </Grid>
                <Grid item xs={4}>
                    <ActivityDetailedSidebar activity={activity} />
                </Grid>
            </Grid>
        </Box >)
})