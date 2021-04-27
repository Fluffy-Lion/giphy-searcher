import React, { useState } from 'react'

const GifSearch = ({ setSearchTerm }) => {
    const [input, setInput] = useState("")

    const searchHandler = (e) => {
        e.preventDefault()
        setSearchTerm(input)
        setInput("")
    }

    return (
        <div>
            <form onSubmit={searchHandler}>
                <input 
                    value={input}
                    onChange={(e)=> setInput(e.target.value)}
                    />
                <button type="submit">search</button>
            </form>
        </div>
    )
}

export default GifSearch