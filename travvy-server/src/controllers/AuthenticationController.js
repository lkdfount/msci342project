

const Users = require('../models').Users

// This is the logic for queriying database for attraction information for the desired city
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


