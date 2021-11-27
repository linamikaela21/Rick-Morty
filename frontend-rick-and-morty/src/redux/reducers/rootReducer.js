import {
  GET_CHARACTERS,
  GET_CHARACTER_NAME,
  GET_CHARACTER_ID,
  GET_EPISODES,
  GET_EPISODE_NAME,
  GET_LOCATION,
  GET_LOCATION_NAME,
} from '../actions/constants'

const initialState = {
  characters: [],
  episodes: [],
  locations: [],
  details: []
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {

    case GET_CHARACTERS:
      return { ...state, characters: action.payload }

    case GET_CHARACTER_NAME:
      return { ...state, characters: action.payload }

    case GET_CHARACTER_ID:
      return { ...state, details: action.payload }

    case GET_EPISODES:
      return { ...state, episodes: action.payload }

    case GET_EPISODE_NAME:
      return { ...state, episodes: action.payload }

    case GET_LOCATION:
      return { ...state, locations: action.payload }

    case GET_LOCATION_NAME:
      return { ...state, locations: action.payload }

    default:
      return state
  }
}

export default rootReducer
