<!-- the purpose of this webpage it to allow users to input their trip information to search for attractions based on data and profile -->
<!-- template allows for HTML syntax to be used to connect to data from vue -->
<!-- template outlines the web page and calls on instance data from the script -->
<template>
  <div class="Home">
    <div class="container">
    <!-- Profile button that will lead to the users profile page -->
    <router-link to="/Profile" tag="button" class="profile" style="float: right;"><span>Profile</span></router-link>
    <br>
    <br>
    <br>
    <br>
    <h2> Book your next trip!</h2>
    <!-- data binding destination, corresponding data object below -->
    <form>
    <!-- this paragraph will only appear if there are any errors added to the errors array in the script below --> 
    <p v-if="errors.length" class="error">
      <b>Please following information is missing:</b>
      <!-- this will bind all the errors together after the form is completed and return them to the user-->
      <u1 id="checkForm" class="red"> 
        <br>
        <li v-for="error in errors" :key="error"> {{ error }}</li>
        <!-- v-bind="error in errors"-->
      </u1>
    </p>
    <label for="Destination">Select a Destination*:</label>
    <!-- select destinations to find attractions in -->
    <!--<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.17/vue.js"></script>
    <div id="selector">
      <select v-model="selected">
        <option v-for="(item,key) in cities" :value="key">
          {{item}}
        </option>
      </select>
      <br>
      <br>
      <span>Selected:{{selected}}</span>
      </div>-->

    <select v-model="city" id="Destination" name="Destination" class="destination input">
      <option value="Toronto">Toronto, Canada</option>
      <option value="Paris">Paris, France</option>
      <option value="London">London, England</option>
      <option value="New York City">New York City, United States</option>
      <option value="Rio de Janeiro">Rio de Janeiro, Brazil</option>
      <option value="Rome">Rome, Italy</option>

    </select>
    <br>
    <br>
    <!-- data binding dates, corresponding data object below -->
    <label for="Dates">     Select Departure Date*:</label>
    <!-- user selects dates they are travelling in -->

      <input type="Date" min="2020-11-23" max="2022-12-31" class="dates input" v-model="startDate">
    <br>
    <br>
    <label for="Dates">     Select Return Date*:</label>
      <input type="Date" min="2020-11-23" max="2022-12-31" class="dates input" v-model="endDate">
    <br>
    <br>

    <!-- data binding travellers, corresponding data object below -->
    <label for="Travellers">     Number of Travellers*:</label>
    <!-- user selects number of travellers in their party -->
    <input type="text" id="groupSize" class="travellers input" v-model="groupSize">

    </form>
    <p> * Required Field </p>
    <div v-html="error" />
    <br>
    <br>

    <center><button v-on:click="checkForm(), navigateTo({name:'AttractionsList'})" class="search"><span>Search </span></button></center>
  

    <!-- the search will use the parameters from above to search through the database and return results -->
    <br><br>

    <p>{{ uploadDocs }}</p>
    <!-- data binding documents, corresponding data object below -->
    <h2>Upload Travel Documents</h2>
    <p>{{ uploadFiles}}</p>
    <!-- data binding upload files message, corresponding data object below -->
    
    <!-- allows users to upload travel documents from computer -->
  <div>
    <select-file></select-file>
  </div>


    <br>
    <p> {{ nextDestination }}</p>
    <!-- data binding destination suggestions corresponding data object below -->
    <h2>Find your next travel destination</h2>

    <button v-on:click="nextDest('Toronto')" class="nextDestination">Toronto<br><br><img src="../images/toronto2.jpg" alt="Picture of Toronto" class ="cityimage"/></button>
    <button v-on:click="nextDest('New York City')" class="nextDestination">New York City<br><br><img src="../images/newyorkcity2.jpg" alt="Picture of New York City" class ="cityimage"/></button>
    <button v-on:click="nextDest('Rome')" class="nextDestination">Rome<br><br><img src="../images/rome2.jpg" alt="Picture of Rome" class ="cityimage"/></button>
    <button v-on:click="nextDest('Rio de Janeiro')" class="nextDestination">Rio De Janeiro<br><br><img src="../images/rio2.jpg" alt="Picture of Rio de Janeiro" class ="cityimage"/></button>
    <button v-on:click="nextDest('Paris')" class="nextDestination">Paris<br><br><img src="../images/paris2.jpg" alt="Picture of Paris" class ="cityimage"/></button>
    <button v-on:click="nextDest('London')" class="nextDestination">London<br><br><img src="../images/london2.jpeg" alt="Picture of London" class ="cityimage" /></button>

    <!-- gives users the options to explore attractions at other destinations -->
   <br><br><br>
   </div>
 </div>
 </template>

