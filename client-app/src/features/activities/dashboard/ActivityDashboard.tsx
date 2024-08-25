import { Container } from "@mui/material";
import { Activity } from "../../../app/models/activity";
import ActivityList from "./ActivityList";
import Grid from "@mui/material/Unstable_Grid2/";
import ActivityDetails from "./ActivityDetails";
import ActivityForm from "../form/ActivityForm";




interface Props {
    activities: Activity[];
    selectedActivity: Activity | undefined;
    selectActivity: (id: string) => void;
    cancelSelectActivity: () => void;
    editMode: boolean;
    openForm: (id: string) => void;
    closeForm: () => void;
    createorEdit: (activity: Activity) => void;
    deleteActivity: (id: string) => void;
    submitting: boolean;

}


export default function ActivityDashboard({ activities, selectedActivity, selectActivity, cancelSelectActivity, openForm, closeForm, editMode, createorEdit, deleteActivity, submitting }: Props) {
    return (

        <Container sx={{
            bgcolor: '#eee',
            display: 'flex',
            flexDirection: 'column',

        }}>
            <Grid container spacing={3}>
                <Grid xs={8}>
                    <ActivityList activities={activities} selectActivity={selectActivity} deleteActivity={deleteActivity} submitting={submitting} />
                </Grid>
                <Grid xs>
                    {selectedActivity && !editMode &&
                        <ActivityDetails
                            activity={selectedActivity}
                            cancelSelectActivity={cancelSelectActivity}
                            openForm={openForm}
                        />}
                    {editMode &&
                        <ActivityForm closeForm={closeForm} activity={selectedActivity} createorEdit={createorEdit} submitting={submitting} />}
                </Grid>
            </Grid>
        </Container >

    )
}




