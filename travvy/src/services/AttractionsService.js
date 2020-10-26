
import axios from 'axios'

export default {
  // It makes get request to recommend attractions based on city
    recommend(city) {
        return axios.get('/recommend', {params:city})  
          .catch(function (error) {
            console.log(error);
          });

}
}

