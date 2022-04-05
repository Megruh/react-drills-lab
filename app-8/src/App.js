import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios"
// gravity: "1 standard"
// name: "Tatooine"
// orbital_period: "304"
// population: "200000"
function App() {
  const [data, setData] = useState({})
  useEffect(() => {
    axios.get("https://swapi.dev/api/planets/1/")
    .then((data) => {
      setData(data.data)
    })
  }, [])
  return (
    <div className="App">
      <p>{data.gravity}</p>
      <p>{data.name}</p>
      <p>{data.orbital_period}</p>
      <p>{data.population}</p>
    </div>
  );
}

export default App;

