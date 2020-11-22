const RecommendController = require('../src/controllers/RecommendController.js')
const CitySelectController = require('../src/controllers/CitySelectController.js')
const AuthenticationController = require('../src/controllers/AuthenticationController.js')
const UserTypeController = require('../src/controllers/UserTypeController.js')

// Sets up endpoints for API
module.exports = (app) => {
  app.get('/recommend', (req, res) => {
    groupSize = parseInt(req.query.groupSize)
    startDate = new Date(req.query.startDate)
    //These commented out values is legacy code in case it will be needed to be used again
    //startDate = nonfilteredStartDate.setFullYear(0)
    endDate = new Date(req.query.endDate)
    //endDate = endDate.setFullYear(endDate.getFullYear()-nonfilteredStartDate.getFullYear() > 0 ? 0 : 1)

    RecommendController.recommend(req.query.city,groupSize,startDate,endDate,req.query.user)
      .then(attraction => res.status(200).send(attraction))
      .catch(error => res.status(500).send(error))
  }),

  app.get('/getlocation', (req, res) => {
    CitySelectController.getlocation()
      .then(locations => res.status(200).send(locations))
      .catch(error => res.status(500).send(error))
    }),

 
 app.post('/signup', (req, res) => {
  console.log(req)
  console.log(req.body.params.email)
  AuthenticationController.signup(req.body.params.email, req.body.params.name,req.body.params.password)
    .then(users => res.status(201).send(users))
    .catch(error => res.status(400).send(error))
}),
  app.post('/login', (req, res) => {
      console.log(req)
      console.log(req.body.params.email)
      AuthenticationController.login(req.body.params.email,req.body.params.password)
        .then(users => res.status(201).send(users))
        .catch(error => res.status(400).send(error))
    }),
  app.post('/onboarding', (req, res) => {
      console.log(req)
      console.log(req.body.params.email)
      AuthenticationController.onboarding(req.body.params.email,req.body.params.age,req.body.params.gender,req.body.params.instagram_username,req.body.params.preferred_activity_type)
        .then(users => res.status(201).send(users))
        .catch(error => res.status(400).send(error))
    }),
  app.get('/getUser', (req, res) => {
      console.log(req)
      console.log(req.query.email)
      AuthenticationController.getUser(req.query.email)
        .then(users => res.status(201).send(users))
        .catch(error => res.status(400).send(error))
    })

}
