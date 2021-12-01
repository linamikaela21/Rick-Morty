const { Episode } = require('../../db')

exports.deleteEpisode = async (req, res, next) => {

    const { id } = req.params

    try {
        let epi = await Episode.destroy({
            where: {
                id: id
            }
        })

        return res.json({ delete: true})
    } catch (error) {
        next(error)
    }
}