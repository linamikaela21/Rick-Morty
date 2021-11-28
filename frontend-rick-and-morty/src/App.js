import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { RouterWeb } from './RouterWeb'
import { NavBar } from './components/NavBar/NavBar.jsx'
import { Footer } from './components/Footer/Footer'

export const App = () => {

  return (
    <div style={{backgroundColor: '#ccc555'}}>
      <NavBar />
      <RouterWeb />
      <Footer />
    </div>
  )
}