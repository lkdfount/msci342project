<template>
    <div class="SignUp">
        <h2>Sign Up for TRAVVY</h2>
        <form>
        <!-- this form takes the sign up input from users - binds to the user form --> 
            <label>Full Name:</label>
            <input type="text" v-bind="UserForm"/> 
            <label>Email:</label>
            <input type="text" v-bind="UserForm"/> 
            <label>Password:</label>
            <input type="text" v-bind="UserForm"/> 
        </form>
        <!-- declares the component of user form --> 
        <component :is="UserForm"/>
        <!-- will submit the form to register the user --> 
        <button class="search" v-on:click=registerUser submitForm="registerUser" hasName=true>Register</button>
    </div>
</template>

<script>

    import UserForm from '@/components/UserForm.vue';

    export default {
        name: "SignUp",
        components: {
            UserForm
        },
        methods: {
            // this menthod will register the user with the info provided above
            async registerUser(registrationInfo){
                let user = ('registerUser', registrationInfo);
                if(user.error){
                    alert(user.error)
                } else {
                    alert('Welcome to TRAVVY ' + user.name);
                }

            }
        },
     
    }
</script>

<style>
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

 <!-- await this.$store.dispatch -->