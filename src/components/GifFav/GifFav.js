import FavGif from "./FavGif"

const GifFav = ({ favourites, setFavourites }) => {

    const clearHandler = () => {
        setFavourites([])
    }
    return (
        <div>
            <div>
                <button onClick={clearHandler}>clear favourites</button>
            </div>
            {favourites.map((favourite, index) => {
                return <FavGif favourite={favourite} key={index} />
            })}
        </div>
    )

}

export default GifFav