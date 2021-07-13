import React, { useState } from 'react'
import GifList from '../GifList/GifList'
import GifSearch from '../GifSearch/GifSearch'
import Loading from '../Loading/Loading'
import Random from '../Random/Random'
const GifListContainer = ({ data, isLoading, setData, random, single, seen, togglePop, addToFavourite, fetch }) => {

    const [searchTerm, setSearchTerm] = useState("")
    const [input, setInput] = useState("")
    const handler = () => {
        setSearchTerm("")
        fetch()
    }

    if(isLoading){
    return <Loading />
    }
    return (
        <div>
            <h2>gif list cont</h2>
            <GifSearch  input={input} setInput={setInput} setSearchTerm={setSearchTerm} setData={setData}/>
            {searchTerm ? <p>searching for...{searchTerm}</p> : null }
            <Random togglePop={togglePop} seen={seen} single={single} random={random} />
            <button onClick={handler}>clear search</button>
            {searchTerm === "" ? <h2>trending...</h2> : null }
            <GifList  addToFavourite={addToFavourite} data={data}/> 
        </div>
    )
}

export default GifListContainer