import axios from 'axios'
import { URL_ALL_EPISODES, URL_EPISODES_NAME } from '../../config/config'

import {
    GET_EPISODES,
    GET_EPISODE_NAME,
} from './constants'

export const getEpisodes = () => {
    return async function (dispatch) {
        try {
          const epi = await axios.get(URL_ALL_EPISODES)
          return dispatch({ type: GET_EPISODES, payload: epi.data })
        } catch (error) {
            console.log(error)
        }
    }
  }

export const getEpisodeName = (name) => {
  return async function (dispatch) {
      try {
        const epiName = await axios.get(URL_EPISODES_NAME + name)
        return dispatch({ type: GET_EPISODE_NAME, payload: epiName.data })
      } catch (error) {
          console.log(error)
      }
  }
}

export const postEpisode = (name, charId) => {
  return async function (dispatch) {
    try {
      const newEpisode = await axios.post(URL_ALL_EPISODES, {
        name,
        charId
      })
      return newEpisode
    } catch (error) {
      console.log(error)
    }
  }
}


