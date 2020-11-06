
import axios from 'axios'

export default {
  // It makes post request to add the user information to the database
    signup(email,name, password){
        return axios.post('/signup', {params:email,name,password})  
        .then(function (response) {
          console.log(response);
        })        
        .catch(function (error) {
            console.log(error);
        });

}
}
