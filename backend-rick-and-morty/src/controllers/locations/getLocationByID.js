const { Location } = require('../../db')

exports.getLocationByID = async (req, res, next) => {

    const { id } = req.params

    try {
        let locId = await Location.findByPk(id) 
        console.log(locId, 'soy IF')
        return res.json(locId)
    } catch (error) {
        next(error)
    }
}