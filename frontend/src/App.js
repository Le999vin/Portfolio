/*
author: Levin Pamay
Version: 1.
This `App` component configures routing using `BrowserRouter` from `react-router-dom`, directing `'/'` to `Login`, `'/signup'` to `Signup`, and `'/home'` to `Home`.
*/ 
import React from 'react'
import Login from './Login'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './Signup'
import Home from './Home';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login />}></Route>
            <Route path='/signup' element={<Signup />}></Route>
            <Route path='/home' element={<Home />}></Route>
    </Routes>
    </BrowserRouter>

  );
}

export default App
