import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { store, StoreContext } from './app/stores/store'
import { RouterProvider } from 'react-router-dom'
import { router } from './app/router/routes'
import 'react-calendar/dist/Calendar.css';
import './app/layout/styles.css'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StoreContext.Provider value={store}>
      <RouterProvider router={router} />
    </StoreContext.Provider>
  </StrictMode>,
)
