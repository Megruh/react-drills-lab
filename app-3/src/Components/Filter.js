import React, {useState} from "react"

export default function Filter() {
    const [filteredTitles, setFilteredTitles] = useState(["Scott", "Meg", "Rudy", "Leo"])
    const [userInput, setUserInput] = useState('')

    return (
        <div className="App">
             <input onChange={e => setUserInput(e.target.value)}></input>
            {filteredTitles.filter(title => title.includes(userInput)).map(e => {
                return <h2>{e}</h2>
            })}
        </div>
    )
}
