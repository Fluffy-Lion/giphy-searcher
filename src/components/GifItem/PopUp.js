import './popUp.css'

const PopUp = ({ single, togglePop }) => {
  if(single.images !== undefined){
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
    }else{
      return (
        <div className="modal">
        <div className="modal_content">
          <p>loading...</p>
        </div>
      </div>
      )
    }
}

export default PopUp