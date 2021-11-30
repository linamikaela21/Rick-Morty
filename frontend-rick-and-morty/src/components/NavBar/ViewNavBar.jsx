import { NavLink } from 'react-router-dom'
import logo from '../../Images/logo.jpg'

import './../../styles/NavBar.scss'
import './../../styles/Commun/index.scss'

export const ViewNavBar = () => {
    return (
        <div className='navContainer'>
            <div className='navLinks'  style={{border: '2px solid green'}}><NavLink to='/'><img src={logo} alt='No found' width='80px' /></NavLink></div>
            <div className='navLinks' style={{border: '2px solid green'}}>
                <div className='grid'>
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
                <button className='button' style={{border: '2px solid green'}}>
                    <NavLink className='navLink' to='/create'>
                        CREATE YOUR SHOW
                    </NavLink>
                </button>
                </div>
            </div>
            <div style={{border: '2px solid green'}}>
            </div>
        </div>
    )
}
