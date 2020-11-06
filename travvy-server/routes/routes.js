const RecommendController = require('../src/controllers/RecommendController.js')
const CitySelectController = require('../src/controllers/CitySelectController.js')
const UsersController = require('../src/controllers/UsersController.js')
const AuthenticationController = require('../src/controllers/AuthenticationController.js')



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
 
 app.post('/signup', (req, res) => {
  AuthenticationController.signup(req.query.name, req.query.email, req.query.password)
    .then(users => res.status(201).send(users))
    .catch(error => res.status(400).send(error))
})

}
