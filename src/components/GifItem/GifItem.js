import React from 'react'

const GifItem = (props) => {
    let key = props.id
    let url = props.gif
    // console.log("key = ", key)
    // console.log("url = ", url)
    return (
        <div>
            <h4>gif item</h4>
            <img key={key} src={url} />
        </div>
    )
}

export default GifItem