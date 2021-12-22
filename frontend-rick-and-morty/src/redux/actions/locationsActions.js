import axios from 'axios'
import { URL_ALL_LOCATIONS, URL_LOCATIONS_NAME } from './UrlConstants'

import {
    GET_LOCATION,
    GET_LOCATION_QUERY,
    GET_LOCATION_NAME,
    ORDER_LOCATION_DIMENSION,
    DELETE_LOCATION
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

export const getLocationsQuery = (order, type, dimension) => {
    return async function (dispatch) {
        try {
          const loc = await axios.get(URL_ALL_LOCATIONS + `?order=${order}&type=${type}`)
          return dispatch({ type: GET_LOCATION_QUERY, payload: loc.data })
        } catch (error) {
            console.log(error)
        }
    }
  }

  export const orderDimension = (payload) => {
    return {
      type: ORDER_LOCATION_DIMENSION,
      payload,
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

export const postLocation = (payload) => {
  return async function (dispatch) {
    try {
      const newLocation = await axios.post(URL_ALL_LOCATIONS, payload)
      return newLocation
    } catch (error) {
      console.log(error)
    }
  }
}

export const deleteLocation = (id) => {
  return async (dispatch) => {
    try {
      const charDeleted = await axios.delete(`${URL_ALL_LOCATIONS}/${id}`)
      return {type: DELETE_LOCATION, charDeleted}
    } catch (error) {
      console.log(error)
    }
  }
}