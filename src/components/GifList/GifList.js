
import GifItem from '../GifItem/GifItem'
import './GifList.css'
const GifList = ({ data, addToFavourite, favourites }) => {
        const gifItems = data.map((data) => {
        return <GifItem  favourites={favourites} addToFavourite={addToFavourite} key={data.id} data={data}/>
    })
    return (
        <div id="gitItemsWrapper">
            <>{gifItems}</>
        </div>    
    )
}

export default GifList