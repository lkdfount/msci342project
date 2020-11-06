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
            <input type="text"  v-model="password" placeholder="password"/> 

        </form>
        <div v-html="error" />
        <br>
        <br>
        <!-- declares the component of user form --> 
      
        <!-- will submit the form to register the user --> 
        <button class="search" @click='signup' >Register</button>
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
                error: null
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
                console.log(response.data);
                } catch (error) {
                    console.log(error)
                }
            }
        }
    }



</script>
<style scoped>

</style>