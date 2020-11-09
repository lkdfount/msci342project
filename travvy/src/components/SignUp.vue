<template>
    <div class="SignUp">
      <div class="container">
        <h2>Sign Up for TRAVVY</h2>
        <form>
        <!-- this form takes the sign up input from users - binds to the user form --> 
            <label>Full Name: </label>
            <input type="text" class="info" v-model="name" placeholder="Full Name" id="name" required/> 
            <br>
            <br>
            <label>Email: </label>
            <input type="text" class="info" v-model="email" placeholder="Email" id="email" required/>
            <br>
            <br> 
            <label>Password: </label>
            <input type="password" class="info" v-model="password" placeholder="Password" id="password" required/>
            <br>
            <!-- 
            this was causing a ton of problems
          <input type="checkbox" @click="showPassword">Show Password
          --> 
            <!--<button @click=”showPassword”>btnText</button>-->

        </form>
        <div v-html="error" />
        <br>
        <br>
        <!-- declares the component of user form --> 
      
        <!-- will submit the form to register the user --> 
        <!--<button class="button"  v-on:click="navigateTo({name:'Home'})"> <span></span></button>--> 
        <router-link> </router-link> 
        <button class="button" @click="signup(); navigateTo({name:'Onboarding'});"><span>Continue</span></button>
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
                error: null,
            }
        }, 
        methods:{
            async signup(){
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
  padding: 20px 10px;
  margin: 0 700px;
  
}

</style>