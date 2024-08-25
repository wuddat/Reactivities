import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/layout/App'
import './app/layout/styles.css'
import { store, StoreContext } from './app/stores/store'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StoreContext.Provider value={store}>
      <App />
    </StoreContext.Provider>
  </StrictMode>,
)
