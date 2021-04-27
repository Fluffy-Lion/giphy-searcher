import React from 'react'
import GifItem from '../GifItem/GifItem'


const GifList = ({ data }) => {
    console.log("gifs : ", data)
    const gifItems = data.map((gif) => {
        
        return <GifItem  key={gif.id} gif={gif.images.fixed_height.url}/>
    })
    return <ul>{gifItems}</ul>
}

export default GifList