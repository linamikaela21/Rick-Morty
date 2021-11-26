const { Location, Character } = require('../../db')

exports.postLocation = async (req, res, next) => {

    const { name, dimension, type, characterId } = req.body

    try {

        if (!name || !type || !characterId) return res.status(404).json({})

        let newLocation = await Location.create({
                id: Math.floor(Math.random() * 100000),
                name: name,
                type: type,
                dimension: dimension
        })

        console.log(newLocation)

        for (let i = 0; i < characterId.length; i++) {
            await newLocation.addCharacters(characterId[i], { through: 'character_location' })
        }

        const location_characters = await Location.findAll({
            where: {
                name: name
            },
            attributes: {
                exclude: ['character_location', 'createdAt', 'updatedAt']
            },
            include: 
                {
                    model: Character,
                    attributes: ['name']
                }
        })

        console.log(location_characters)

        return res.status(201).json(location_characters)

    } catch (error) {
        next(error)
    }

}