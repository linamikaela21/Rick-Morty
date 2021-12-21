import dotenv from 'dotenv'
import axios from 'axios'

dotenv.config()

axios.defaults.URL_BASE = process.env.DATABASE_URL || "http://localhost:3001"

export const URL_BASE = process.env.DATABASE_URL || 'http://localhost:3001'

export const URL_ALL_CHARACTERS = URL_BASE + '/api/characters'
export const URL_ALL_EPISODES = URL_BASE + '/api/episodes'
export const URL_ALL_LOCATIONS = URL_BASE + '/api/locations'

export const URL_CHARACTERS_NAME = URL_ALL_CHARACTERS + '/?name='
export const URL_EPISODES_NAME = URL_ALL_EPISODES + '/?name='
export const URL_LOCATIONS_NAME = URL_ALL_LOCATIONS + '/?name='

