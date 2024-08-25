import { Card, CardActions, CardContent, CardMedia, Button, Typography, Box } from '@mui/material/';
import { Activity } from "../../../app/models/activity";



interface Props {
    activity: Activity;
    cancelSelectActivity: () => void;
    openForm: (id: string) => void;

}

export default function ActivityDetails({ activity, cancelSelectActivity, openForm }: Props) {
    return (
        <Box sx={{ flex: 1 }}>
            <Card sx={{ mb: 3, border: '.10rem solid lightgrey', maxWidth: '100%' }}>
                <CardMedia
                    sx={{ height: 150 }}
                    image={`/assets/categoryImages/${activity.category}.jpg`}
                    title="green iguana"
                />
                <CardContent sx={{ m: 0, pb: 0 }}>
                    <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                        {activity.title}
                    </Typography>
                    <Typography gutterBottom variant="body2" color="text.secondary">
                        {activity.date}
                    </Typography>
                    <Typography variant="body2" sx={{ pt: 2, pb: 0, mb: 1 }}>
                        {activity.description}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing sx={{ display: 'flex', flexDirection: 'row', p: 1, m: 0, borderTop: '.10rem solid lightgrey', }}>
                    <Button
                        onClick={() => openForm(activity.id)}
                        variant="outlined" sx={{ flex: 1, borderTopRightRadius: 0, borderBottomRightRadius: 0 }}>Edit</Button>
                    <Button
                        onClick={cancelSelectActivity}
                        variant="outlined" sx={{ flex: 1, color: "gray", borderColor: "gray", borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }} >Cancel</Button>
                </CardActions>
            </Card>
        </Box>)
}