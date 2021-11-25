const axios = require('axios')
const URL = 'https://rickandmortyapi.com/api/character'

const getAllData = async () => {
    const info = await axios(URL)
    return info.data.results
}

module.exports = getAllData