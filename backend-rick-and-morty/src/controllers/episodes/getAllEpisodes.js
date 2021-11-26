const { Episode } = require('../../db')

const { Op } = require('sequelize')

const { getAllDataEpisodes } = require('../getAllData')

exports.getAllEpisodes = async (req, res, next) => {

    const getAllDataApi = await getAllDataEpisodes()

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
        return res.json(infoDB)

    } catch (error) {
        next(error)
    }
}