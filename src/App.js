import React, { useEffect, useState } from 'react'
import './App.css';
import GifListContainer from './components/GifListContainer/GifListContainer';
import axios from 'axios'



const App = () => {

  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  
  useEffect(() => {
    const fetch = async () => {
      setIsLoading(true)
      const res = await axios("https://api.giphy.com/v1/gifs/trending", {
        params: {
          api_key: "2ITIevQ9rOZQvJplIV8zgsqJ7nvnn9sl"
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
       <GifListContainer isLoading={isLoading} data={data}/>
     </div>
    </div>
  );
}

export default App;
