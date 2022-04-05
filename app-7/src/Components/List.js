import React from "react"
import Todo from "./Todo"

export default function List(props) {
    return (
        <div>
        {props.toDoList.map(task => {
            return <Todo task={task} key={task} />
        })}
      </div>
    )
}