const RecommendController = require('../travvy-server/src/controllers/RecommendController.js')

const assert = require('assert');
const city = "Toronto"
const groupSize = 20
const startDate = new Date("2020-11-05")
const endDate = new Date("2021-01-05")

describe('Reccommend Attractions Test', function() {
 it('Reccomend Attractions should return 4', async function() {
       const response = await RecommendController.recommend(city,groupSize,startDate,endDate)
       assert.equal(response.length,4);
        })
    });

