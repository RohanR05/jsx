import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Rr from './lolo'
import Batsman from './Run/Batsman'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Rr></Rr>
    <Batsman></Batsman>
  </StrictMode>,
)
