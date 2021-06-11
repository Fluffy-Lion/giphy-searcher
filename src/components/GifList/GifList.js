import React, { useEffect } from 'react'
import GifItem from '../GifItem/GifItem'


const GifList = ({ data }) => {
    console.log("gifs : ", data)

 
    if(data.length > 1){
    const gifItems = data.map((gif) => {
        
        return <GifItem  key={gif.id} gif={gif.images.fixed_height.url}/>
    })
    return <ul>{gifItems}</ul>
    }
    else if(data.length > 0) {
        console.log("1 length")
        console.log("data: ", data)
        const gifItem = data
        return <GifItem key={data.id} gif={data.images.fixed_height.url}/>
    }
    
    else{
        console.log("null hit")
       
        return (
            <>
                {data > 0 ? 
                <GifItem key={data.id} gif={data.image.fixed_height.url}/>
                :
                <></>
                }
            </>
        )
    

        // console.log("data: ", data)
        // return <GifItem key={data.id} gif={data.images.fixed_height.url}/>
    }
}

export default GifList