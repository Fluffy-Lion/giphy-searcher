import { useState } from "react"

const FavGif = ({ favourite, favourites, setFavourites, id }) => {
    const [newFav, setNewFav] = useState([])

    const imageSource = favourite.images.fixed_height.url
    const removeGif = ({ id }) => {
        const temp = [...favourites]
        // let num = id + 1
        temp.splice(id, 1)
        setFavourites(temp)
    
    }

    return (
        <div>
            <img src={imageSource} />
            {/* <h1>gif</h1> */}
            <button onClick={() => removeGif(id)}>remove gif</button>
        </div>
    )
}
export default FavGif