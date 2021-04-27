import React, { useState } from 'react'
import GifList from '../GifList/GifList'
import GifSearch from '../GifSearch/GifSearch'

const GifListContainer = ({ data }) => {

    const [searchTerm, setSearchTerm] = useState("")


    return (
        <div>
            <h2>gif list cont</h2>
            <GifSearch setSearchTerm={setSearchTerm}/>
            <p>searching for...{searchTerm}</p>
            <GifList data={data}/>
        </div>
    )
}

export default GifListContainer