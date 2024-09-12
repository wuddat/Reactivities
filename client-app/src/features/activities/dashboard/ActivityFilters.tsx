import { observer } from 'mobx-react-lite';
import { Card, CardContent, Typography, Grid, Divider, Icon, CardActionArea } from '@mui/material/';
import Calendar from "react-calendar";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { teal } from '@mui/material/colors';
import { useStore } from '../../../app/stores/store';

interface Props {

}



export default observer(function ActivityFilters({ }: Props) {
    const { activityStore: { predicate, setPredicate } } = useStore();
    const activeFilter = predicate.get('all') ? 'all' : predicate.get('isGoing') ? 'isGoing' : predicate.get('isHost') ? 'isHost' : '';

    const handleClick = (q: string, a: string) => {
        setPredicate(q, a);
    }

    return (<>
        <Card sx={{
            width: '100%',
            mb: 3,
        }}>
            <CardContent
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',

                }}>
                <Icon ><FilterAltIcon sx={{ color: teal[500] }} /></Icon>
                <Typography variant="h6" color="teal">Filters</Typography>
            </CardContent>
            <Divider />
            <CardActionArea onClick={() => handleClick('all', 'true')}>
                <CardContent style={{
                    backgroundColor: activeFilter === 'all' ? 'green' : 'white',
                    color: activeFilter === 'all' ? 'white' : 'black',

                }}>
                    <Grid container >
                        <Grid container spacing={2} sx={{ border: '0px solid blue' }}>
                            <Grid item xs={9} sx={{ border: '0px solid red' }}>
                                <Typography variant="body1">All Activities</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </CardContent>
            </CardActionArea>
            <Divider />
            <CardActionArea onClick={() => handleClick('isGoing', 'true')}>
                <CardContent style={{
                    backgroundColor: activeFilter === 'isGoing' ? 'green' : 'white',
                    color: activeFilter === 'isGoing' ? 'white' : 'black',
                }}>
                    <Grid container >
                        <Grid container spacing={2} sx={{ border: '0px solid blue' }}>
                            <Grid item xs={9} sx={{ border: '0px solid red' }}>
                                <Typography variant="body1">I'm going</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </CardContent>
            </CardActionArea>
            <Divider />
            <CardActionArea onClick={() => handleClick('isHost', 'true')}>
                <CardContent style={{
                    backgroundColor: activeFilter === 'isHost' ? 'green' : 'white',
                    color: activeFilter === 'isHost' ? 'white' : 'black',

                }}>
                    <Grid container >
                        <Grid container spacing={2} sx={{ border: '0px solid blue' }}>
                            <Grid item xs={9} sx={{ border: '0px solid red' }}>
                                <Typography variant="body1">I'm hosting</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </CardContent>
            </CardActionArea>
        </Card >
        < Calendar
            onChange={(date) => setPredicate('startDate', date as Date)}
            value={predicate.get('startDate') || new Date()} />
    </>

    )
})