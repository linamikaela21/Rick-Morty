const { Episode, Character, Location } = require('../../db')

const { Op } = require('sequelize')

const { getAllDataCharacters } = require('../getAllData')

exports.getAllCharacters = async (req, res, next) => {

    const getAllDataApi = await getAllDataCharacters()

    const { name } = req.query

    try {

        let infoDB = await Character.findAll(({
            include: 
            [
                {
                    model: Episode,
                    attributes: ['name'],
                },
                {
                    model: Location,
                    attributes: ['name']
                }
            ]
        }))
        
        if (!infoDB.length) await Character.bulkCreate(getAllDataApi)

        if (name) {
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

        } else if (req.query.filter) {
            try {
                let char = await Character.findAll({
                    where: {
                        status: req.query.filter
                    },
                    limit: 6,
                    offset: req.query.page,
                    order: [['name', req.query.order]], //ASC-DESC
                    include: { model: Episode }
                })
                return res.status(200).json(char)
            } catch (error) {
                next(error)
            }
        }

        return res.json(infoDB)

    } catch (error) {
        next(error)
    }

}