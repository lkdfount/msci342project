<template>  
  <div class="Onboarding">
     <div class="container">
    
    <!-- Onboarding fields that the user must fill in in order to get personalized recommendations --> 
    <h2>🎉 Welcome to Travvy, we'd love to learn more about you! 🎉</h2>
    <p>Please fill in the following information in order to get a custom travel experience.</p>
    <label>Please select the gender you identify as: </label>
    <br>
    <br>
    <div class= "">
    <select class="info">
        <option></option>
        <option>Male</option>
        <option>Female</option>
        <option>Genderqueer/non-binary</option>
        <option>Prefer not to disclose</option>
    </select>
    </div>
    <br>
    <br>
    <label>Please input your age: </label>
    <input type="text" class="info" > 
    <br>
    <br>
    <label>Please select the type of activity you enjoy most: </label>
    <br>
    <br>
    <button class="nextActivity">Family</button>   <button class="nextActivity">Historical</button>   <button class="nextActivity">Active</button>  <button class="nextActivity">Nature</button>  <button class="nextActivity"> Entertainment</button> <button class="nextActivity">Food</button> 
    <br>
    <br>
    <label>What is your dream vacation spot?: </label>
    <input type="text" class="info"> 
    <br>
    <br>
    <label>Please input your budget: </label>
    <input type="text" class="info">
    <br>
    <br>
    <label>Please include your Instagram handle: </label>
    <input type="text" class="info"> 
    <br>
    <br>
    <!-- Button to go to the Home page --> 
    <router-link to="/Home" tag="button" class="button" @click='onboarding'><span>Get Started!</span></router-link> 
    <br>

    </div>
  </div>

</template>

<script>

import AuthenticationService from '../services/AuthenticationService.js'

export default {
  name: 'Onboarding',
  props: {
    msg: String
  }, 
  
  methods:{
    async onboarding123(){
      console.log(this.name)
      console.log(this.email)
      console.log(this.password)
                
      try {
        const response = await AuthenticationService.signup({
          "email": this.email,
          "name": this.name,
          "password": this.password,
          })
        console.log(response);
      } catch (error) {
        console.log(error)
        }
    }
            
  }
  


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.nextActivity{
  background-color: #89C4A0;
  border: none;
  color: white;
  padding: 15px 40px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 24px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2)
}

.nextActivity:hover {
  background-color: #C7EEA9;
}

.info{
  background-color: #89C4A0;
  color: white;
  padding: 4px;
  width: 200px;
  height: 18px;
  border: none;
  font-size: 14px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
  outline: none;
  border-radius: 10px; 

}

.button {
  background-color: #FF5F00; /* Orange */
  border: none;
  color: white;
  padding: 14px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  border-radius: 18px;
}

.button span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.button span:after {
  content: '\00bb';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -25px;
  transition: 0.5s;
}

.button:hover span {
  padding-right: 15px;
}

.button:hover span:after {
  opacity: 1;
  right: 0;

}

</style>
