import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from "./App.jsx"
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Store from './components/redux/Store.jsx'




createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
    <BrowserRouter>
  <App/>
  </BrowserRouter>
  </Provider>
  
  
)
