import axios from 'axios'
import { ApiURL } from './config/config'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { RouterWeb } from './RouterWeb'
import { NavBar } from './components/NavBar/NavBar'
import { Footer } from './components/Footer/Footer'
import { getCharacters } from './redux/actions/characterActions'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchData = async () => {
      dispatch(getCharacters())
      //dispatch(getEpisodes())
    }
    fetchData()
  }, [dispatch])

  return (
    <div>
      <NavBar />
      <RouterWeb />
      <Footer />
    </div>
  )
}

export default App