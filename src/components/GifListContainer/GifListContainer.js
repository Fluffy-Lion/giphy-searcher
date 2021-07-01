import React, { useState } from 'react'
import GifList from '../GifList/GifList'
import GifSearch from '../GifSearch/GifSearch'
import Loading from '../Loading/Loading'
import GifItem from '../GifItem/GifItem'
import Random from '../Random/Random'
const GifListContainer = ({ data, isLoading, setData, random }) => {

    const [searchTerm, setSearchTerm] = useState("")
    

    if(isLoading){
    return <Loading />
    }
    return (
        <div>
            <h2>gif list cont</h2>
            <GifSearch  setSearchTerm={setSearchTerm} setData={setData}/>
            <p>searching for...{searchTerm}</p>
            <GifList  data={data}/> 
            <Random setData={setData} random={random} data={data}/>
        </div>
    )
}

export default GifListContainer