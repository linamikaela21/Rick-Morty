const { Character } = require('../../db')

exports.putCharacter = async (req, res, next) => {

    const { id } = req.params
    const character = req.body

    try {
        let char = await Character.update(character, {
            where: {
                id: id
            }
        })

        return res.json({ Update: true})
    } catch (error) {
        next(error)
    }
}