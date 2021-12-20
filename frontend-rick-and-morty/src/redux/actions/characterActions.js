import axios from 'axios'
import { URL_ALL_CHARACTERS, URL_CHARACTERS_NAME } from '../../config/config'

import {
  GET_CHARACTERS,
  GET_CHARACTERS_QUERY,
  GET_CHARACTER_NAME,
  GET_CHARACTER_ID,
  GET_CHARACTER_NAME_FORM,
  ORDER_CHARACTERS_GENDER,
  DELETE_CHARACTER
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

export const getCharactersQuery = (order, status) => {
  return async function (dispatch) {
    try {
      const chars = await axios.get(URL_ALL_CHARACTERS + `?order=${order}&status=${status}`)
      return dispatch({ type: GET_CHARACTERS_QUERY, payload: chars.data })
    } catch (error) {
      console.log(error)
    }
  }
}

export const orderCharactersGender = (payload) => {
  return {
    type: ORDER_CHARACTERS_GENDER,
    payload,
  };
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
      const charId = await axios.get(`${URL_ALL_CHARACTERS}/${id}`)
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

export const postCharacter = (payload) => {
  return async function (dispatch) {
    try {
      const newCharacter = await axios.post(URL_ALL_CHARACTERS, payload)
      console.log(payload, 'PAYLOAD', newCharacter, 'newCharacter')
      return newCharacter
    } catch (error) {
      console.log(error)
    }
  }
}

export const deleteCharacter = (id) => {
  return async (dispatch) => {
    try {
      const charDeleted = await axios.delete(`${URL_ALL_CHARACTERS}/${id}`)
      return { type: DELETE_CHARACTER, charDeleted }
    } catch (error) {
      console.log(error)
    }
  }
}
