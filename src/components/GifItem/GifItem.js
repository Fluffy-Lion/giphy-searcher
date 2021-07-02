import React from 'react'

const GifItem = ({ data }) => {
    let key = data.id
    let url = data.images.fixed_height.url
   
   
    return ( 
        <div>
            <h4>gif item</h4>
            <img key={key} src={url} />
        </div>
    )
}

export default GifItem