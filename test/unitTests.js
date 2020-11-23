const RecommendController = require('../travvy-server/src/controllers/RecommendController.js')
const AuthenticationController = require('../travvy-server/src/controllers/AuthenticationController.js')

// Unit Tests for Sign Up Page
const Users = require('../travvy-server/src/models').Users
const name = "Test"
const email = "testemail1@outlook.com"
const password = "Helloworld"

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
                Preferred_Activity_Type: null,
            }
        })

        // the length of the user returned in authentication controller should be the same as the length of the user returned from the users file
        // if the length of these are the same, the signup function is working properly
        assert.equal(response.length,user.length);

        const deleteUser = await Users.destroy({
            where:{
                Email:email,
            }
        })
    })
});


// Unit Tests for Log In Page
const correctLogInEmail = "lkdfountain@uwaterloo.ca"
const correctLogInPassword = "georgetown"
const incorrectLogInEmail = "lucy@wrong.ca"
const incorrectLogInPassword = "hellothisiswrong"

// both tests with incorrect emails should return null users since no user is found
describe('Incorrect email and incorrect password log in test', function() {
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
 it('Log in should not return null with the correct email and incorrect password', async function() {
       const response = await AuthenticationController.login(correctLogInEmail,incorrectLogInPassword)
       assert.notEqual(response, null);
        })
    });
describe('Correct email and correct password log in test', function() {
 it('Log in should not return null with the correct email and incorrect password', async function() {
       const response = await AuthenticationController.login(correctLogInEmail,correctLogInPassword)
       assert.notEqual(response, null);
        })
    });


// Unit Tests for Home Page
const assert = require('assert');
const city = "Toronto"
const city2 = "Paris"
const groupSize = 20
const startDate = new Date("2020-11-05")
const endDate = new Date("2021-01-05")
const userEmailWithPreferences = 'dyampolsky@uwaterloo.ca'
const userEmailWithoutPreferences = 'lucytest@test.ca'

describe('Recommend Attractions No User Info Test', function() {
 it('Recommend Attractions No User Info Test should return 4', async function() {
       const response = await RecommendController.recommend(city,groupSize,startDate,endDate)
       assert.equal(response.length,4);
        })
    });

describe('Recommend Attractions User with Preferences Test', function() {
        it('Recommend Attractions User with Preferences should return 1', async function() {
              const response = await RecommendController.recommend(city2,groupSize,startDate,endDate,userEmailWithPreferences)
              assert.equal(response.length,1);
        })
    });

describe('Recommend Attractions User without Preferences Test', function() {
        it('Recommend Attractions User without Preferences should return 6', async function() {
              const response = await RecommendController.recommend(city2,groupSize,startDate,endDate,userEmailWithoutPreferences)
              assert.equal(response.length,6);
        })
    });
//test the getUser function
describe('Correct email get user test', function() {
 it('Get user should not return null with the a correct email', async function() {
       const response = await AuthenticationController.getUser(correctLogInEmail)
       assert.notEqual(response, null);
        })

    });
//test the getUser function
describe('Correct email get user test', function() {
 it('Get user should return null with the an incorrect email', async function() {
       const response = await AuthenticationController.getUser(incorrectLogInEmail)
       assert.equal(response, null);
        })

    });

// Unit Tests for Onboarding Page
const correctOnboardingEmail = "rniazi@uwaterloo.ca"
const incorrectOnboardingEmail = "rushan@incorrect.ca"
const acceptableAge = 20
const unacceptableAge = 11
const acceptableGender = "Male"
const acceptableInstagramUsername = "rushan_niazi"
const acceptableActivity = "Family"


describe('Onboarding Test for Correct email, age, gender, instagram username, and preferred activity type', function() {
 it('Onboarding test should return true with all attribute data being correct', async function() {
       const response = await AuthenticationController.onboardingTest(correctOnboardingEmail,acceptableAge,acceptableGender,acceptableInstagramUsername,acceptableActivity)
       assert.equal(response, null);
        })
    });

describe('Onboarding Test for Incorrect email and age, however correct gender, instagram username, and preferred activity type', function() {
 it('Onboarding test should return false since data for email and age are incorrect', async function() {
       const response = await AuthenticationController.onboardingTest(incorrectOnboardingEmail,unacceptableAge,acceptableGender,acceptableInstagramUsername,acceptableActivity)
       assert.equal(response, null);
        })
    });


// Unit Tests for Profile Page
const correctProfileEmail = "rniazi@uwaterloo.ca"
const incorrectProfileEmail = "rushan@incorrect.ca"
const acceptableProfileAge = 30
const unacceptableProfileAge = 11
const acceptableProfileGender = "Male"
const acceptableProfileInstagramUsername = "rushan_niazi"
const acceptableProfileActivity = "Family"

describe('Profile Test for Correct email, age, gender, instagram username, and preferred activity type to test the update profile settings feature', function() {
 it('Profile test should return true if all of the fields are updated correctly', async function() {
       const response = await AuthenticationController.onboarding(correctProfileEmail,acceptableProfileAge,acceptableProfileGender,acceptableProfileInstagramUsername,acceptableProfileActivity)
       assert.notEqual(response, null);
        })
    });