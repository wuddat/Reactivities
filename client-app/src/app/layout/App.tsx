import '@fontsource/roboto/400.css';
import NavBar from './NavBar';
import { Container, CssBaseline, Box } from '@mui/material/';
import { observer } from 'mobx-react-lite';
import { Outlet, useLocation } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname === '/' ? <HomePage /> : (
        <>
          <Box sx={{ bgcolor: '#eee', pb: 3 }}>
            <CssBaseline />
            <NavBar />
            <Container maxWidth="xl">
              <Outlet />
            </Container >
          </Box>
        </>
      )}
    </>
  );
}

export default observer(App);
