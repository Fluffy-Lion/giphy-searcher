import React, { useState } from 'react'
import GifList from '../GifList/GifList'
import GifRandom from '../GifRandom/GifRandom'
import GifSearch from '../GifSearch/GifSearch'
import Loading from '../Loading/Loading'

const GifListContainer = ({ data, isLoading, setData, random }) => {

    const [searchTerm, setSearchTerm] = useState("")
    

    if(isLoading){
    return <Loading />
    }
    return (
        <div>
            <h2>gif list cont</h2>
            <GifSearch random={random} setSearchTerm={setSearchTerm} setData={setData}/>
            <p>searching for...{searchTerm}</p>

            <GifList  data={data}/>     
            {/* <GifRandom setData={setData} /> */}
        </div>
    )
}

export default GifListContainer