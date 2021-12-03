import { NavLink } from 'react-router-dom'
import logo from '../../Images/logo.jpg'

import './../../styles/NavBar.scss'
import './../../styles/Commun/index.scss'

export const ViewNavBar = () => {
    return (
        <div className='navContainer'>
            <div className='navLinks'><NavLink to='/'><img src={logo} alt='No found'/></NavLink></div>
            <div className='navLinks'>
                <div className=''>
                    <NavLink
                        to='/home'
                        className='navLink'
                    >
                        HOME
                    </NavLink>
                    <NavLink
                        to='/about'
                        className='navLink'
                    >
                        ABOUT
                    </NavLink>
                    <NavLink className='navLink' to='/create'>
                        <button className='button'>
                            CREATE YOUR SHOW
                        </button>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}
