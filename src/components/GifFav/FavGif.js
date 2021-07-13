import { useEffect, useState } from "react"

const FavGif = ({ favourite, favourites, setFavourites, removeHandler, num }) => {
   
    
    const imageSource = favourite.images.fixed_height.url
    // const removeGif = ({ num }) => {
        
    //     setArr.splice(num, 1)
        
    
    // }

    return (
        <div>
            <img src={imageSource} />
            {/* <h1>gif</h1> */}
            <button onClick={() => removeHandler(num)}>remove gif</button>
        </div>
    )
}
export default FavGif