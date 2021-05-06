import React, { useState } from 'react'
import GifList from '../GifList/GifList'
import GifSearch from '../GifSearch/GifSearch'
import Loading from '../Loading/Loading'

const GifListContainer = ({ data, isLoading, setData }) => {

    const [searchTerm, setSearchTerm] = useState("")
    

    if(isLoading){
    return <Loading />
    }
    return (
        <div>
            <h2>gif list cont</h2>
            <GifSearch setSearchTerm={setSearchTerm} setData={setData}/>
            <p>searching for...{searchTerm}</p>
            <GifList data={data}/>     
        </div>
    )
}

export default GifListContainer