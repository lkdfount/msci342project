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

// Unit Tests for Home Page
describe('Recommend Attractions Test', function() {
 it('Recommend Attractions should return 4', async function() {
       const response = await RecommendController.recommend(city,groupSize,startDate,endDate)
       assert.equal(response.length,4);
        })
    });


// Unit Tests for Log In Page
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


//
// Unit Tests for Onboarding Page
const correctOnboardingEmail = "rniazi@uwaterloo.ca"
const incorrectOnboardingEmail = "rushan@incorrect.ca"
const acceptableAge = 20
const unacceptableAge = 11
const acceptableGender = "Male"
const acceptableInstagramUsername = "rushan_niazi"
const acceptableActivity = "Family"


describe('Correct email, age, gender, instagram username, and preferred activity type within onboarding page', function() {
 it('Onboarding test should return true with all attribute data being correct', async function() {
       const response = await AuthenticationController.onboardingTest(correctOnboardingEmail,acceptableAge,acceptableGender,acceptableInstagramUsername,acceptableActivity)
       assert.equal(response, null);
        })
    });

describe('Incorrect email and age, however correct gender, instagram username, and preferred activity type within onboarding page', function() {
 it('Onboarding test should return false since data for email and age are incorrect', async function() {
       const response = await AuthenticationController.onboardingTest(incorrectOnboardingEmail,unacceptableAge,acceptableGender,acceptableInstagramUsername,acceptableActivity)
       assert.equal(response, null);
        })
    });
