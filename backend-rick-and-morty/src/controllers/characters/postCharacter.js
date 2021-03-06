const { Episode, Character, Location } = require('../../db')

exports.postCharacter = async (req, res, next) => {

    const { name, image, gender, status, species, episodeId, locationId } = req.body

    console.log(name, image, gender, status, species, episodeId, locationId);

    try {

        if (!name || !image || !gender || !status) return res.status(404).json({}, 'Faltan datos en el back')

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
                exclude: ['character_episode', 'createdAt', 'updatedAt'],
            include: 
            [
                {
                    model: Episode,
                    attributes: ['id', 'name'],
                    exclude: ['character_episode', 'createdAt', 'updatedAt']
                },
                {
                    model: Location,
                    attributes: ['id','name'],
                    exclude: ['character_location', 'createdAt', 'updatedAt']
                }
            ]
        })

        return res.status(201).json({ char_epi_loc })

    } catch (error) {
        next(error)
    }
}