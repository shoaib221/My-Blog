import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Home'
import NavBar from './NavBar'

createRoot(document.getElementById('root')).render 
(
  <StrictMode>
    <Home />
  </StrictMode>,
)
