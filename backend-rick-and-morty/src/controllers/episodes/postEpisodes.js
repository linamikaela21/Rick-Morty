const { Episode } = require('../../db')

exports.postEpisode = async (req, res, next) => {

    const episode = req.body

    try {
        let [epi, created] = await Episode.findOrCreate({
            where: {
                name: episode.name
            }
        })

        console.log(created)

        await epi.setEpisodes(episode.charId)

        return res.status(201).json(epi)

    } catch (error) {
        next(error)
    }
}