
import GifItem from '../GifItem/GifItem'

const GifList = ({ data }) => {
    console.log("gifs : ", data)  
    
    const gifItems = data.map((data) => {
        return <GifItem  key={data.id} data={data}/>
    })
    return <ul>{gifItems}</ul>
    
}

export default GifList