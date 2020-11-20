const RecommendController = require('../travvy-server/src/controllers/RecommendController.js')
const AuthenticationController = require('../travvy-server/src/controllers/AuthenticationController.js')

const assert = require('assert');
const city = "Toronto"
const groupSize = 20
const startDate = new Date("2020-11-05")
const endDate = new Date("2021-01-05")
const Users = require('../travvy-server/src/models').Users
const name = "Test"
const email = "testemail@outlook.com"
const password = "Helloworld"

describe('Reccommend Attractions Test', function() {
 it('Reccomend Attractions should return 4', async function() {
       const response = await RecommendController.recommend(city,groupSize,startDate,endDate)
       assert.equal(response.length,4);
        })
    });

// This unit test is for the sign up page and authentication controller
// It makes sure that the users are placed in the database
describe('Sign up test', function(){
    it('Signup should place users in database and return the same length as user', async function(){
        // this will pass the information collected in signup to the authentication controller 
        const response = await AuthenticationController.signup(email,name,password)
        // a user is found given the constants and parameters for users
        const user = await Users.findOne({
            where:{
                Email:email,
                Name: name,
                Password: password,
                Age: null,
                Gender: null,
                Instagram_Username: null,
                Preferred_Activity_Type: null
            }
        })
        // the length of the user returned in authentication controller should be the same as the length of the user returned from the users file
        // if the length of these are the same, the signup function is working properly
        assert.equal(response.length,user.length);
    })
});

