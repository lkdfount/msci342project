const { Attractions } = require('../models')

module.exports = {
  async recommend (req, res) {
    try {
      const attractions = await Attractions.findAll({
        model: Attractions,
        where: {
          city: req.body.city
        }
      })
      res.send(attractions.toJSON())
    } catch (err) {
      res.status(400).send({
        error: 'err'
      })
    }
  }
}

// const tagJoinJobTags = await Tag.findAll({
//     include:{
//         model: JobTag,
//         as: 'jobTags',
//         where: {
//             tagId: tagIds
//         }
//     }
// });
