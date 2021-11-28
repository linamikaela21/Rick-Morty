import axios from 'axios'
import { URL_ALL_CHARACTERS, URL_BASE } from '../../config/config'

import {
    GET_CHARACTER_NAME,
    GET_CHARACTERS,
    GET_CHARACTER_ID
} from './constants'

export const getCharacters = () => {
    return async function (dispatch) {
        try {
          const chars = await axios.get(URL_ALL_CHARACTERS)
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

export const getCharacterId = (id) => {
  return async function (dispatch) {
      try {
        const charId = await axios.get(`${ApiURL}/characters/${id}`)
        return dispatch({ type: GET_CHARACTER_ID, payload: charId.data })
      } catch (error) {
          console.log(error)
      }
  }
}



