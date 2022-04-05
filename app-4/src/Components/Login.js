import React from "react"
import {useState} from "react"

export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (
       <div>
           <input onChange={e => setUsername(e.target.value)}></input>
           <input onChange={e => setPassword(e.target.value)}></input>
           <button onClick={() => alert(username + password)}>Submit</button>
       </div> 
    )
}