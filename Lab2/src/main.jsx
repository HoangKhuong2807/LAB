import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../src/assets/Styles/index.css'
import App from '../src/Pages/App'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
