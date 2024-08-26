import { Card, CardActions, CardContent, Button, Typography, Box } from '@mui/material/';
import SendIcon from '@mui/icons-material/Send';
import LoadingButton from '@mui/lab/LoadingButton'
import CloseIcon from '@mui/icons-material/Close';
import { SyntheticEvent, useState } from 'react';
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';


export default observer(function ActivityList() {
    const { activityStore } = useStore();
    const [target, setTarget] = useState('');
    const { deleteActivity, activitiesByDate, loading } = activityStore;


    function handleActivityDelete(e: SyntheticEvent<HTMLButtonElement>, id: string) {
        setTarget(e.currentTarget.name);
        deleteActivity(id);
    }

    return (
        <Box sx={{ width: '100%' }}>
            {activitiesByDate.map(activity => (
                <Card key={activity.id} sx={{ mb: 0, border: '.10rem solid lightgrey' }}>
                    <CardContent sx={{ m: 0, pb: 0 }}>
                        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                            <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                                {activity.title}
                            </Typography>
                            <LoadingButton
                                name={activity.id}
                                loading={loading && target === activity.id}
                                onClick={(e) => handleActivityDelete(e, activity.id)}
                                variant="outlined" color="error" size="small"
                                sx={{
                                    transition: 'all 0.3s ease',
                                    ':hover': {
                                        bgcolor: 'rgba(211, 47, 47, 0.5)',
                                        color: 'white'
                                    }
                                }}

                            ><span><CloseIcon /></span></LoadingButton>
                        </Box>
                        <Typography gutterBottom variant="body2" color="text.secondary">
                            {activity.date}
                        </Typography>
                        <Typography variant="body2" sx={{ pt: 1 }}>
                            {activity.description}
                        </Typography>

                        <Typography variant="body2" >
                            {activity.city},{activity.venue}
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing sx={{ display: 'flex', justifyContent: 'space-between', }}>
                        <Button

                            sx={{
                                color: "black",
                                borderColor: "black",
                                ml: 1
                            }}
                            variant="outlined"
                            size="small"
                        >
                            {activity.category}
                        </Button>
                        <Button component='a' href={`/activities/${activity.id}`} sx={{ paddingLeft: '3em' }} variant="contained" endIcon={<SendIcon />}>View</Button>
                    </CardActions>
                </Card>
            ))}
        </Box>)
})