const RecommendController = require('./controllers/RecommendController.js')

module.exports = (app) => {
  app.post('/recommend', RecommendController.recommend)
}
