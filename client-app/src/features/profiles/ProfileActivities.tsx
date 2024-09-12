import Tab from '@mui/material/Tab';
import { useStore } from '../../app/stores/store';
import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { SyntheticEvent, useEffect, useState } from 'react';
import { UserActivity } from '../../app/models/profile';
import { format } from 'date-fns';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { observer } from 'mobx-react-lite';
import LoadingComponentMini from '../../app/layout/LoadingComponentMini';



const panels = [
    { menuItem: 'Future Events', pane: { key: 'future' }, },
    { menuItem: 'Past Events', pane: { key: 'past' }, },
    { menuItem: 'Hosting', pane: { key: 'hosting' }, },
];

export default observer(function ProfileActivities() {
    const { profileStore } = useStore();
    const { loadUserActivities, profile, loadingActivities, userActivities } = profileStore;
    const [value, setValue] = useState('0');


    useEffect(() => {
        loadUserActivities(profile!.username);
    }, [loadUserActivities, profile]);

    const handleChange = (_e: SyntheticEvent, data: string) => {
        loadUserActivities(profile!.username, panels[parseInt(data)].pane.key);
        setValue(data);
        // setValue(panels[data.tabIndex as number].index);
    };

    if (loadingActivities) return <LoadingComponentMini content="Loading Events..." />

    return (
        <>
            <TabContext value={value}>
                <TabList
                    onChange={(e, data) => handleChange(e, data)}
                    sx={{ borderBottom: 1, borderColor: 'divider', }}
                >
                    {panels.map((panel, index) => (
                        <Tab key={panel.pane.key} label={panel.menuItem} value={index.toString()} />
                    ))}
                </TabList>
                <Box flexGrow={1} overflow="auto">

                    {panels.map((panel, index) => (
                        <TabPanel key={panel.menuItem} value={index.toString()}>
                            <Grid container spacing={2} direction='row' sx={{
                                justifyContent: "space-evenly",
                            }}>
                                {userActivities.map((activity: UserActivity) => (
                                    <Grid item xs={3} key={activity.id}>
                                        <Card
                                        >
                                            <CardActionArea href={`/activities/${activity.id}`}>
                                                <CardMedia
                                                    component="img"
                                                    src={`/assets/categoryImages/${activity.category}.jpg`} />
                                                <CardContent>
                                                    <Typography align='center' variant="h6" noWrap>{activity.title}</Typography>
                                                    <Typography align='center' variant="subtitle1" color='textSecondary'>{format(new Date(activity.date), 'do LLL')}</Typography>
                                                    <Typography align='center' variant="subtitle1" color='textSecondary'>{format(new Date(activity.date), 'h:mm a')}</Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                        </TabPanel>
                    ))}

                </Box>


            </TabContext >
        </>


    )

})