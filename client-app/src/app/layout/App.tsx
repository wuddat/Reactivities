import '@fontsource/roboto/400.css';
import NavBar from './NavBar';
import { Container, CssBaseline, Box } from '@mui/material/';
import { observer } from 'mobx-react-lite';
import { Outlet, useLocation } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import { ToastContainer } from 'react-toastify';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { useStore } from '../stores/store';
import { useEffect } from 'react';
import LoadingComponent from './LoadingComponent';
import ModalContainer from '../common/modals/ModalContainer';

function App() {
  const location = useLocation();
  const { commonStore, userStore } = useStore();

  useEffect(() => {
    if (commonStore.token) {
      userStore.getUser().finally(() => commonStore.setAppLoaded())
    } else {
      commonStore.setAppLoaded()
    }
  }, [commonStore, userStore])

  if (!commonStore.appLoaded) return <LoadingComponent content='Loading application...' />

  return (
    <Box sx={{
      minHeight: '100vh', // Ensure the box spans the full viewport height
      background: location.pathname === '/'
        ? 'background: linear-gradient(to bottom right, #1243ad, #008080)' // Gradient for HomePage
        : '#eee', // Background color for other pages>
    }}>
      <ModalContainer />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <ToastContainer position='bottom-right' hideProgressBar theme='colored' />
        {location.pathname === '/' ? <HomePage /> : (
          <>
            <CssBaseline />
            <NavBar />
            <Container maxWidth="xl" sx={{ flex: 1 }}>
              <Outlet />
            </Container >
          </>
        )}
      </LocalizationProvider>
    </ Box>
  );
}

export default observer(App);
