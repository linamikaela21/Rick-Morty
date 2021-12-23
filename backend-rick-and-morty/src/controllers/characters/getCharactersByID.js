const { Character, Episode, Location } = require('../../db')

exports.getCharactersByID = async (req, res, next) => {

  const { id } = req.params

  try {
    let charID = await Character.findOne({
      where: {
        id: id
      },
      include: [
        { model: Episode },
        { model: Location }
      ]
    })

    return res.json(charID)
  } catch (error) {
    next(error)
  }
}