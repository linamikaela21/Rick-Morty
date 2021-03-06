const { Episode, Character, Location } = require('../../db')

const { Op } = require('sequelize')

const { getAllDataCharacters } = require('../getAllData')

exports.getAllCharacters = async (req, res, next) => {

    const getAllDataApi = await getAllDataCharacters()

    const { name } = req.query

    try {

        let infoDB = await Character.findAll({
            include:
            [
                {
                    model: Episode,
                    attributes: ['id', 'name'],
                },
                {
                    model: Location,
                    attributes: ['id', 'name']
                }
            ],
            exclude: ['createdAt', 'updatedAt'],
        })

        if (!infoDB.length) await Character.bulkCreate(getAllDataApi)

        if (name) {
            try {
                let char = await Character.findAll({
                    where: {
                        name: {
                            [Op.iLike]: `%${name}%`
                        }
                    },
                    include:
                        [
                            {
                                model: Episode,
                                attributes: ['id', 'name'],
                            },
                            {
                                model: Location,
                                attributes: ['id', 'name']
                            }
                        ]
                })

                return res.json(char)

            } catch (error) {
                next(error)
            }

        } else if (req.query.status) {
            try {
                let char = await Character.findAll({
                    where: {
                        status: req.query.status,
                    },
                    order: [['name', req.query.order]], //ASC-DESC
                    include:
                        [
                            {
                                model: Episode,
                                attributes: ['id', 'name'],
                            },
                            {
                                model: Location,
                                attributes: ['id', 'name']
                            }
                        ]
                })
                return res.status(200).json(char)
            } catch (error) {
                next(error)
            }
        } else {
            try {
                let char = await Character.findAll({
                    order: [['name', req.query.order]], //ASC-DESC
                    include:
                        [
                            {
                                model: Episode,
                                attributes: ['id', 'name'],
                            },
                            {
                                model: Location,
                                attributes: ['id', 'name']
                            }
                        ]
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