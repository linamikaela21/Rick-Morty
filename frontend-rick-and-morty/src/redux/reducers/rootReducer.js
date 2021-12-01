import {
  GET_CHARACTERS,
  GET_CHARACTERS_QUERY,
  GET_CHARACTER_NAME,
  GET_CHARACTER_ID,
  POST_CHARACTER,
  GET_CHARACTER_NAME_FORM,
  GET_EPISODES,
  GET_EPISODES_QUERY,
  GET_EPISODE_NAME,
  POST_EPISODE,
  GET_LOCATION,
  GET_LOCATION_QUERY,
  GET_LOCATION_NAME,
  POST_LOCATION,
  ORDER_CHARACTERS_GENDER,
  ORDER_EPISODES_SEASON,
  ORDER_LOCATION_DIMENSION
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

    case GET_CHARACTERS_QUERY:
      return { ...state, characters: action.payload }

    case ORDER_CHARACTERS_GENDER:
    const allCharacters = state.characters
    const orderGender = action.payload === '' 
    ? allCharacters
    : allCharacters.filter(elem => elem.gender === action.payload)
      return { ...state, characters: orderGender }

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

    case GET_EPISODES_QUERY:
      return { ...state, episodes: action.payload }

    case ORDER_EPISODES_SEASON:
      const allEpisodes = state.episodes

      const orderSeason = 
      action.payload === ''
      ? allEpisodes
      : allEpisodes?.filter(x => x.episode?.charAt(2) === action.payload)
      return { ...state, episodes: orderSeason }

    case GET_EPISODE_NAME:
      return { ...state, episodes: action.payload }

    case POST_EPISODE:
      return { ...state }

    case GET_LOCATION:
      return { ...state, locations: action.payload }

    case GET_LOCATION_QUERY:
      return { ...state, locations: action.payload }

    case ORDER_LOCATION_DIMENSION:
      const allLocations = state.locations
      const orderDimension = action.payload === '' 
      ? allLocations
      : allLocations.filter(elem => elem.dimension === action.payload)
      return { ...state, locations: orderDimension }

    case GET_LOCATION_NAME:
      return { ...state, locations: action.payload }

    case POST_LOCATION:
      return { ...state }

    default:
      return state
  }
}

export default rootReducer
