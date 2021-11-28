import { NavLink } from 'react-router-dom'
import logo from '../../Images/logo.jpg'

import './../../styles/NavBar.scss'
import './../../styles/Commun/index.scss'

export const ViewNavBar = () => {
    return (
        <div className='navContainer'>
            <div className='navLinks'  style={{border: '2px solid green'}}><NavLink to='/'><img src={logo} alt='No found' width='80px' /></NavLink></div>
            <div className='navLinks' style={{border: '2px solid green'}}>
                <div style={{border: '2px solid red'}}>
                    <NavLink
                        to='/home'
                        className='navLink'
                    >
                        HOME
                    </NavLink>
                </div>
                <div style={{border: '2px solid red', padding: '15px'}}>
                    <NavLink
                        to='/about'
                        className='navLink'
                    >
                        ABOUT
                    </NavLink>
                </div>
                <button className='button'>
                    <NavLink className='navLink' to='/create'>
                        CREATE YOUR SHOW
                    </NavLink>
                </button>
            </div>
            <div style={{border: '2px solid green'}}>
            </div>
        </div>
    )
}
