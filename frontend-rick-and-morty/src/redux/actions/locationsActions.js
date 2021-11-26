import axios from 'axios'
import { ApiURL } from '../../config/config'

import {
    GET_LOCATION,
    GET_LOCATION_NAME,
    GET_LOCATION_ID
} from './constants'

export const getLocations = () => {
    return async function (dispatch) {
        try {
          const loc = await axios.get(`${ApiURL}/locations`)
          return dispatch({ type: GET_LOCATION, payload: loc.data })
        } catch (error) {
            console.log(error)
        }
    }
  }

export const getLocationsName = (name) => {
  return async function (dispatch) {
      try {
        const locName = await axios.get(`${ApiURL}/locations?name=${name}`)
        return dispatch({ type: GET_LOCATION_NAME, payload: locName.data })
      } catch (error) {
          console.log(error)
      }
  }
}

export const getLocationId = (id) => {
  return async function (dispatch) {
      try {
        const locId = await axios.get(`${ApiURL}/locations/${id}`)
        return dispatch({ type: GET_LOCATION_ID, payload: locId.data })
      } catch (error) {
          console.log(error)
      }
  }
}