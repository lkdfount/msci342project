
import axios from 'axios'

export default {
  // It makes get request to recommend attractions based on city
    recommend(city,groupSize) {
        return axios.get('/recommend', {params:city,groupSize})  
          .catch(function (error) {
            console.log(error);
          });

}
}

