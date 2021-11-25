const { Episode, Character, Location } = require('../../db')

exports.postCharacter = async (req, res, next) => {

    const { name, image, gender, status, species, epiId, locatId } = req.body

    try {

        if (!name || !image) return res.status(404).json({})

        const newCharacter = await Character.create({
            id: Math.floor(Math.random() * 100000),
            name: name,
            image: image,
            gender: gender,
            status: status,
            species: species,
        })

        console.log(req.body, 'body')

        for (let i = 0; i < epiId.length; i++) {
            await newCharacter.addEpisodes(epiId[i], { through: 'character_episode' })
        }

        await newCharacter.setLocation(locatId, { through: 'character_location' })

        const characters_episodes = await Character.findAll({
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
                    attributes: ['name'],
                },
                {
                    model: Location,
                    attributes: ['name']
                }
            ]
        })

        return res.status(201).json({ characters_episodes })

    } catch (error) {
        next(error)
    }
}