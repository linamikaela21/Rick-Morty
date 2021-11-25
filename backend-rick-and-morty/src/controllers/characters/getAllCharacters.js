const { Episode, Character } = require('../../db')

const { Op } = require('sequelize')

const getAllData = require('../getAllData')

exports.getAllCharacters = async (req, res, next) => {

    const getAllDataApi = await getAllData()

    const { name } = req.query

    try {

        let infoDB = await Character.findAll()
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
                    order: [['name', req.query.order]],
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