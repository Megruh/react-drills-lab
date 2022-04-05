import React from 'react';
import logo from './logo.svg';
import './App.css';
import Input from "./Components/Input"
import {useState} from "react"

function App() {
const [input, setInput] = useState("")

  return (
    <div className="App">
      <input onChange={e => setInput(e.target.value)}
      placeholder="Type your message..."></input>
      <Input input={input}/>
    </div>
  );
}

export default App;
