import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import NoteStates from './context/NoteStates';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NoteStates>
      <App />
    </NoteStates>
  </StrictMode>,
)