<!-- this script hosts components and assigns each prop from the template above a specific type of value -->
<!-- methods are referenced above in template, and explains the behaviour of an object -->
 <script>
 import SelectFile from './SelectFile.vue'
 import AttractionsService from '../services/AttractionsService.js'
 import CovidService from '../services/CovidService.js'
 import LocationsService from '../services/LocationsService.js'
 export default {
   name: 'Home',
   components: {
    SelectFile
   },
   props: {
     msg: String,
     travvy: String,
     destination:String,
     dates: String,
     travellers: String,
     uploadDocs: String,
     uploadFiles: String,
     nextDestination: String,
     Toronto: String,
     newYorkCity: String,
     rome: String,
     rioDeJaneiro: String
   },

   data(){
     return{
       city: '',
       groupSize: '',
       startDate: '',
       endDate: '',
       errors:'',
       file: null

     }
   },

  methods: {
    // This sends a request, when the search button, is clicked to recommend to retrieve recommended attractions based on location and reroutes to the attractions list page
    async navigateTo(route) {            
      try {
        const response = await AttractionsService.recommend({"city": this.city, "groupSize": this.groupSize, "startDate": this.startDate, "endDate": this.endDate, "user":this.$store.state.userEmail})
        
        if (response && this.checkForm(response)===true){
          //saves users city in the store
          this.$store.dispatch('setCity', this.city)
          // Saves response from recommend to the global variable in the store
          this.$store.dispatch('setRecommendedAttractions', response.data)
          if(this.$store.state.recommendedAttractions.length > 0){
            //call covid19 API based on country
            const covidInfo = await CovidService.getCovidInfo({"country":this.$store.state.recommendedAttractions[0].country})
            this.$store.dispatch('setCovidInfo', covidInfo.data)   
          }
          this.$router.push(route)
        }else{
          //if the login is not valid, do nothing and tell the user it was wrong
          alert("Something went wrong...")
        }


      } catch (error) {
         console.log(error)
      }
    },
    
    checkForm: function(x){
              // an array with the current errors and what will be returned to the user
              this.errors = [];
              // if a city is not entered, the site will tell the user a city is required
              if(!this.city){
                this.errors.push("City");
              }
              // if a start date is not entered, the site will tell the user a start date is required
              if (!this.startDate){
                this.errors.push("Start Date");
              }
              // if a group size is not entered, the site will tell the user a group size is required
              if (!this.groupSize){
                this.errors.push("Group size");
              }
              if(!this.endDate){
                this.errors.push("End Date");
              }
              // if there are no errors, the method will return ture
              if(!this.errors.length){
                 return true;
              } 
               // this will prevent the form from submitting if there are errors in the user input 
               x.preventDefault();
    },

    async nextDest(destination) {
      //if the nextDestination button is selected, populate the drop down value with the city
      let element = document.getElementById("Destination");
      element.value = destination;
    },
    //This method gets all the locations (id,city,country) from the Location table
    async displayLocations() {
      const response = await LocationsService.getlocation()
      console.log(response)
    }

  }

}

 </script>

 <!-- Add "scoped" attribute to limit CSS to this component only -->
 <!-- scoped defines how different classes should appear on the webpage -->
 
 <style scoped>
.travvy{
  background-color: #B8D1FF;
  border: none;
  color: #FF5F00;
  padding: 10px 10px;
  text-align: left;
  text-decoration: none;
  display: inline-block;
  font-size: 40px;
  border-radius: 12px;
}
.error{
  color: red;
}
.profile{
  background-color: #FF5F00;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 12px;
}
.destination{
  background-color: #C7EEA9;
  border-radius: 12px;
  width: 200px;
  height: 25px;
}
.input {
  height:40px;
  width: 200px;
  font-size:14pt;
  padding: 2px 2px;

}

.dates{
  background-color: #C7EEA9;
  border-radius: 12px;
  width: 200px;
  height: 25px;
}
.travellers{
  background-color: #C7EEA9;
  border-radius: 12px;
  width: 200px;
  height: 18px;
}

.search {
  display: inline-block;
  border-radius: 4px;
  background-color: #4CAF50;
  border: none;
  color: #FFFFFF;
  text-align: center;
  font-size: 22px;
  padding: 12px 22px;
  width: 150px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
}

.profile {
  display: inline-block;
  border-radius: 4px;
  background-color: #FF5F00;
  border: none;
  color: #FFFFFF;
  text-align: center;
  font-size: 16px;
  padding: 12px 22px;
  width: 150px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
}

.profile:hover {
  background-color: #ed7485;
}

.search span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.search span:after {
  content: '\00bb';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.search:hover span {
  padding-right: 25px;
}

.search:hover span:after {
  opacity: 1;
  right: 0;
}
.cityimage{
  border-radius: 8px;
  border: 2px solid #ddd;
  padding: 0px;
  width: 80%;
}

.cityimage:hover{
  background-color: #ed7485;
}

.selectFilesold{
  background-color: #f40338;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  border-radius: 12px;
}

.selectFiles:hover {
  background-color: #ed7485;
}
.nextDestinationold{
  background-color: #5745e4;
  border: none;
  color: white;
  padding: 32px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 24px;
}
.nextDestination{
  display: inline-block;
  border-radius: 4px;
  background-color: #FF5F00;
  border: none;
  color: #FFFFFF;
  text-align: center;
  font-size: 16px;
  padding: 12px 22px;
  width: 150px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
}

.nextDestination:hover {
  background-color: #ed7485;
}
 h3 {
   margin: 40px 0 0;
 }
 ul {
   list-style-type: none;
   padding: 0;
 }
 li {
   display: inline-block;
   margin: 0 10px;
 }
 a {
   color: #42b983;
 }

 .container {
  padding: 20px 10px;
  margin: 0 100px;
}
 </style>
