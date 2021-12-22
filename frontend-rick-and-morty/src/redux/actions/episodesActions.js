import axios from 'axios'
import { URL_ALL_EPISODES, URL_EPISODES_NAME } from './UrlConstants'

import {
  DELETE_EPISODE,
  GET_EPISODES,
  GET_EPISODES_QUERY,
  GET_EPISODE_NAME,
  ORDER_EPISODES_SEASON,
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

export const getEpisodesQuery = (order) => {
  return async function (dispatch) {
    try {
      const epi = await axios.get(URL_ALL_EPISODES + `?order=${order}`)
      return dispatch({ type: GET_EPISODES_QUERY, payload: epi.data })
    } catch (error) {
      console.log(error)
    }
  }
}

export const orderEpisodesSeason = (payload) => {
  return {
    type: ORDER_EPISODES_SEASON,
    payload,
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

export const postEpisode = (name, episode, characterId) => {
  return async function (dispatch) {
    try {
      const newEpisode = await axios.post(URL_ALL_EPISODES, { name, episode, characterId})
      console.log(newEpisode, 'newEpisode');
      return newEpisode
    } catch (error) {
      console.log(error)
    }
  }
}

export const deleteEpisode = (id) => {
  return async (dispatch) => {
    try {
      const charDeleted = await axios.delete(`${URL_ALL_EPISODES}/${id}`)
      console.log(id)
      return {type: DELETE_EPISODE, charDeleted}
    } catch (error) {
      console.log(error)
    }
  }
}



