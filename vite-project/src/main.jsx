/*
author: Levin Pamay
Version: 1.
This code initializes a React application, rendering the "App" component within the HTML element with the ID 'root', while also incorporating strict mode and specific CSS and font imports.
*/ 
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import "@fontsource/outfit";
import "@fontsource/roboto";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
