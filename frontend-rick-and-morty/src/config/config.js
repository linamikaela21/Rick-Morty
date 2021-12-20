export const URL_BASE = process.env.DATABASE_URL + '/api' || 'http://localhost:3001/api'

export const URL_ALL_CHARACTERS = URL_BASE + '/characters'
export const URL_ALL_EPISODES = URL_BASE + '/episodes'
export const URL_ALL_LOCATIONS = URL_BASE + '/locations'

export const URL_CHARACTERS_NAME = URL_ALL_CHARACTERS + '/?name='
export const URL_EPISODES_NAME = URL_ALL_EPISODES + '/?name='
export const URL_LOCATIONS_NAME = URL_ALL_LOCATIONS + '/?name='

