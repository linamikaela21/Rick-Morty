const { Episode, Character, Location } = require('../../db')

exports.postCharacter = async (req, res, next) => {

    const { name, image, gender, status, species, episodeId, locationId } = req.body

    try {

        if (!name || !image || !gender || !status) return res.status(404).json({})

        const newCharacter = await Character.create({
            id: Math.floor(Math.random() * 100000),
            name: name,
            image: image,
            gender: gender,
            status: status,
            species: species,
        })

        for (let i = 0; i < episodeId.length; i++) {
            await newCharacter.addEpisodes(episodeId[i], { through: 'character_episode' })
        }

        await newCharacter.setLocation(locationId, { through: 'character_location' })

        const char_epi_loc = await Character.findAll({
            where: {
                name: name
            },
            attributes: {
                exclude: ['character_episode', 'createdAt', 'updatedAt']
            },
            include: 
            [
                {
                    model: Episode,
                    attributes: ['id', 'name']
                },
                {
                    model: Location,
                    attributes: ['id','name']
                }
            ]
        })

        return res.status(201).json({ char_epi_loc })

    } catch (error) {
        next(error)
    }
}