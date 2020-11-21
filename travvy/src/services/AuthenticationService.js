
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
       
       var checkEmail = false

        const response = await axios.post('/onboarding', {params:email,age,gender,instagram_username,preferred_activity_type})


           
        .then(function (response) {

            checkEmail = (email['email'] !== response.data['Email'])
            console.log(checkEmail);
            console.log(response);
        })        
        
        .catch(function (error) {
            console.log(error);
        });
        console.log(response);

        return checkEmail
    }

}
