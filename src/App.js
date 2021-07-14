import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom'
import './App.css';
import GifListContainer from './components/GifListContainer/GifListContainer';
import GifFav from './components/GifFav/GifFav';
import axios from 'axios'

const App = () => {
  const [data, setData] = useState([])
  const [favourites, setFavourites] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [seen, setSeen] = useState(false)
  const [single, setSingle] = useState({})

  const togglePop = () => {
    setSeen(!seen)
  }

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
    fetch()
  },[])
  return (
    <div id="App">
      <div>
        <h1 id="header">gwify swercher</h1>
      </div>
      <div>
        <Router>
          <div id="navWrapper">
            <nav>
              <li>
                <Link to="/">home</Link>
              </li>
              <li>
                <Link to="/favourite">view favourites</Link>
              </li>
            </nav>
          </div>
            <Switch>
              <Route exact path="/">
                <GifListContainer 
                  single={single}
                  random={random} 
                  isLoading={isLoading} 
                  data={data} 
                  setData={setData}
                  seen={seen}
                  togglePop={togglePop}
                  fetch={fetch}
                  addToFavourite={addToFavourite}
                  favourites={favourites}
                  />
              </Route>
              <Route path="/favourite">
                <GifFav favourites={favourites} setFavourites={setFavourites} />
              </Route>
            </Switch>
          </Router>
      </div>
    </div>
  );
}

export default App;
