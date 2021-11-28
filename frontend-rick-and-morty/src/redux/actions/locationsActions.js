import axios from 'axios'
import { URL_ALL_LOCATIONS, URL_LOCATIONS_NAME } from '../../config/config'

import {
    GET_LOCATION,
    GET_LOCATION_NAME
} from './constants'

export const getLocations = () => {
    return async function (dispatch) {
        try {
          const loc = await axios.get(URL_ALL_LOCATIONS)
          return dispatch({ type: GET_LOCATION, payload: loc.data })
        } catch (error) {
            console.log(error)
        }
    }
  }

export const getLocationName = (name) => {
  return async function (dispatch) {
      try {
        const locName = await axios.get(URL_LOCATIONS_NAME + name)
        return dispatch({ type: GET_LOCATION_NAME, payload: locName.data })
      } catch (error) {
          console.log(error)
      }
  }
}