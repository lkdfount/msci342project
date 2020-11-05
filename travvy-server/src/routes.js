const RecommendController = require('./controllers/RecommendController.js')
const CitySelectController = require('./controllers/CitySelectController.js')
const UsersController = require('./controllers/UsersController.js')
// Sets up endpoints for API
module.exports = (app) => {
  app.get('/recommend', (req, res) => {
    RecommendController.recommend(req.query.city)
      .then(attraction => res.status(201).send(attraction))
      .catch(error => res.status(400).send(error))
  }),
  app.get('/getlocation', (req, res) => {
    CitySelectController.getlocation()
      .then(locations => res.status(201).send(locations))
      .catch(error => res.status(400).send(error))
    })
  app.get('/getuser', (req, res) => {
    UsersController.getuser()
      .then(users => res.status(201).send(users))
      .catch(error => res.status(400).send(error))
    })
}
