const RecommendController = require('./controllers/RecommendController.js')

// Sets up endpoints for API
module.exports = (app) => {
  app.get('/recommend', (req, res) => {
    RecommendController.recommend(req.query.city)
      .then(attraction => res.status(201).send(attraction))
      .catch(error => res.status(400).send(error))
  })
}
