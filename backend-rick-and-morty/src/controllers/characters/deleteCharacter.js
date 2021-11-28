const { Character } = require('../../db')

exports.deleteCharacter = async (req, res, next) => {

    const { id } = req.params

    try {
        let char = await Character.destroy({
            where: {
                id: id
            }
        })

        return res.json({ delete: true})
    } catch (error) {
        next(error)
    }
}