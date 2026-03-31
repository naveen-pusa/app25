import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from "./App.jsx"
import Header  from './components/header/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './components/footer/footer.jsx'
import Cards from './components/cards/Cards.jsx'




createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Header/>
   <Cards/>
  <Footer/>
  </StrictMode>
)
