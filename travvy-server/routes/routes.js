const RecommendController = require('../src/controllers/RecommendController.js')
const CitySelectController = require('../src/controllers/CitySelectController.js')
const UsersController = require('../src/controllers/UsersController.js')
const AuthenticationController = require('../src/controllers/AuthenticationController.js')



// Sets up endpoints for API
module.exports = (app) => {
  app.get('/recommend', (req, res) => {
    groupSize = parseInt(req.query.groupSize)
    startDate = new Date(req.query.startDate)
    //These commented out values is legacy code in case it will be needed to be used again
    //startDate = nonfilteredStartDate.setFullYear(0)
    endDate = new Date(req.query.endDate)
    //endDate = endDate.setFullYear(endDate.getFullYear()-nonfilteredStartDate.getFullYear() > 0 ? 0 : 1)

    RecommendController.recommend(req.query.city,groupSize,startDate,endDate)
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
 
 app.post('/signup', (req, res) => {
  AuthenticationController.signup(req.query.name, req.query.email, req.query.password)
    .then(users => res.status(201).send(users))
    .catch(error => res.status(400).send(error))
})

}
