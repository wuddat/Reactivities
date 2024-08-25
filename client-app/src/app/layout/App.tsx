import { useEffect } from 'react'
import '@fontsource/roboto/400.css';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import { Container, CssBaseline, Box } from '@mui/material/';
import LoadingComponent from './LoadingComponent';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';

function App() {
  const { activityStore } = useStore();

  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore])

  if (activityStore.loadingInitial) return <LoadingComponent content='Loading...' />

  return (<Box sx={{ bgcolor: '#eee', pb: 3 }}>
    <CssBaseline />
    <NavBar />
    <Container maxWidth="xl">
      <ActivityDashboard
      />
    </Container >
  </Box>
  )
}

export default observer(App);
