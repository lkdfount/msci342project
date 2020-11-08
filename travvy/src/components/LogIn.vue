
<template>  
  <div class="LogIn">
        <h2>Log In to TRAVVY</h2>
        <form>
        <!-- this form takes the sign up input from users - binds to the user form --> 
          <label>Email: </label>
          <input type="text" v-model="email" id="email"/> 
          <br>
          <br>
          <label>Password: </label>
          <input type="password" v-model="password" id="password"/> 
          <br>
          <!-- 
            this was causing a ton of problems
          <input type="checkbox" @click="showPassword">Show Password
          --> 
        </form>
        <br>
        <br>
        <button class="search" @click='login'>Log In</button>
        
    </div>
</template>

<script>
  //import from the AuthenticationService file
  import AuthenticationService from '../services/AuthenticationService.js'

  export default {
    data(){
      return {
        email: '',
        password: '',
        error: null
      }
    }, 
    methods:{
      //the login method, this is what runs when the log in button is pushed
      async login(){
        try {
          //call the login method from AuthenticationService
          //email and password are parameters
          const isLoggedIn = await AuthenticationService.login({
            "email": this.email,
            "password": this.password
          })
          console.log(isLoggedIn)
          //if the login is valid
          if (isLoggedIn){
            //store the user's email
            this.$store.dispatch('setUserEmail', this.email)
            //go to the home page
            this.$router.push("Home")
          }else{
            //if the login is not valid, do nothing and tell the user it was wrong
            alert("The log in information was incorrect, please try again")
          }
        } catch (error) {
            alert(error)
        }
      }
    }
  }
</script>

<!-- don't need style here, it can be found in  app.vue -->
<style>

</style>
