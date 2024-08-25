import { Container } from "@mui/material";
import ActivityList from "./ActivityList";
import Grid from "@mui/material/Unstable_Grid2/";
import ActivityDetails from "./ActivityDetails";
import ActivityForm from "../form/ActivityForm";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";


export default observer(function ActivityDashboard() {

    const { activityStore } = useStore();
    const { selectedActivity, editMode, } = activityStore;

    return (

        <Container sx={{
            bgcolor: '#eee',
            display: 'flex',
            flexDirection: 'column',

        }}>
            <Grid container spacing={3}>
                <Grid xs={8}>
                    <ActivityList />
                </Grid>
                <Grid xs>
                    {selectedActivity && !editMode &&
                        <ActivityDetails
                        />}
                    {editMode &&
                        <ActivityForm />}
                </Grid>
            </Grid>
        </Container >

    )
})