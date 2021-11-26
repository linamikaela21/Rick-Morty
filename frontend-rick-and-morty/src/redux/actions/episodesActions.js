import axios from 'axios'
import { ApiURL } from '../../config/config'

import {
    GET_EPISODES,
    GET_EPISODE_NAME,
    GET_EPISODE_ID
} from './constants'

export const getEpisodes = () => {
    return async function (dispatch) {
        try {
          const epi = await axios.get(`${ApiURL}/episodes`)
          return dispatch({ type: GET_EPISODES, payload: epi.data })
        } catch (error) {
            console.log(error)
        }
    }
  }

export const getEpisodesName = (name) => {
  return async function (dispatch) {
      try {
        const epiName = await axios.get(`${ApiURL}/episodes?name=${name}`)
        return dispatch({ type: GET_EPISODE_NAME, payload: epiName.data })
      } catch (error) {
          console.log(error)
      }
  }
}

export const getEpisodeId = (id) => {
  return async function (dispatch) {
      try {
        const epiId = await axios.get(`${ApiURL}/episodes/${id}`)
        return dispatch({ type: GET_EPISODE_ID, payload: epiId.data })
      } catch (error) {
          console.log(error)
      }
  }
}


