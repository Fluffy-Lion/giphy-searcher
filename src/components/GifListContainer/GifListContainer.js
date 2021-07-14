import React, { useState } from 'react'
import GifList from '../GifList/GifList'
import GifSearch from '../GifSearch/GifSearch'
import Loading from '../Loading/Loading'
import Random from '../Random/Random'
import './GifListContainer.css'
const GifListContainer = ({ data, favourites, isLoading, setData, random, single, seen, togglePop, addToFavourite, fetch }) => {

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
        <div id="gifListContainer">
            <h2>gif list cont</h2>
            <GifSearch  input={input} setInput={setInput} setSearchTerm={setSearchTerm} setData={setData}/>
            {searchTerm ? 
                <>
                    <p>searching for...{searchTerm}</p>
                    <button onClick={handler}>clear search</button>
                </> 
            : null }
            <Random togglePop={togglePop} seen={seen} single={single} random={random} />
            {searchTerm === "" ? <h2>trending...</h2> : null }
            <GifList  favourites={favourites} addToFavourite={addToFavourite} data={data}/> 
        </div>
    )
}

export default GifListContainer