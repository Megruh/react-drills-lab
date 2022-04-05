import React, {useState} from 'react';
import './App.css';
import Todo from "./Components/Todo"

function App() {
  const [toDoList, setToDoList] = useState([])
  const [userInput, setUserInput] = useState('')

  return (
    <div className="App">
      <input onChange={e => setUserInput(e.target.value)}/>
      {toDoList.map(task => {
        return <Todo task={task} key={task} />
      })}
      <button onClick={e => setToDoList([...toDoList, userInput])}>Add</button>
    </div>
  );
}

export default App;
