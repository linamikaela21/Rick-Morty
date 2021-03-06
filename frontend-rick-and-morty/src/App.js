import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { RouterWeb } from './RouterWeb'
import { NavBar } from './components/NavBar/NavBar.jsx'
import { Footer } from './components/Footer/Footer'
import { getCharacters } from './redux/actions/characterActions'
import { getEpisodes } from './redux/actions/episodesActions'
import { getLocations } from './redux/actions/locationsActions'
import './App.css'

export const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchData = async () => {
      dispatch(getCharacters())
      dispatch(getEpisodes())
      dispatch(getLocations())
    }
    fetchData()
  }, [dispatch])

  return (
    <div className='App'>
      <NavBar />
      <RouterWeb />
      <Footer />
    </div>
  )
}