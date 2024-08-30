import { Container, Grid } from "@mui/material";
import ActivityList from "./ActivityList";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import ActivityFilters from "./ActivityFilters";



export default observer(function ActivityDashboard() {
    const { activityStore } = useStore();
    const { loadActivities, activityRegistry } = activityStore;

    useEffect(() => {
        if (activityRegistry.size <= 1) loadActivities();
    }, [loadActivities, activityRegistry.size])

    if (activityStore.loadingInitial) return <LoadingComponent content='Loading...' />


    return (
        <Container sx={{
            bgcolor: '#eee'
        }}>
            <Grid container spacing={3}>
                <Grid item xs={8} >
                    <ActivityList />
                </Grid>
                <Grid item xs sx={{ mt: 7 }}>
                    <ActivityFilters />
                </Grid>
            </Grid>
        </Container >

    )
})