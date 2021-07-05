import './popUp.css'

const PopUp = ({ single, togglePop }) => {
    let url = single.images.fixed_height.url
    return (
        <div className="modal">
        <div className="modal_content">
          <span className="close" onClick={togglePop}>
            &times;
          </span>
          <img src={url} />
        </div>
      </div>
    )
}

export default PopUp