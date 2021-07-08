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
      <div>
        <h1>not found</h1>
      </div>
    }
}

export default PopUp