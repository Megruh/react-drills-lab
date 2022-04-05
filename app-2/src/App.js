import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useState} from "react"
import List from "./Components/List"

function App() {
  const [renderedTitles, setRenderedTitles] = useState(["Leo", "Scott", "Meg", "Rudy"])

  return (
    <div className="App">
    {renderedTitles.map(title => {
      return <List title={title}/>
    })}
    </div>
  );
}

export default App;
