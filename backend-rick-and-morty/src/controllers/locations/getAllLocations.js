const { Location, characters_locations } = require('../../db')

const { Op } = require('sequelize')

const { getAllDataLocations } = require('../getAllData')

exports.getAllLocations = async (req, res, next) => {

    const getAllDataApi = await getAllDataLocations()

    const { name } = req.query

    try {

        let infoDB = await Location.findAll()

        if(!infoDB.length) await Location.bulkCreate(getAllDataApi)

        if(name) {
            try {
                let loc = await Location.findAll({
                    where: {
                        name: {
                          [Op.iLike]: `%${name}%`
                        }
                      }
                })
    
                return res.json(loc)
    
            } catch (error) {
                next(error)
            }
        }

        return res.json(infoDB)

    } catch (error) {
        next(error)
    }
}