const { Episode, Character } = require('../../db')

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