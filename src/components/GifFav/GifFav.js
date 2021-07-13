import FavGif from "./FavGif"

const GifFav = ({ favourites, setFavourites }) => {

    const clearHandler = () => {
        setFavourites([])
    }

    const removeHandler = (index) => {
        let arr = [...favourites]
        arr.splice(index, 1)
        setFavourites(arr)
    }
    return (
        <div>
            <div>
                <button onClick={clearHandler}>clear favourites</button>
            </div>
            {favourites.map((favourite, index) => {
                    return <FavGif removeHandler={removeHandler}  favourite={favourite} key={index} num={index} />
            })}
        </div>
    )

}

export default GifFav