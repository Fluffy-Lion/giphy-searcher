import React from 'react'

const GifItem = ({ data, addToFavourite }) => {
    let key = data.id
    let url = data.images.fixed_height.url
   

    return ( 
        <div>
            <img key={key} src={url} />
            <button onClick={() => addToFavourite(data)}>add</button>
        </div>
    )
}

export default GifItem