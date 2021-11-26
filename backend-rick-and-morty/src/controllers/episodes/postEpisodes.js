const { Episode } = require('../../db')

exports.postEpisode = async (req, res, next) => {

    const episode = req.body

    //const shortId = Math.floor(Math.random() * 100000)

    try {
        let [epi, created] = await Episode.findOrCreate({
            where: {
                id: Math.floor(Math.random() * 100000),
                name: episode.name,
                episode: episode.episode
            }
        })

        console.log(created, epi)

        await epi.setEpisodes(episode.charId)

        return res.status(201).json(epi)

    } catch (error) {
        next(error)
    }
}