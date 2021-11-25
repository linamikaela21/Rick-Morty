
const { Location } = require('../../db')

// exports.postLocation = async (req, res, next) => {

//     const { name, type, dimension, chartId } = req.body

    
//     try {

//         if (!name || !type || !dimension) return res.status(404).json({})

//         const newLocation = await Location.create({
                // id: Math.floor(Math.random() * 100000),
                // name: name,
                // type: type,
                // dimension: dimension
//         })

//         console.log(newLocation)

//         for (let i = 0; i < chartId.length; i++) {
//             await newLocation.addCharacters(chartId[i], { through: 'character_location' })
//         }

//         const characters_location = await Location.findAll({
//             where: {
//                 name: name
//             },
//             attributes: {
//                 exclude: ['character_location', 'createdAt', 'updatedAt']
//             },
//             include: {
//                 model: Character,
//                 attributes:['name'],
//             }
//         })

//         return res.status(201).json(characters_location)

//     } catch (error) {
//         next(error)
//     }
// }

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