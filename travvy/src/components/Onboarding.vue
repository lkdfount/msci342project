<template>  
  <div class="Onboarding">
     <div class="container">
    
    <!-- Onboarding fields that the user must fill in in order to get personalized recommendations --> 
    <h1>🎉 Welcome to Travvy, we'd love to learn more about you! 🎉</h1>
    
  <form>
    <h3>Please fill in the following information in order to get a custom travel experience.</h3>
    <br>
    <p v-if="errors.length">
    <b class="red">Please correct the following error(s):</b>
    <!-- this will bind all the errors together after the form is completed and return them to the user-->
      <u1 class="red">
        <li v-bind="error in errors"> {{ errors }}</li>
      </u1>
    </p>
    <br>
    <label><strong>Please verify your email here (required): </strong></label>
    <input type="text" class="info" v-model="email" placeholder="Input Email here" required>
    <br>
    <br>
    <br>

    <div class= "dropwdown">
    <label><strong>Please select the gender you identify as (required): </strong></label>
    <select class="" v-model="gender" >
        <option></option>
        <option>Male</option>
        <option>Female</option>
        <option>Genderqueer/non-binary</option>
        <option>Prefer not to disclose</option>
    </select>
   
    </div>
    <br>
    <br>
    <label><strong>Please input your age (required): </strong></label>
    <input type="text" class="info" v-model="age" placeholder="Input Age here"> 
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
    <label><strong>Please select your preferred activity type (required) </strong></label>
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
    <label><strong>Please enter your dream vacation spot: </strong></label>
    <input type="text" class="info" placeholder="Input Dream Vacation here"> 
    <br>
    <br>
    <br>
    <label><strong>Please input your budget: </strong></label>
    <input type="text" class="info" placeholder="Input Budget here">
    <br>
    <br>
    <br>
    <label><strong>Please include your Instagram handle: </strong></label>
    <input type="text" class="info" v-model="instagram_username" placeholder="Input Instagram Handle here"> 
    <br>
    <br>
  </form>
  <div v-html="error" />

    <!-- Button to go to the Home page --> 
    <button class="button" @click=" onboarding(), checkForm()"><span><strong>Start!</strong></span></button>

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
                errors: '',
                error: null
            }

  },
  methods:{
    async onboarding(){
      console.log(this.email)
      console.log(this.age)
      console.log(this.gender)
      console.log(this.instagram_username)
      console.log(this.preferred_activity_type)
      console.log(this.errors)
      // sets the activity id based on the activity type
      // recommends attractions based on activity id
         if(this.preferred_activity_type == "Active"){
            this.activity_id = 111
        } else if (this.preferred_activity_type == "Food"){
            this.activity_id = 112
        }else if (this.preferred_activity_type == "Entertainment"){
           this.activity_id = 113
        } else if (this.preferred_activity_type == "Historical"){
            this.activity_id = 114
        } else if (this.preferred_activity_type == "Family"){
            this.activity_id = 115
        } else if (this.preferred_activity_type == "Nature"){
            this.activity_id = 116
        }

      try {
        const response = await AuthenticationService.onboarding({
          "email": this.email,
          "age": this.age,
          "gender": this.gender,
          "instagram_username": this.instagram_username,
          "preferred_activity_type": this.preferred_activity_type,
          "activity_id": this.activity_id,
          })
        console.log(response);
        if (response && this.checkForm(response)===true){
          this.$router.push("Home")
        } else {
        //if the login is not valid, do nothing and tell the user it was wrong
          alert("The sign up is not valid. If you have no errors to correct - try a different email address as the one you used may already be in use.")
        }


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
      },

      checkForm: function(x){
              // an array with the current errors and what will be returned to the user
              this.errors = [];

                // if an email is not entered, the site will tell the user a email is required
                if(!this.email){
                  this.errors.push("Email is a required field");
                // if an email is entered, it will be checked using the function validEmail to ensure it is the proper format
                } else if(!this.validEmail(this.email)){
                  this.errors.push("A valid email address is required");
                } 
                // if a gender is not selected, the site will instruct the user that gender field is required
                if(!this.gender){
                  this.errors.push("Gender is a required field");
                }
                // if an age is not inputted, the site will instruct the user that age field is required
                if(!this.age){
                  this.errors.push("Age is a required required field");
                } else if(this.age < 13) {
                  // the user must be over 13 to sign up for an account
                  this.errors.push("The minimum age to create an account is 13 years of age");
                }
                if(!this.preferred_activity_type){
                  this.preferred_activity_type.push("Preferred Activity Type is a required field");
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
  background-color: #F4F4F9;
  color: black;
  padding: 4px;
  width: 200px;
  height: 25px;
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
  font-family: Arial, Helvetica, sans-serif;
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

.container {
  padding: 20px 10px;
  margin: 0 400px;
}

.red {
  color: red;

}

label {
width:400px;
display: inline-block;
text-align: left;





}

</style>
