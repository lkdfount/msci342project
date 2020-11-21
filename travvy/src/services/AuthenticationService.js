
import axios from 'axios'

export default {
  // It makes post request to add the user information to the database
    async signup(email,name, password){
        // to begin, set that the user does not exist
       var userExist = false
       // create the post request to the database using info from sign up
        const response = await axios.post('/signup',{params:email,name,password})
        
        .then(function (response) {
            // the user exists in the database if the emails match
            userExist = (email['email'] === response.data['Email'])
        })        
        .catch(function (error){

            alert(error)
        });
        console.log(response);
        // return if the user exists or not
        return userExist
    },
    //post to compare the log in information to the database
    async login(email, password){
        //do the post
        var isValidLogin = false
        const response = await axios.post('/login', {params:email,password})
        //use this to hardcode if it is not working:
        //return axios.post('http://localhost:5000/login', {params:email,password})  
        .then(function (response) {
            //compare the user's input to the information passed back to the database
            //if the email and password match, it is a valid login and is true
            //otherwise false
            isValidLogin = (email['email'] === response.data['Email'] && email['password'] === response.data['Password'])
        })        
        .catch(function (error) {
            //console.log(error);
            alert(error)
        });
        console.log(response)
        //return if it is a valid login or not
        return isValidLogin
    },
    async onboarding(email,age,gender,instagram_username,preferred_activity_type){
        return axios.post('/onboarding', {params:email,age,gender,instagram_username,preferred_activity_type})  
        .then(function (response) {
          console.log(response);
        })        
        .catch(function (error) {
            console.log(error);
        });
    },
    async getUser(email){
        //wait for a response containing the user
        var responseDict = {
            Age: "",
            Email: "",
            Gender: "",
            Instagram_Username: "",
            Name: "",
            Password: "",
            Preferred_Activity_Type: ""
        }
        const response = await axios.get('/getUser', {params:email})  
        .then(function (response) {
          console.log(response);
          responseDict.Age = response.data['Age']
          responseDict.Email = response.data['Email']
          responseDict.Gender = response.data['Gender']
          responseDict.Instagram_Username = response.data['Instagram_Username']
          responseDict.Name = response.data['Name']
          responseDict.Password = response.data['Password']
          responseDict.Preferred_Activity_Type = response.data['Preferred_Activity_Type']
        })        
        .catch(function (error) {
            console.log(error);
        });
        console.log(response);
        //return the user
        return responseDict
    },


}
