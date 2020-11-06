
<template>  

  <div class="LogIn">
        <h2>Log In to TRAVVY</h2>
        <form>
        <!-- this form takes the sign up input from users - binds to the user form --> 
          <label>Email: </label>
          <input type="text" v-bind="UserForm"/> 
          <br>
          <br>
          <label>Password: </label>
          <input type="password" v-bind="UserForm"/> 
        </form>
        <br>
        <br>
        <button class="search"><span>Log In</span></button>
    </div>
</template>

<script>
export default {
  name: 'LogIn',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

 </style>
