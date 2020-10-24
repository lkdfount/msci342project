const RecommendController = require('./controllers/RecommendController.js')

module.exports = (app) => {
  app.get('/recommend', (req, res) => {
    console.log(req)
    RecommendController.recommend(req.query.city)
      .then(attraction => res.status(201).send(attraction))
      .catch(error => res.status(400).send(error))
  })
}
//   app.get('/recommend',
//     RecommendController.recommend)
// }
