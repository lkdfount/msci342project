const RecommendController = require('../travvy-server/src/controllers/RecommendController.js')
const AuthenticationController = require('../travvy-server/src/controllers/AuthenticationController.js')

const assert = require('assert');
const city = "Toronto"
const groupSize = 20
const startDate = new Date("2020-11-05")
const endDate = new Date("2021-01-05")
const correctLogInEmail = "lkdfountain@uwaterloo.ca"
const correctLogInPassword = "georgetown"
const incorrectLogInEmail = "lucy@wrong.ca"
const incorrectLogInPassword = "hellothisiswrong"

describe('Recommend Attractions Test', function() {
 it('Recommend Attractions should return 4', async function() {
       const response = await RecommendController.recommend(city,groupSize,startDate,endDate)
       assert.equal(response.length,4);
        })
    });

// both tests with incorrect emails should return null users since no user is found
describe('Incorrect email and password log in test', function() {
 it('Log in should return null with the wrong email and password', async function() {
       const response = await AuthenticationController.login(incorrectLogInEmail,incorrectLogInPassword)
       assert.equal(response,null);
        })
    });
describe('Incorrect email and correct password log in test', function() {
 it('Log in should return null with the incorrect email and correct password', async function() {
       const response = await AuthenticationController.login(incorrectLogInEmail,correctLogInPassword)
       assert.equal(response,null);
        })
    });

// both tests with correct emails should return a not null user, even if the password is incorrect
// the password is checked in the AuthenticationService.js file
describe('Correct email and incorrect password log in test', function() {
 it('Log in should return null with the correct email and incorrect password', async function() {
       const response = await AuthenticationController.login(correctLogInEmail,incorrectLogInPassword)
       assert.notEqual(response, null);
        })
    });
describe('Correct email and correct password log in test', function() {
 it('Log in should return null with the correct email and incorrect password', async function() {
       const response = await AuthenticationController.login(correctLogInEmail,correctLogInPassword)
       assert.notEqual(response, null);
        })
    });