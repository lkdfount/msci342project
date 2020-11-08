
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
        <button class="button" @click="login"><span>Log In</span></button>
        
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
      },
    }
  }
</script>

<!-- don't need style here, it can be found in  app.vue -->
<style>
.button {
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
  right: -20px;
  transition: 0.5s;
}

.button:hover span {
  padding-right: 25px;
}

.button:hover span:after {
  opacity: 1;
  right: 0;
}
</style>
