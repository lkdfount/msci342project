
import axios from 'axios'

export default {
  // It makes get request to recommend attractions based on city
    recommend(city) {
        console.log(city)
        return axios.get('http://localhost:8081/getlocation')
          .catch(function (error) {
            console.log(error);
          });
        }
}
