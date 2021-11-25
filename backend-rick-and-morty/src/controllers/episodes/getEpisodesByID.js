const { Episode } = require('../../db')

exports.getEpisodeByID = async (req, res, next) => {

    const { id } = req.params

    try {
        let epiId = await Episode.findByPk(id) 
        return res.json(epiId)
    } catch (error) {
        next(error)
    }
}