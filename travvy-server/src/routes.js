const RecommendController = require('./controllers/RecommendController.js')

module.exports = (app) => {
  app.get('/recommend', RecommendController.recommend)
}
