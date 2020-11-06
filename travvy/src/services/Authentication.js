
import axios from 'axios'

export default {
  // It makes get request to recommend attractions based on city
    signup(email,name, password){
     
        return axios.post('/signup',{params:email,name,password})  
          .catch(function (error) {
            console.log(error);
          });

}
}

// , {params:name,email,password}