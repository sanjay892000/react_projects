import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ThemeState from './contextapi/ThemeState';

createRoot(document.getElementById('root')).render(
  <ThemeState>
    <App />
  </ThemeState>,
)
