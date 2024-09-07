import { observer } from "mobx-react-lite";
import { useStore } from "../../app/stores/store";
import { useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import ProfileEdit from "./ProfileEdit";



export default observer(function ProfileAbout() {
    const { profileStore } = useStore();
    const { isCurrentUser, profile } = profileStore;
    const [editMode, setEditMode] = useState(false);

    return (
        <Box position="relative" width="100%">
            {/* Button fixed to the right top corner */}
            {isCurrentUser &&
                (<Button
                    variant="contained"
                    color={editMode ? "error" : "success"}
                    sx={{ position: "absolute", top: 0, right: 16, zIndex: 1 }}
                    onClick={() => setEditMode(!editMode)}
                >
                    {editMode ? "Cancel" : "Edit Profile"}
                </Button>)}

            {editMode ? (

                <ProfileEdit setEditMode={setEditMode} />
            ) : (
                <Grid container>
                    <Grid item xs={10}>
                        <Typography component="p" sx={{ whiteSpace: 'pre-line' }}>{profile?.bio}</Typography>
                    </Grid></Grid >
            )}
        </Box>)


})