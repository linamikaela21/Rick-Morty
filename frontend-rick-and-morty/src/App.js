import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { RouterWeb } from './RouterWeb'
import { NavBar } from './components/NavBar/NavBar.jsx'
import { Footer } from './components/Footer/Footer'
import { getCharacters } from './redux/actions/characterActions'

export const App = () => {
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