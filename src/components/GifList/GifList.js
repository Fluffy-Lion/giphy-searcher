
import GifItem from '../GifItem/GifItem'

const GifList = ({ data, addToFavourite, favourites }) => {
        const gifItems = data.map((data) => {
        return <GifItem  favourites={favourites} addToFavourite={addToFavourite} key={data.id} data={data}/>
    })
    return <ul>{gifItems}</ul>

    
}

export default GifList