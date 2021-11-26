
const { Location } = require('../../db')

exports.postLocation = async (req, res, next) => {

    const location = req.body

    try {
        let [loc, created] = await Location.findOrCreate({
            where: {
                locationId: Math.floor(Math.random() * 100000),
                name: location.name,
                type: location.type,
                dimension: location.dimension
            }
        })

        console.log(created, loc)

        await loc.setCharacters(location.charId)

        return res.status(201).json(loc)

    } catch (error) {
        next(error)
    }

}