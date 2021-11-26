import React from 'react'
import { Link } from 'react-router-dom'
import github from '../../Images/github.jpg'
import linkedin from '../../Images/linkedin.jpg'
import gmail from '../../Images/gmail.jpg'

import './../../styles/About.scss'
import './../../styles/Commun/index.scss'

export const About = () => {
  return (
    <div className='container'>
      <div className='content'>
        <h1>THANK YOU FOR VISITING <br /> 'RICK AND MORTY PROYECT'</h1>
        <br />
        <div className='ulLi'>
          <p>
            The technologies used here: <br /> 
          </p>
          <ul>
            <li>
              <strong><p>Data Base:</p></strong>
              <a
                href='https://www.postgresql.org/about/'
                target='_blank'
                rel='noopener noreferrer'
              >
                PostgreSQL
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <strong><p>BackEnd:</p></strong>
              <a
                href='https://sequelize.org/'
                target='_blank'
                rel='noopener noreferrer'
              >
                Sequelize
              </a>
              <a
                href='https://expressjs.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                Express
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <strong><p>FrontEnd:</p></strong>
              <a
                href='https://reactjs.org/'
                target='_blank'
                rel='noopener noreferrer'
              >
                React
              </a>
              y
              <a
                href='https://redux.js.org/'
                target='_blank'
                rel='noopener noreferrer'
              >
                Redux
              </a>
              and frameworks like..
              <a
                href='https://axios-http.com/docs/intro'
                target='_blank'
                rel='noopener noreferrer'
              >
                Axios
              </a>
            </li>
          </ul>
          <p>
            There are no design libraries, just CSS and SASS
          </p>
        </div>
        <br />
        <p>
          This app uses
          <a
            href='https://rickandmortyapi.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            RICK AND MORTY - Public API
          </a>
          to get different characters, episodes and location. I got the data based in Rick and Morty serie and push it
          into the database to work with my own API.
        </p>
      
        <br />
        <h2>CONTACT</h2>
        <div className='contact'>
          <div className='contact_item'>
            <img
              src={linkedin}
              alt='Not found'
              className='contact_item_img'
            />
            <a
              href='https://www.linkedin.com/in/lina-mikaela-gutierrez-arribas'
              target='_blank'
              rel='noopener noreferrer'
            >
              LinkedIn
            </a>
          </div>
          <div className='contact_item'>
            <img
              src={github}
              alt='Not found'
              className='contact_item_img'
            />
            <a
              href='https://github.com/linamikaela21'
              target='_blank'
              rel='noopener noreferrer'
            >
              GitHub
            </a>
          </div>
          <div className='contact_item'>
            <img
              src={gmail}
              alt='Not found'
              className='contact_item_img'
            />
            <a
              href='mailto:mikaelagutierrezarribas@gmail.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              E-mail
            </a>
          </div>
        </div>
      </div>
      <Link to='/home'>
        <button className='buttonVolver'>Go back</button>
      </Link>
    </div>
  )
}