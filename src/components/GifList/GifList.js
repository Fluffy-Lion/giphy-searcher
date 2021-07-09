
import GifItem from '../GifItem/GifItem'

const GifList = ({ data, addToFavourite }) => {
        const gifItems = data.map((data) => {
        return <GifItem  addToFavourite={addToFavourite} key={data.id} data={data}/>
    })
    return <ul>{gifItems}</ul>

    
}

export default GifList