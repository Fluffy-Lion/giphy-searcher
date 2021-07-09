import React, { useState } from 'react'
import GifList from '../GifList/GifList'
import GifSearch from '../GifSearch/GifSearch'
import Loading from '../Loading/Loading'
import Random from '../Random/Random'
const GifListContainer = ({ data, isLoading, setData, random, single, seen, togglePop, addToFavourite }) => {

    const [searchTerm, setSearchTerm] = useState("")
    

    if(isLoading){
    return <Loading />
    }
    return (
        <div>
            <h2>gif list cont</h2>
            <GifSearch  setSearchTerm={setSearchTerm} setData={setData}/>
            <p>searching for...{searchTerm}</p>
            <Random 
            togglePop={togglePop}
            seen={seen}
            single={single} setData={setData} random={random} data={data}/>
            <GifList  addToFavourite={addToFavourite} data={data}/> 
            
        </div>
    )
}

export default GifListContainer