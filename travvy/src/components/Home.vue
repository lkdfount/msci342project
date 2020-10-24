<!-- the purpose of this webpage it to allow users to input their trip information to search for attractions based on data and profile --> 
<!-- template allows for HTML syntax to be used to connect to data from vue -->
<!-- template outlines the web page and calls on instance data from the script -->
<template>
  <div class="Home">
    <!-- Profile button that will lead to the users profile page --> 
    <input type="button" value="Profile" v-on:click="reverseMessage" style="float: right;" class="profile"> 
    <br>
    <br>
    <br>
    <br>
    <!-- data binding destination, corresponding data object below -->
    <label for="Destination">Select a Destination:</label>
    <!-- select destinations to find attractions in --> 
    <select v-model="city" id="Destination" name="Destination" class="destination">
      <option value="Toronto">Toronto, Canada</option>
      <option value="Paris">Paris, France</option>
      <option value="London">London, England</option>
      <option value="New York City">New York City, United States</option>
      <option value="Rio de Janeiro">Rio de Janeiro, Brazil</option>
      <option value="Rome">Rome, Italy</option>

    </select>
    <!-- data binding dates, corresponding data object below -->
    <label for="Dates">     Select Departure Date:</label>
    <!-- user selects dates they are travelling in --> 
      <input type="Date" class="dates"> 
    <label for="Dates">     Select Return Date:</label>
      <input type="Date" class="dates"> 


    <!-- data binding travellers, corresponding data object below -->
    <label for="Travellers">     Number of Travellers:</label>
    <!-- user selects number of travellers in their party -->
    <input type="text" class="travellers">
    <br>  
    <br>       
    <center><button v-on:click="navigateTo({name:'AttractionsList'})" class="search"><span>Search </span></button></center>

        
    <!-- the search will use the parameters from above to search through the database and return results --> 
    <br><br>
    
    <p>{{ uploadDocs }}</p>
    <!-- data binding documents, corresponding data object below -->
    <b>Upload Travel Documents Below:</b>
    <br>  
    <p>{{ uploadFiles}}</p>
    <!-- data binding upload files message, corresponding data object below -->
    <p>Drop files here or <button class="selectFiles">Select Files</button> </p>
    <!-- allows users to upload travel documents from computer --> 
    
    <br><br>
    <p> {{ nextDestination }}</p>
    <!-- data binding destination suggestions corresponding data object below -->
    <h1>Find your next travel destination</h1>
    
    <button v-on:click="reverseMessage" class="nextDestination">Toronto</button>   <button v-on:click="reverseMessage" class="nextDestination">New York City</button>   <button v-on:click="reverseMessage" class="nextDestination">Rome</button>   <button v-on:click="reverseMessage" class="nextDestination"> Rio De Janeiro</button>
    <!-- gives users the options to explore attractions at other destinations --> 
   </div>

 </template>

<!-- this script hosts components and assigns each prop from the template above a specific type of value --> 
<!-- methods are referenced above in template, and explains the behaviour of an object --> 
 <script>
 import AttractionsService from '../services/AttractionsService.js'
 export default {
   name: 'Home',
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
       error:null 
     }
   },
   

  methods: {
    async navigateTo(route) {
  
      try {
        const response = await AttractionsService.recommend({"city": this.city})
        this.$store.dispatch('setRecommendedAttractions', response.data)
        this.$router.push(route)
      } catch (error) {
         console.log(error)
      }
        },

    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
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
}
.dates{
  background-color: #C7EEA9;
  border-radius: 12px;
}
.travellers{
  background-color: #C7EEA9;
  border-radius: 12px;
}

.search {
  display: inline-block;
  border-radius: 4px;
  background-color: #FF5F00;
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

.selectFiles{
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
.nextDestination{
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

.nextDestination:hover {
  background-color: #9290df;
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
 </style>

