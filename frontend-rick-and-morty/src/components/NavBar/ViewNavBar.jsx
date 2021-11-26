import { NavLink } from 'react-router-dom'
import logo from '../../Images/Redux.jpg'

import './../../styles/NavBar.scss'
import './../../styles/Commun/index.scss'

export const ViewNavBar = () => {
    return (
        <div>
            <div className='navContainer'>
            <div className='navLinks'><NavLink to='/'><img src={logo} alt='No found' width='100px'/></NavLink></div>
                <div className='navLinks'>
                    <NavLink
                        to='/home'
                        activeClassName='nav-link-active'
                        className='navLink'
                    >
                        HOME
                    </NavLink>
                    <NavLink
                        to='/about'
                        activeClassName='nav-link-active'
                        className='navLink'
                    >
                        ABOUT
                    </NavLink>
                    <div>
                        <button className='button'>
                            <NavLink className='navLink' to='/create'>
                                CREATE YOUR SHOW
                            </NavLink>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
