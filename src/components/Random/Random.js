
import { useEffect, useState } from 'react'

const Random = ({ random, single }) => {
 const [toggle, setToggle] = useState(false)
 
 const handler = () => {
        random()
        // setToggle(true)
 }

    return (
        <div>
            <h1>random</h1>
            {!toggle && single ?
                <RandomButton handler={handler}/>
                :
                <RandomGif simgle={single} />
            }
        </div>
    )
}

const RandomButton = ({ handler }) => {
    return (
        <button onClick={handler}>random</button>
    )
}

const RandomGif = ({ single }) => {
    let url = single.images.fixed_height.url
    return (
        
        <img src={url} />
    )
}

export default Random