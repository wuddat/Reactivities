import { ChangeEvent, useEffect, useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton'
import SendIcon from "@mui/icons-material/Send"
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { useNavigate, useParams } from "react-router-dom";
import { Activity } from "../../../app/models/activity";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { v4 as uuid } from 'uuid';


export default observer(function ActivityForm() {

    const { activityStore } = useStore();
    const { createActivity, updateActivity, loading, loadActivity, loadingInitial } = activityStore
    const { id } = useParams();
    const navigate = useNavigate();

    const [activity, setActivity] = useState<Activity>({
        id: '',
        title: '',
        category: '',
        description: '',
        date: '',
        city: '',
        venue: ''
    });

    useEffect(() => {
        if (id) loadActivity(id).then(activity => setActivity(activity!))
    }, [id, loadActivity]);


    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (!activity.id) {
            activity.id = uuid();
            createActivity(activity).then(() => navigate(`/activities/${activity.id}`))
        } else {
            updateActivity(activity).then(() => navigate(`/activities/${activity.id}`))
        }
    }


    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = event.target;
        setActivity({ ...activity, [name]: value })
    }

    if (loadingInitial) return <LoadingComponent />

    return (
        <Box component="form" sx={{
            display: "flex",
            flexDirection: 'column',
            backgroundColor: 'white'
        }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}>

            <Box sx={{ display: "flex", justifyContent: "space-between", m: 1 }}><TextField
                fullWidth={true}
                required
                id="outlined-required"
                label="Title"
                name="title"
                value={activity.title}
                onChange={handleInputChange} />

                <Button sx={{ p: 0, m: 0 }} variant="outlined" color="error" size="small" component='a' href='/activities'>X</Button>


            </Box>
            <Box sx={{ m: 1, }}><TextField
                fullWidth={true}
                required
                id="outlined-required"
                label="Description"
                name="description"
                value={activity.description}
                onChange={handleInputChange} />
            </Box>
            <Box sx={{ m: 1 }}><TextField
                fullWidth={true}
                required
                id="outlined-required"
                label="Category"
                name="category"
                value={activity.category}
                onChange={handleInputChange} />
            </Box>
            <Box sx={{ m: 1 }}><TextField
                fullWidth={true}
                required
                id="outlined-required"
                label=""
                name="date"
                type="date"
                value={activity.date}
                onChange={handleInputChange} />
            </Box>
            <Box sx={{ m: 1 }}><TextField
                fullWidth={true}
                required
                id="outlined-required"
                label="City"
                name="city"
                value={activity.city}
                onChange={handleInputChange} />
            </Box>
            <Box sx={{ m: 1 }}><TextField
                fullWidth={true}
                required
                id="outlined-required"
                label="Venue"
                name="venue"
                value={activity.venue}
                onChange={handleInputChange} />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: "row" }}>
                <LoadingButton
                    endIcon={<SendIcon />} loading={loading} loadingPosition="end"
                    sx={{ flex: 1 }} variant="contained" type="submit" ><span>Submit</span></LoadingButton>
            </Box>

        </Box >
    )
})