import React, { useState } from 'react'
import axios from 'axios'


const GifSearch = ({ setSearchTerm, setData, input, setInput }) => {
    
    const [isLoading, setIsLoading] = useState(false)
    const searcher = async () => {
        setIsLoading(true)
        const res = await axios("https://api.giphy.com/v1/gifs/search", {
            params: {
                api_key: process.env.REACT_APP_API_KEY,
                q: input
            }
        }
        )
        setData(res.data.data)
        setIsLoading(false)
    }
    const searchHandler = (e) => {
        e.preventDefault()
        setSearchTerm(input)
        searcher()
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