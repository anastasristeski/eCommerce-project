import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../src/styles/main.scss'
import App from './App.jsx'
if('ontouchstart' in window || navigator.maxTouchPoints >0){
  document.body.classList.add('no-hover');
}
createRoot(document.getElementById('root')).render(
    <App />

)
