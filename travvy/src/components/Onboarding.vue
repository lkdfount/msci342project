<template>  
  <div class="Onboarding">
     <div class="container">
    
    <!-- Onboarding fields that the user must fill in in order to get personalized recommendations --> 
    <h1>🎉 Welcome to Travvy, we'd love to learn more about you! 🎉</h1>
    <h3>Please fill in the following information in order to get a custom travel experience.</h3>
    <br>
    <label>Please input your email here: </label>
    <input type="text" class="info" v-model="email">
    <br>
    <br>
    <br>
    <div class= "dropwdown">
    <label>Please select the gender you identify as: </label>
    <select class="" v-model="gender">
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
    <input type="text" class="info" v-model="age" > 
    <br>
    <br>
    <br>
   <!--  <label>Please select the type of activity you enjoy most: </label>
    <br>
    <br>
    <button class="nextActivity">Family</button>   <button class="nextActivity">Historical</button>   <button class="nextActivity">Active</button>  <button class="nextActivity">Nature</button>  <button class="nextActivity"> Entertainment</button> <button class="nextActivity">Food</button> 
    <br>
    <br>
    <br> --> 
    <div class= "dropwdown">
    <label>Please select the type of activity you enjoy most: </label>
    <select class="" v-model="preferred_activity_type">
        <option></option>
        <option>Family</option>
        <option>Historical</option>
        <option>Active</option>
        <option>Nature</option>
        <option>Entertainment</option>
        <option>Food</option>
    </select>
     </div>
    <br>
    <br>
    <label>What is your dream vacation spot?: </label>
    <input type="text" class="info" > 
    <br>
    <br>
    <br>
    <label>Please input your budget: </label>
    <input type="text" class="info">
    <br>
    <br>
    <br>
    <label>Please include your Instagram handle: </label>
    <input type="text" class="info" v-model="instagram_username"> 
    <br>
    <br>
    <!-- Button to go to the Home page --> 
    <!--<router-link to="/Home" tag="button" class="button" @click='onboarding'><span>Get Started!</span></router-link> -->
    <button class="button" @click="onboarding(); navigateTo({name:'Home'});"><span>Start!</span></button>

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
  
  data() {
    return {
                email: '',
                age: '',
                gender: '',
                instagram_username: '',
                preferred_activity_type: '',
                error: null,
            }

  },
  methods:{
    async onboarding(){
      console.log(this.email)
      console.log(this.age)
      console.log(this.gender)
      console.log(this.instagram_username)
      console.log(this.preferred_activity_type)

      try {
        const response = await AuthenticationService.onboarding({
          "email": this.email,
          "age": this.age,
          "gender": this.gender,
          "instagram_username": this.instagram_username,
          "preferred_activity_type": this.preferred_activity_type,

          })
        console.log(response);
      } catch (error) {
        console.log(error)
        }
    },

      async navigateTo(route) {

            try {
              this.$router.push(route)
            } catch (error) {
               console.log(error)
            }
            }
   

  }
  


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.Onboarding {
  padding-bottom: 150px; 
}

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
