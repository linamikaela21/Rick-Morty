import axios from 'axios'
import { ApiURL } from '../../config/config'

import {
    GET_CHARACTER_NAME,
    GET_CHARACTERS
} from './constants'

export const getCharacters = () => {
    return async function (dispatch) {
        try {
          const chars = await axios.get(`${ApiURL}/characters`)
          return dispatch({ type: GET_CHARACTERS, payload: chars.data })
        } catch (error) {
            console.log(error)
        }
    }
  }

export const getCharacterName = (name) => {
  return async function (dispatch) {
      try {
        const charName = await axios.get(`${ApiURL}/characters?name=${name}`)
        return dispatch({ type: GET_CHARACTER_NAME, payload: charName.data })
      } catch (error) {
          console.log(error)
      }
  }
}



