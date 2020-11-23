import axios from 'axios'

export default {
  // It makes get request to recommend attractions based on city
    getCovidInfo(country) {
        if(country.country == 'England'){
            const formated_country= 'UK'
            const urlString = 'https://corona.lmao.ninja/v2/countries/'+ formated_country + '?yesterday&strict&query='
            return axios.get(urlString)  
            .catch(function (error) {
              console.log(error);
            });
        } else if (country.country == 'United States'){
            const formated_country = 'USA'
            const urlString = 'https://corona.lmao.ninja/v2/countries/'+ formated_country + '?yesterday&strict&query='
            return axios.get(urlString)  
            .catch(function (error) {
              console.log(error);
            });
        } else{
            const formated_country = country.country
            const urlString = 'https://corona.lmao.ninja/v2/countries/'+ formated_country + '?yesterday&strict&query='
            return axios.get(urlString)  
            .catch(function (error) {
              console.log(error);
            });
        }

}
}
