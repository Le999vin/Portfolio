/*
author: Levin Pamay
Version: 1.
This code initializes a React application, rendering the `App` component within `<React.StrictMode>` for enhanced development checks, integrates Bootstrap styles, and logs web vitals performance metrics.
*/ 
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
   </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results

reportWebVitals();
