const { Episode, Character, characters_episodes } = require('../db')

const { Op } = require('sequelize')

const getAllData = require('../controllers/getAllData')

exports.getEpisodes = async (req, res, next) => {
    const getAllDataApi = await getAllData()

    const { name } = req.query

    try {

        let infoDB = await Episode.findAll()
        if(!infoDB.length) await Episode.bulkCreate(getAllDataApi)
        if(name) {
            try {
                let epi = await Episode.findAll({
                    where: {
                        name: {
                          [Op.iLike]: `%${name}%`
                        }
                      }
                })
    
                return res.json(epi)
    
            } catch (error) {
                next(error)
            }
        }

        res.json(infoDB)

    } catch (error) {
        next(error)
    }


}

exports.getEpisodeByID = async (req, res, next) => {

    const { id } = req.params

    try {
        let epiID = await Episode.findByPk(id) 
        return res.json(epiID)
    } catch (error) {
        next(error)
    }
}

exports.postEpisode = async (req, res, next) => {

    const episode = req.body

    try {
        let [epi, created] = await Episode.findOrCreate({
            where: {
                name: episode.name
            }
        })

        console.log(created)

        await epi.setEpisodes(episode.charId)

        return res.status(201).json(epi)

    } catch (error) {
        next(error)
    }
}