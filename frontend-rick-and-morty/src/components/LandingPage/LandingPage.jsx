import { Link } from 'react-router-dom'

import './../../styles/LandingPage.scss'
import './../../styles/Commun/index.scss'

export const LandingPage = () => {
  return (
    <div className='fondo'>
      <div className='divTitle'>
      <h1 className='title'>RICK AND MORTY APP</h1>
        <Link to='/home'>
          <div><button className='buttonWelcome'>WELCOME</button></div>
        </Link>
      </div>
    </div>
  )
}
