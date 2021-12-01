const { Location } = require('../../db')

exports.deleteLocation = async (req, res, next) => {

    const { id } = req.params

    try {
        let loc = await Location.destroy({
            where: {
                id: id
            }
        })

        return res.json({ delete: true})
    } catch (error) {
        next(error)
    }
}