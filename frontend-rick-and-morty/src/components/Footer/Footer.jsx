import './../../styles/Footer.scss'
import Express from '../../Images/Express.jpg'
import PostgreSQL from '../../Images/PostgreSQL.jpg'
import React from '../../Images/React.jpg'
import Redux from '../../Images/Redux.jpg'
import Sequelize from '../../Images/Sequelize.jpg'

export const Footer = () => {
    return (
        <div className='footerContainer'>
            <div className='footerElements'>
                <span className='span'>
                    <strong>POWERED BY:</strong>
                </span>
                <img
                    src={Express}
                    className='footerIcon'
                    title='Express'
                    alt='Not found'
                />
                <img
                    src={PostgreSQL}
                    className='footerIcon'
                    title='PostgreSQL'
                    alt='Not found'
                />
                <img
                    src={React}
                    className='footerIcon'
                    title='React'
                    alt='Not found'
                />
                <img
                    src={Redux}
                    className='footerIcon'
                    title='Redux'
                    alt='Not found'
                />
                <img
                    src={Sequelize}
                    className='footerIcon'
                    title='Sequelize'
                    alt='Not found'
                />
            </div>
        </div>
    )
}
