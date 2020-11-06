<template>
    <div class="SignUp">
        <h2>Sign Up for TRAVVY</h2>
        <form>
        <!-- this form takes the sign up input from users - binds to the user form --> 
            <label>Full Name: </label>
            <input type="text" v-model="name" placeholder="name"/> 
            <br>
            <br>
            <label>Email: </label>
            <input type="text" v-model="email" placeholder="email"/>
            <br>
            <br> 
            <label>Password: </label>
            <input type="password"  v-model="password" placeholder="password"/> 

        </form>
        <div class="error" v-html="error" />
        <br>
        <br>
        <!-- declares the component of user form --> 
      
        <!-- will submit the form to register the user --> 
        <button class="search" @click='signup' >Register</button>
    </div>
</template>

<script>

    import Authentication from '@/services/Authentication'

    export default {
        data(){
            return {
                name: '',
                email: '',
                password: '',
                error: null
            }
        }, 
        methods:{
            async signup(){
                console.log(this.name)
                const response = await Authentication.signup({
                    name: this.name,
                    email: this.email,
                    password: this.password
                })
                console.log(response.data);
            }
        }
    }
       // name: "SignUp",
       // components: {
          //  UserForm
       // },
       
       // methods: {
            // this menthod will register the user with the info provided above
 
         //   async registerUser(registrationInfo){
            //    UserForm.push(this.user)
            //    this.user.name = '',
            //    this.user.email = '',
            //    this.user.password = '',
            
           //     let user = ('registerUser', registrationInfo);
           //     if(user.error){
           //         alert(user.error)
            //    } else {
            //        alert('Welcome to TRAVVY ' + user.name);
             //   }
            //}
       // },
     



</script>
<style scoped>

</style>