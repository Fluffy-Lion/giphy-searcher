import React, { useEffect, useState } from 'react'
import './App.css';
import GifListContainer from './components/GifListContainer/GifListContainer';
import axios from 'axios'

const App = () => {

  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  
  const random = async () => {
    console.log("rando")
    const res = await axios("https://api.giphy.com/v1/gifs/random", {
        params: {
            api_key: process.env.REACT_APP_API_KEY,
            // q: input
        }
    }
    )
    setData(res.data.data)
}
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
       <GifListContainer random={random} isLoading={isLoading} data={data} setData={setData}/>
     </div>
    </div>
  );
}

export default App;
