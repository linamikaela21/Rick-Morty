import {
  GET_CHARACTERS,
  GET_CHARACTER_NAME,
  GET_CHARACTER_ID,
  POST_CHARACTER,
  GET_CHARACTER_NAME_FORM,
  GET_EPISODES,
  GET_EPISODE_NAME,
  POST_EPISODE,
  GET_LOCATION,
  GET_LOCATION_NAME,
  POST_LOCATION
} from '../actions/constants'

const initialState = {
  characters: [],
  episodes: [],
  locations: [],
  details: [],
  newCharacter: [],
  newEpisode: [],
  newLocation: []
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {

    case GET_CHARACTERS:
      return { ...state, characters: action.payload }

    case GET_CHARACTER_NAME:
      return { ...state, characters: action.payload }

    case GET_CHARACTER_ID:
      return { ...state, details: action.payload }

      case GET_CHARACTER_NAME_FORM:
      return { ...state, newEpisode: action.payload }

      case POST_CHARACTER:
        return { ...state }

    case GET_EPISODES:
      return { ...state, episodes: action.payload }

    case GET_EPISODE_NAME:
      return { ...state, episodes: action.payload }

      case POST_EPISODE:
        return { ...state }

    case GET_LOCATION:
      return { ...state, locations: action.payload }

    case GET_LOCATION_NAME:
      return { ...state, locations: action.payload }

      case POST_LOCATION:
        return { ...state }

    default:
      return state
  }
}

export default rootReducer
