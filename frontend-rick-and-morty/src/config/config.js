// import dotenv from 'dotenv';
export const URL_BASE = 'http://localhost:3001' || process.env.REACT_APP_DATABASE_URL

export const URL_ALL_CHARACTERS = URL_BASE + '/api/characters'
export const URL_ALL_EPISODES = URL_BASE + '/api/episodes'
export const URL_ALL_LOCATIONS = URL_BASE + '/api/locations'

export const URL_CHARACTERS_NAME = URL_ALL_CHARACTERS + '/?name='
export const URL_EPISODES_NAME = URL_ALL_EPISODES + '/?name='
export const URL_LOCATIONS_NAME = URL_ALL_LOCATIONS + '/?name='

