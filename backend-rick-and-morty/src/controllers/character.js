const { Episode, Character, characters_episodes } = require('../db')

const { Op } = require('sequelize')

const getAllData  = require('../controllers/getAllData')

exports.getCharacters = async (req, res, next) => {
    const getAllDataApi = await getAllData()

    const { name } = req.query

    try {
        let infoDB = await Character.findAll()
        if(!infoDB.length) await Character.bulkCreate(getAllDataApi)
    } catch (error) {
        next(error)
    }

    if(name) {
        console.log(name,'soy name')
        try {
            let char = await Character.findAll({
                where: {
                    name: {
                      [Op.iLike]: `%${name}%`
                    }
                  }
            })

            return res.json(char)

        } catch (error) {
            next(error)
        }
    }
}