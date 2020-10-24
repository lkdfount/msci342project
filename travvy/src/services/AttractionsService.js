//import Api from '@/services/Api'
import axios from 'axios'

export default {
    recommend(city) {
        console.log(city)
        return axios.get('http://localhost:8081/recommend', {params:city})  
          .catch(function (error) {
            console.log(error);
          });

}
}

