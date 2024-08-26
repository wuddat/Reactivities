import { Container } from "@mui/material";
import ActivityList from "./ActivityList";
import Grid from "@mui/material/Unstable_Grid2/";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import LoadingComponent from "../../../app/layout/LoadingComponent";


export default observer(function ActivityDashboard() {
    const { activityStore } = useStore();
    const { loadActivities, activityRegistry } = activityStore;

    useEffect(() => {
        if (activityRegistry.size <= 1) loadActivities();
    }, [loadActivities, activityRegistry.size])

    if (activityStore.loadingInitial) return <LoadingComponent content='Loading...' />


    return (

        <Container sx={{
            bgcolor: '#eee',
            display: 'flex',
            flexDirection: 'column',
            pt: 5

        }}>
            <Grid container spacing={3}>
                <Grid xs={8}>
                    <ActivityList />
                </Grid>
                <Grid xs>
                    <h2>Activity Filters</h2>
                </Grid>
            </Grid>
        </Container >

    )
})