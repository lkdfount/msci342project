

const Users = require('../models').Users

// This is the logic for queriying database for attraction information for the desired city
module.exports = {
  async signup(name,email,password) {
    const users = await Users.create({
        Email: email, 
        Name: name,
        Password: password,
        Age: null,
        Gender: null,
        Instagram_Username: null,
        Preferred_Activity_Type: null
        
    })

    return users
  }

}

