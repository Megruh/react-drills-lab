import React from "react"

export default function NewTask (props) {

    return(
        <input onChange={e => props.setUserInput(e.target.value)}/>
    )
}