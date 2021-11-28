import axios from 'axios'
import { URL_ALL_CHARACTERS, URL_CHARACTERS_NAME } from '../../config/config'

import {
    GET_CHARACTER_NAME,
    GET_CHARACTERS,
    GET_CHARACTER_ID,
    GET_CHARACTER_NAME_FORM,
    CLEAR_CHARACTER_NAME_FORM
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
        const charName = await axios.get(URL_CHARACTERS_NAME + name)
        return dispatch({ type: GET_CHARACTER_NAME, payload: charName.data })
      } catch (error) {
          console.log(error)
      }
  }
}

export const getCharacterId = (id) => {
  return async function (dispatch) {
      try {
        const charId = await axios.get(URL_ALL_CHARACTERS + id)
        return dispatch({ type: GET_CHARACTER_ID, payload: charId.data })
      } catch (error) {
          console.log(error)
      }
  }
}

export const getCharacterNameForm = (name) => {
  return async function (dispatch) {
      try {
        const charName = await axios.get(URL_CHARACTERS_NAME + name)
        return dispatch({ type: GET_CHARACTER_NAME_FORM, payload: charName.data })
      } catch (error) {
          console.log(error)
      }
  }
}

export const clearCharacterNameForm = () => {
  return function (dispatch) {
    return dispatch({type: CLEAR_CHARACTER_NAME_FORM})
  }
}


