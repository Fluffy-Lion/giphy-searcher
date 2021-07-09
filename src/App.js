import React, { useEffect, useState } from 'react'
import './App.css';
import GifListContainer from './components/GifListContainer/GifListContainer';
import Random from './components/Random/Random';
import axios from 'axios'

const App = () => {

  const [data, setData] = useState([])
  const [favourites, setFavourites] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [seen, setSeen] = useState(false)

  const togglePop = () => {
    setSeen(!seen)
  }

  const [single, setSingle] = useState({})
  const random = async () => {
    const res = await axios("https://api.giphy.com/v1/gifs/random", {
        params: {
            api_key: process.env.REACT_APP_API_KEY,
            // q: input
        }
    }
    ).catch(e => {
      console.log(e)
    })
    setSingle(res.data.data)
}
 const addToFavourite = (gifItem) => {
   setFavourites([...favourites, gifItem])
 }

  useEffect(() => {
    if(localStorage.getItem("fav")){
      setFavourites(JSON.parse(localStorage.getItem("fav")))
    }
  },[])
  useEffect(() => {
    localStorage.setItem("fav", JSON.stringify(favourites))
  }, [favourites])

  useEffect(() => {
    const fetch = async () => {
      
      setIsLoading(true)
      const res = await axios("https://api.giphy.com/v1/gifs/trending", {
        params: {
          api_key: process.env.REACT_APP_API_KEY,
          limit: 20
        }
      }
      )
      setData(res.data.data)
      setIsLoading(false)
    }
    fetch()


  },[])
  return (
    <div className="App">
     <h1>gwify swercher</h1>
     <div>
       
       <GifListContainer 
        single={single}
        random={random} 
        isLoading={isLoading} 
        data={data} 
        setData={setData}
        seen={seen}
        togglePop={togglePop}

        addToFavourite={addToFavourite}
      />
     </div>
    </div>
  );
}

export default App;
