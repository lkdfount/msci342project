

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
}
}


