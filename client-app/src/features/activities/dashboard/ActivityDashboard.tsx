import { Button, Container, Grid } from "@mui/material";
import ActivityList from "./ActivityList";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import ActivityFilters from "./ActivityFilters";
import { PagingParams } from "../../../app/models/pagination";
import InfiniteScroll from "react-infinite-scroller";
import CardLoadingComponent from "../../../app/layout/CardLoadingComponent";



export default observer(function ActivityDashboard() {
    const { activityStore } = useStore();
    const { loadActivities, activityRegistry, setPagingParams, pagination, } = activityStore;
    const [loadingNext, setLoadingNext] = useState(false);

    function handleGetNext() {
        setLoadingNext(true);
        setPagingParams(new PagingParams(pagination!.currentPage + 1))
        loadActivities().then(() => setLoadingNext(false));
    }

    useEffect(() => {
        if (activityRegistry.size <= 1) loadActivities();
    }, [loadActivities, activityRegistry.size])


    return (
        <Container sx={{
            bgcolor: '#eee'
        }}>
            <Grid container spacing={3}>
                <Grid item xs={8} >
                    {activityStore.loadingInitial && activityRegistry.size === 0 && !loadingNext ? (
                        <>
                            <CardLoadingComponent />
                            <CardLoadingComponent />
                        </>
                    ) : (<InfiniteScroll
                        pageStart={0}
                        loadMore={handleGetNext}
                        hasMore={!loadingNext && !!pagination && pagination.currentPage < pagination.totalPages}
                        initialLoad={false}
                    >
                        <ActivityList />
                    </InfiniteScroll>)}

                </Grid>
                <Grid item xs sx={{ mt: 7 }}>
                    <ActivityFilters />
                </Grid>

            </Grid>
        </Container >

    )
})