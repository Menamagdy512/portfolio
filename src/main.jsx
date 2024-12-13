import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import '@fontsource/roboto'; // استيراد الخط
import '@fontsource/roboto/400.css'; // الوزن 400
import '@fontsource/roboto/700.css'; // الوزن 700

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
