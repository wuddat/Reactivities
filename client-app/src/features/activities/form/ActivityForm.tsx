import { ChangeEvent, useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import { Activity } from "../../../app/models/activity";
import LoadingButton from '@mui/lab/LoadingButton'
import SendIcon from "@mui/icons-material/Send"

interface Props {
    activity: Activity | undefined;
    closeForm: () => void;
    createorEdit: (activity: Activity) => void;
    submitting: boolean;
}


export default function ActivityForm({ activity: selectedActivity, closeForm, createorEdit, submitting }: Props) {

    const initialState = selectedActivity ?? {
        id: '',
        title: '',
        category: '',
        description: '',
        date: '',
        city: '',
        venue: ''
    }

    const [activity, setActivity] = useState(initialState);


    const handleSubmit = (e: any) => {
        e.preventDefault();
        createorEdit(activity);
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = event.target;
        setActivity({ ...activity, [name]: value })
    }

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
                required
                id="outlined-required"
                label="Title"
                name="title"
                value={activity.title}
                onChange={handleInputChange} />

                <Button onClick={closeForm} sx={{ p: 0, m: 0 }} variant="outlined" color="error" type="submit" size="small" >X</Button>


            </Box>
            <Box sx={{ m: 1 }}><TextField
                required
                id="outlined-required"
                label="Description"
                name="description"
                value={activity.description}
                onChange={handleInputChange} />
            </Box>
            <Box sx={{ m: 1 }}><TextField
                required
                id="outlined-required"
                label="Category"
                name="category"
                value={activity.category}
                onChange={handleInputChange} />
            </Box>
            <Box sx={{ m: 1 }}><TextField
                required
                id="outlined-required"
                label="Date"
                name="date"
                type="date"
                value={activity.date}
                onChange={handleInputChange} />
            </Box>
            <Box sx={{ m: 1 }}><TextField
                required
                id="outlined-required"
                label="City"
                name="city"
                value={activity.city}
                onChange={handleInputChange} />
            </Box>
            <Box sx={{ m: 1 }}><TextField
                required
                id="outlined-required"
                label="Venue"
                name="venue"
                value={activity.venue}
                onChange={handleInputChange} />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: "row" }}>
                <LoadingButton
                    endIcon={<SendIcon />} loading={submitting} loadingPosition="end"
                    sx={{ flex: 1 }} variant="contained" type="submit" ><span>Submit</span></LoadingButton>
            </Box>

        </Box >
    )
}