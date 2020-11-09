

const Users = require('../models').Users

// This is the logic for adding users to the database
// The format is set to match the Users table on MySQL
// The null values will be replaced with information that the user will provide during onboarding
module.exports = {
  async signup (email,name, password) {
    const user = await Users.create({
        Email: email, 
        Name: name,
        Password: password,
        Age: null,
        Gender: null,
        Instagram_Username: null,
        Preferred_Activity_Type: null
        
    })
    return user
    
    },
    //this is the login method
    async login (email, password) {
        //here we find a user who's email matches an email in the user database
        const user = await Users.findOne({
            where:{
                email: email
            }
        })
        //retun the user that was found
        //if there is not a user that exists it will return null
        return user
    },
    
    async onboarding (email, age, gender, instagram_username, preferred_activity_type) {
        //here we find a user who's email matches an email in the user database
        const user = await Users.update({
            Age: age,
            Gender: gender,
            Instagram_Username: instagram_username,
            Preferred_Activity_Type: preferred_activity_type,
           } , {
            where:{
                email: email,
            }
        })
        //retun the user that was found
        //if there is not a user that exists it will return null
        return user
    }
}


