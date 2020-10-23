const { Attractions } = require('../models')

module.exports = {
  recommend (req, res) {
    res.send({
      message: `The location you are interested in is ${req.body.city}`
    })
  }
}
