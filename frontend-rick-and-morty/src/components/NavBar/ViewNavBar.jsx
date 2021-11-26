import { NavLink } from 'react-router-dom'
import logo from '../../Images/logo.jpg'

import './../../styles/NavBar.scss'
import './../../styles/Commun/index.scss'
import { SearchBar } from '../SearchBar/SearchBar'

export const ViewNavBar = () => {
    return (
            <div className='navContainer'>
            <div className='navLinks'><NavLink to='/'><img src={logo} alt='No found' width='120px'/></NavLink></div>
            <div className='navLinks'><SearchBar/></div>
                <div className='navLinks'>
            <div>
                    <NavLink
                        to='/home'
                        className='navLink'
                    >
                        HOME
                    </NavLink>
                    </div>
                    <div>
                    <NavLink
                        to='/about'
                        className='navLink'
                    >
                        ABOUT
                    </NavLink>
                    </div>
                    <div>
                        <button className='button'>
                            <NavLink className='navLink' to='/create'>
                                CREATE YOUR SHOW
                            </NavLink>
                        </button>
                    </div>
                </div>
            </div>
    )
}
