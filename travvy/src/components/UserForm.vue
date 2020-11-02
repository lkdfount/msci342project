<!-- this component validates that the inputted info can be classified as a user
this will allow information to be stored in the data base and used when logging into the system --> 
<template>
    <v-form v-model="valid">
    <!-- validates the users name, email and password along with formatting --> 
        <v-text-field v-model="user.name"
             label="Full Name"
             :rules="[required('name')]"
             v-if="hasName"/>
        <v-text-field v-model="user.email"
             label="Email"
             :rules="[required('email'),emailFormat()]"/>
        <v-text-field v-model="user.password"
            Label="Password"
            :rules="[required('password'), minLength('password',8)]"
            />
        <!-- still need to connect the database so when form is submitted the data is stored and can be accessed through this user info -->
        <v-btn click="submitForm">{{ buttonText }}</v-btn>
    </v-form>

</template>

<script>

    export default {
        data(){
            return{
                userInfo: {
                    email: '',
                    password:''

                },
           
            }
        },
        props: ["submitForm", "buttonText", "hasName"],
    }
</script>

<style>

</style>