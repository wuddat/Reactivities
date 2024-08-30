import '@fontsource/roboto/400.css';
import NavBar from './NavBar';
import { Container, CssBaseline, Box } from '@mui/material/';
import { observer } from 'mobx-react-lite';
import { Outlet, useLocation } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';

function App() {
  const location = useLocation();

  return (
    <Box sx={{
      minHeight: '100vh', // Ensure the box spans the full viewport height
      background: location.pathname === '/'
        ? 'linear-gradient(to bottom right, #003d3d, #00ffff)' // Gradient for HomePage
        : '#eee', // Background color for other pages>
    }}>
      {location.pathname === '/' ? <HomePage /> : (
        <>
          <CssBaseline />
          <NavBar />
          <Container maxWidth="xl" sx={{ flex: 1 }}>
            <Outlet />
          </Container >
        </>
      )}
    </ Box>
  );
}

export default observer(App);
