const { Episode } = require('../../db')

exports.getEpisodeByID = async (req, res, next) => {

    const { id } = req.params

    try {
        let epiID = await Episode.findByPk(id) 
        return res.json(epiID)
    } catch (error) {
        next(error)
    }
}