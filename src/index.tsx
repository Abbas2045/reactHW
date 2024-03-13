import React from 'react'
import ReactDOM from 'react-dom/client'
import WaterIntakeCalculator from './WaterIntakeCalculator.tsx'
import darklightmode from './darklightmode.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <WaterIntakeCalculator />
    <darklightmode />
  </React.StrictMode>
)