const { Location, Character } = require('../../db')

const { Op } = require('sequelize')

const { getAllDataLocations } = require('../getAllData')

exports.getAllLocations = async (req, res, next) => {

    const getAllDataApi = await getAllDataLocations()

    const { name } = req.query

    console.log(req.query);

    try {

        let infoDB = await Location.findAll({
            include: {
                model: Character,
                attributes: ['id', 'name']
            }
        })

        if (!infoDB.length) await Location.bulkCreate(getAllDataApi)

        if (name) {
            try {
                let loc = await Location.findAll({
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

                return res.json(loc)

            } catch (error) {
                next(error)
            }

        } else if (req.query.type) {
            try {
                let char = await Location.findAll({
                    where: {
                        type: req.query.type
                    },
                    include: {
                        model: Character,
                        attributes: ['id', 'name']
                    }
                })
                return res.status(200).json(char)
            } catch (error) {
                next(error)
            }
         } else if (req.query.dimension) {
                try {
                    let char = await Location.findAll({
                        where: {
                            dimension: req.query.dimension,
                            //type: req.query.type
                        },
                        include: {
                            model: Character,
                            attributes: ['id', 'name']
                        }
                    })
                    return res.status(200).json(char)
                } catch (error) {
                    next(error)
                }
        } else {
            try {
                let char = await Location.findAll({
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