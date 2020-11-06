
import axios from 'axios'

export default {
  // It makes get request to recommend attractions based on city
    signup(name, email, password){
        return axios.post('/signup', {params:name,email,password})  
          .catch(function (error) {
            console.log(error);
          });

}
}

