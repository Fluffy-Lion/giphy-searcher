import FavGif from "./FavGif"

const GifFav = ({ favourites }) => {

    return (
        <div>
            {favourites.map((favourite, index) => {
                return <FavGif />
            })}
        </div>
    )

}

export default GifFav