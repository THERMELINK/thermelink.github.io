import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import m from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <main/>
  </StrictMode>,
)
