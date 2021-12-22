const { Episode, Character } = require('../../db')

exports.postEpisode = async (req, res, next) => {

    const { name, episode, characterId } = req.body

    try {
        if (!name) return res.status(404).json({})

        const newEpisode = await Episode.create({
            id: Math.floor(Math.random() * 100000),
            name: name,
            episode: episode,
        })

        for (let i = 0; i < characterId.length; i++) {
            await newEpisode.addCharacters(characterId[i], { through: 'character_episode' })
        }

        const episodes_characters = await Episode.findAll({
            where: {
                name: name,
                episode: episode
            },
            attributes: {
                exclude: ['character_episode', 'createdAt', 'updatedAt']
            },
            include: 
                {
                    model: Character,
                    attributes: ['name', 'episode', 'id']
                }
        })

        return res.status(201).json(episodes_characters)

    } catch (error) {
        next(error)
    }
}