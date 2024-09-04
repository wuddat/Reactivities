import { observer } from 'mobx-react-lite';
import { Activity } from "../../../app/models/activity";
import { Typography, Box } from '@mui/material/';
import { Link } from 'react-router-dom';

interface Props {
    activity: Activity
}



export default observer(function ActivityDetailedHeader({ activity }: Props) {


    const imageUrl = `/assets/categoryImages/${activity.category}.jpg`;



    return (
        <Box sx={{
            backgroundImage: `url(${imageUrl})`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '50%',
            position: 'relative',
        }}>
            <Box sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                zIndex: 1,
            }} />
            <Box sx={{ zIndex: 2, width: '90%' }}>
                <Typography variant='h2' color='white' align='center' sx={{}}>{activity.title}</Typography>
                <Typography variant='body1' color='white' align='center' sx={{}}>{activity.date}</Typography>
                <Typography variant='body1' color='white' align='right' sx={{ position: 'relative', top: '7em' }}>Hosted by: <Link to={`/profiles/${activity.host?.displayName}`}>{activity.host?.displayName}</Link></Typography>
            </Box>
        </Box >

    )
})