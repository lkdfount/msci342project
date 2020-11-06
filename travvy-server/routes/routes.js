const RecommendController = require('../src/controllers/RecommendController.js')
const CitySelectController = require('../src/controllers/CitySelectController.js')
const UsersController = require('../src/controllers/UsersController.js')

// Sets up endpoints for API
module.exports = (app) => {
  app.get('/recommend', (req, res) => {
    console.log(req.query)
    console.log(parseInt(req.query.groupSize))
    RecommendController.recommend(req.query.city,parseInt(req.query.groupSize))
      .then(attraction => res.status(200).send(attraction))
      .catch(error => res.status(500).send(error))
  }),
  app.get('/getlocation', (req, res) => {
    CitySelectController.getlocation()
      .then(locations => res.status(200).send(locations))
      .catch(error => res.status(500).send(error))
    })
  app.get('/getuser', (req, res) => {
    UsersController.getuser()
      .then(users => res.status(200).send(users))
      .catch(error => res.status(500).send(error))
    })
}
