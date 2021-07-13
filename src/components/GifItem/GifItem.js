import React, { useEffect, useState } from 'react'

const GifItem = ({ data, addToFavourite, favourites }) => {
    let key = data.id
    let url = data.images.fixed_height.url
    const [favIds, setFavIds] = useState([])

    useEffect(() => {
        favourites.map((item, index) => {
            setFavIds(favIds => [...favIds, item.id])
        })
    },[favourites])

    return ( 
        <div>
            <img key={key} src={url} />
            { favIds.includes(key) ? <p>added to favourites</p> :
                <button onClick={() => addToFavourite(data)}>add</button>
            }
        </div>
    )
}

export default GifItem