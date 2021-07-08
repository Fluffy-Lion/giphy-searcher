
import { useEffect, useState } from 'react'
import PopUp from '../GifItem/PopUp'
const Random = ({ random, single, seen, togglePop }) => {

    let handler = () => {
        random()
        togglePop()
    }
    
    return (
        <div>
            <button onClick={handler}>random</button>
            {seen ? <PopUp togglePop={togglePop} single={single}/> : null}
        </div>
    )
}





export default Random