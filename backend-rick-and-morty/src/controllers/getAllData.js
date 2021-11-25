const axios = require('axios')

const URL_CHARACTERES = 'https://rickandmortyapi.com/api/character'
const URL_EPISODES = 'https://rickandmortyapi.com/api/episode'
const URL_LOCATIONS = 'https://rickandmortyapi.com/api/location'


const getAllDataCharacters = async () => {
    const info = await axios(URL_CHARACTERES)
    return info.data.results
}

const getAllDataEpisodes = async () => {
    const info = await axios(URL_EPISODES)
    console.log(info.data.results)
    return info.data.results
}

const getAllDataLocations = async () => {
    const info = await axios(URL_LOCATIONS)
    return info.data.results
}

module.exports = {
    getAllDataCharacters,
    getAllDataEpisodes,
    getAllDataLocations
}