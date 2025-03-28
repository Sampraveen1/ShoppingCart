// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { CartProvider } from './storage/CartProvider.tsx'
import Login from './Components/Login.tsx'

createRoot(document.getElementById('root')!).render(
  <CartProvider>
    <App />
  </CartProvider>
)
