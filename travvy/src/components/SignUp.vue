<template>
    <div class="SignUp">
      <div class="container">
        <h2>Sign Up for TRAVVY</h2>
        
        <br>
        <!-- this form takes the sign up input from users - binds to the user form -->
        <form>
        <!-- this paragraph will only appear if there are any errors added to the errors array in the script below --> 
        <p v-if="errors.length">
          <b>Please correct the following error(s):</b>
          <!-- this will bind all the errors together after the form is completed and return them to the user-->
          <u1 id="checkForm" class="red"> 
            <br>
            <li v-for="error in errors" :key="error"> {{ error }}</li>
            <!-- v-bind="error in errors"-->
          </u1>
        </p>
        <!-- the user input is taken here -->
            <label><strong> Name*: </strong></label><br><br>
            <input type="text" class="info" v-model="name" placeholder="Full Name" id="name" required/> 
            <br>
            <br>
            <label><strong> Email*: </strong></label><br><br>
            <input type="text" class="info" v-model="email" placeholder="Email" id="email" required/>
            <br>
            <br> 
            <label><strong> Password * min. 6 characters: </strong></label><br><br>
            <input type="password" class="info" v-model="password" placeholder="Password" id="password" required/>
            <br>

        </form>
        <p> * Required Field</p>
        <div v-html="error" />
        <br>
        <br>
        <router-link> </router-link>
        <!-- this button will trigger multiple classes below to run, allowing the user to sign up if the info is correct -->
        <button class="button" @click="signup(), checkForm()"><span>Continue</span></button>
    </div>
    </div>
</template>

<script>

    import AuthenticationService from '../services/AuthenticationService.js'

    export default {
        data(){
            return {
                email: '',
                name: '',
                password: '',
                errors: '',
            }
        }, 
        methods:{
    
            // this method takes in the user information and passes it to the authentication page 
            // ; checkForm(), navigateTo({name:'Onboarding'});
            async signup(){
                console.log(this.name)
                console.log(this.email)
                console.log(this.password)
                console.log(this.errors)
                
                
                try {
                  const response = await AuthenticationService.signup({
                    // this info inputted in the form is what is passed to the next page
                      "email": this.email,
                      "name": this.name,
                      "password": this.password,
                  })
                  console.log(response)
                  // this will add the user to the database and take them to the next page if the information is all inputted correctly
                  if (response && this.checkForm(response)===true){
                    //store the email in the store so they are logged in
                    this.$store.dispatch('setUserEmail', this.email)
                    this.$router.push("Onboarding")
                  }else{
                  //if the login is not valid, do nothing and tell the user it was wrong
                    alert("The sign up is not valid. If you have no errors to correct - try a different email address as the one you used may already be in use.")
                  }
            
              }catch (error) {
                    alert(error)
                   
                }
            }, 
            // this method checks for errors in the user input and will return the errors if any
            checkForm: function(x){
              // an array with the current errors and what will be returned to the user
              this.errors = [];

              // if a name is not entered, the site will tell the user a name is required
              if(!this.name){
                  this.errors.push("Name required");
                }
                // if a password is not entered, the site will tell the user a password is required 
                if (!this.password){
                  this.errors.push("Password required");
                // if a password is entered but not long enough, it will tell the user
                }else if(this.password.length<6){
                  this.errors.push("Password too short, minimum of 6 characters");

                }
                // if an email is not entered, the site will tell the user a email is required
                if(!this.email){
                  this.errors.push("Email required");
                // if an email is entered, it will be checked using the function validEmail to ensure it is the proper format
                } else if(!this.validEmail(this.email)){
                  this.errors.push("Valid email required");
                } 
                // if there are no errors, the method will return ture
                if(!this.errors.length){
                  return true;
                }
                
               // this will prevent the form from submitting if there are errors in the user input 
               x.preventDefault();
            

            },
            // this method will ensure the email is formatted properly
            validEmail: function(email){
              // a regular expression patttern used to search text
              var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
              // returns boolean to see if the pattern exists in the string
              return re.test(email);
            }
            
     }
 }


</script>
<style scoped>
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

.red {
  color: red;

}
</style>