import React, { useState } from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom';
import Home from './pages/Home.js';
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import {UserContextProvider} from './context/UserContext'

function App() {

  const [user, setUser] = useState({ name: "", email: "" })
  const [error, setError] = useState("")


  return (
      <UserContextProvider>
      <Router>
        <Navbar  />
        <Switch>
          <Route path="/" element={<Home />}></Route>
          <Route path="/sign-up" element={<SignUp />}></Route>
          <Route path="/sign-in" element={<SignIn  />}></Route>
          <Route path="/logout" element={<Home />}></Route>
        </Switch>
      </Router>
      </UserContextProvider>
 


  );
}

export default App;


///minuto 48 intentando logearme en la app, que me da fallo en la api