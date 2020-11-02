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
        <button v-on:click=registerUser submitForm="registerUser" hasName=true>Register</button>
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

</style>

 <!-- await this.$store.dispatch -->