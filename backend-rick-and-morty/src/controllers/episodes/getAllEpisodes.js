const { Episode, Character } = require('../../db')

const { Op } = require('sequelize')

const { getAllDataEpisodes } = require('../getAllData')

exports.getAllEpisodes = async (req, res, next) => {

    const getAllDataApi = await getAllDataEpisodes()

    const { name } = req.query

    try {

        let infoDB = await Episode.findAll({
            include: {
                model: Character,
                attributes: ['id', 'name']
            },
            exclude: ['createdAt', 'updatedAt']
        })

        if (!infoDB.length) await Episode.bulkCreate(getAllDataApi)

        if (name) {
            try {
                let epi = await Episode.findAll({
                    where: {
                        name: {
                            [Op.iLike]: `%${name}%`
                        }
                    },
                    include: {
                        model: Character,
                        attributes: ['id', 'name']
                    }
                })

                return res.json(epi)

            } catch (error) {
                next(error)
            }
        } else if (req.query.order) {
            try {
                let char = await Episode.findAll({
                    order: [['name', req.query.order]], //ASC-DESC
                    include: {
                        model: Character,
                        attributes: ['id', 'name']
                    }
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