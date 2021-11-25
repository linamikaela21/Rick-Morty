const { Episode, Character, characters_episodes, Location, characters_locations } = require('../db')

const { Op } = require('sequelize')

const getAllData = require('../controllers/getAllData')

exports.getCharacters = async (req, res, next) => {

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

exports.getCharactersByID = async (req, res, next) => {

    const { id } = req.params

    try {
        let charID = await Character.findByPk(id)
        return res.json(charID)
    } catch (error) {
        next(error)
    }
}

exports.postCharacter = async (req, res, next) => {

    const { name, image, gender, status, epiId } = req.body

    try {

        if (!name || !image) return res.status(404).json({})

        const newCharacter = await Character.create({
            id: Math.floor(Math.random() * 100000),
            name: name,
            image: image,
            gender: gender,
            status: status
        })

        console.log(req.body, 'body')

        for (let i = 0; i < epiId.length; i++) {
            await newCharacter.addEpisodes(epiId[i], { through: 'characters_episodes' })
        }

        const characters_episodes = await Character.findAll({
            where: {
                name: name
            },
            include: Episode
        })

        return res.status(201).json({ characters_episodes })

    } catch (error) {
        next(error)
    }
}