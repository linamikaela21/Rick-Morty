const { Character } = require('../../db')

exports.getCharactersByID = async (req, res, next) => {

    const { id } = req.params

    try {
        let charID = await Character.findByPk(id)
        return res.json(charID)
    } catch (error) {
        next(error)
    }
}