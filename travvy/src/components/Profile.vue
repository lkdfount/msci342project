<template>  
  <div class="Profile">
     <div class="container">
        <h2> Hello {{  getUser().Name }}{{ this.$store.state.name}},</h2>
        <h2> Here is your profile information: </h2>
        <p>Please fill in all fields with updated information before updating user profile</p>
        <br>
        <label><strong>Email: </strong></label>
        <input type="text" class="info" v-model="email" :placeholder="[[ this.$store.state.userEmail ]]">
        <br>
        <br>
        <label><strong>Gender: </strong></label>
        <input type="text" select class="info" v-model="gender" :placeholder="[[ this.$store.state.gender ]]">
        <br>
        <br>
        <label><strong>Age: </strong></label>
        <input type="text" class="info" v-model="age" :placeholder="[[ this.$store.state.age ]]"> 
        <br>
        <br>
        <label><strong>Preferred Activity Type: </strong></label>
        <input type="text" class="info" v-model="preferred_activity_type" :placeholder="[[ this.$store.state.activity ]]"> 
        <br>
        <br>
        <label><strong>Instagram Username: </strong></label>
        <input type="text" class="info" v-model="instagram_username" :placeholder="[[ this.$store.state.instagram ]]"> 
        <br>
        <br>

        <button class="button" @click="updateUserProfile()"><span>Update Profile</span></button>
        <br>
        <br>
        
        <button class="button" @click="signout"><span>Sign Out</span></button>
        <br>
        <br>
        <!-- Button to go to the home page --> 
        <router-link to="/Home" tag="button" class="back" style="float: left;"><span>Return Home</span></router-link>
        <br>
        <br>
        <button class="button"><span><a class="documents" href="https://firebasestorage.googleapis.com/v0/b/msci342project.appspot.com/o/test-ticket.png?alt=media&token=d730e012-57ca-4dd4-a870-a18002fbacbf" target="_blank">View Travel Documents</a></span></button>
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
        gender: '',
        age: '',
        preferred_activity_type: '',
        instagram_username: '',
        error: null
      }
    }, 
    methods:{
      //if a user wants to sign out
      async signout(){
        //remove their email from the store
        this.$store.dispatch('setUserEmail', null)
        alert("Sign out successful")
        this.$router.push("/")
      },
      async getUser() {
        const user = await AuthenticationService.getUser({
            "email": this.$store.state.userEmail
          })
        this.$store.dispatch('setAge', user.Age)
        this.$store.dispatch('setGender', user.Gender)
        this.$store.dispatch('setInstagram', user.Instagram_Username)
        this.$store.dispatch('setActivity', user.Preferred_Activity_Type)
        this.$store.dispatch('setName', user.Name)

      },
      async updateUserProfile(){

      try {
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

        if(!this.email){
          this.email = this.$store.state.userEmail
        }
        if(!this.age){
          this.age = this.$store.state.age
        }
        if(!this.gender){
          this.gender = this.$store.state.gender
        }
        if(!this.instagram_username){
          this.instagram_username = this.$store.state.instagram
        }
        if(!this.preferred_activity_type){
          this.preferred_activity_type = this.$store.state.activity
        }

        const response = await AuthenticationService.onboarding({
          "email": this.email,
          "age": this.age,
          "gender": this.gender,
          "instagram_username": this.instagram_username,
          "preferred_activity_type": this.preferred_activity_type,
          "activity_id": this.activity_id,
          })
        console.log(response);
        if (response===true){
          alert("You have successfully updated your profile settings!")
          this.$router.push("Home")
        } else {
        //if the login is not valid, do nothing and tell the user it was wrong
          alert("The sign up is not valid. If you have no errors to correct - try a different email address as the one you used may already be in use.")
        }



      } catch (error) {
        console.log(error)
        }
    },





    }
  }
</script>


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
  width: 200px;
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
  padding: 40px 0px;
  margin: 0 600px;
}

label {
  width: 200px;
  display: inline-block;
  text-align: left;
}

.documents {
  color: #FFFFFF;
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

.back{
  background-color: #FF5F00; 
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 22px;
  border-radius: 4px;
  position: absolute;
  top:310px;
  left: 640px;
}

.back span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.back span:after {
  content: '\00ab';
  position: absolute;
  opacity: 0;
  top: 0;
  left: -20px;
  transition: 0.5s;
}
.back:hover span {
  padding-left: 25px;
}

.back:hover span:after {
  opacity: 1;
  left: 0;
}

</style>
