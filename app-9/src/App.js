import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Details from "./Components/Details"
import Signup from "./Components/Signup"
import Home from "./Components/Home"

function App() {
  return (
    <div className="App">
     <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="signup" element={<Signup />}/>
        <Route path="details" element={<Details />}/>
      </Route>
    </Routes>
  </BrowserRouter> 
    </div>
  );
}

export default App;
