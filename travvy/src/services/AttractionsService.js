
import axios from 'axios'

export default {
  // It makes get request to recommend attractions based on city
    recommend(city,groupSize,startDate,endDate,user) {
        return axios.get('http://localhost:5000/recommend', {params:city,groupSize,startDate,endDate,user})  
          .catch(function (error) {
            console.log(error);
          });

}
}

