
<template>  
  <div class="LogIn">
    <div class="container">
        <h2>Log In</h2>
        <form>
        <!-- this form takes the sign up input from users - binds to the user form --> 
          <label><strong>Email*: </strong></label><br><br>
          <input type="text" class="info" v-model="email" id="email" required/> 
          <br>
          <br>
          <label><strong>Password*: </strong></label><br><br>
          <input type="password" class="info" v-model="password" id="password" required/> 
          <br>

          <!-- 
            this was causing a ton of problems
          <input type="checkbox" @click="showPassword">Show Password
          --> 
        </form>
        <p >*Required Field</p>
        <br>
        <br>
        <button class="button" @click="login"><span>Log In</span></button>
    </div> 
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
          //create a regex function for valid email
          var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          //test the email
          const validEmail= re.test(this.email);
          //test if the email is entered and valid
          if(this.email=="" || validEmail==false){
            alert("Please enter a valid email")
          }
          //test if the password is entered
          else if(this.password==""){
            alert("Please enter a password, password is a required field")
          }
          else{
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

.container {
  padding: 10px 10px;
  margin: 0 800px;
}
</style>
