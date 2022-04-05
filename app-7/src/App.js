import React, {useState} from 'react';
import './App.css';
import NewTask from "./Components/NewTask"
import List from "./Components/List"

function App() {
  const [toDoList, setToDoList] = useState([])
  const [userInput, setUserInput] = useState('')

  return (
    <div className="App">
      <NewTask setUserInput={setUserInput}/>
      <List toDoList={toDoList}/>
      <button onClick={e => setToDoList([...toDoList, userInput])}>Add</button>
    </div>
  );
}

export default App;

