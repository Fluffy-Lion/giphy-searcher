const FavGif = ({ favourite, setFavourite, index }) => {

    const imageSource = favourite.images.fixed_height.url

    return <img src={imageSource} />
}
export default FavGif