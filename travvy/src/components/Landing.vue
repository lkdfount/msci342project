
<template>  
  <div class="Landing">
    <v-container class="home-container">
    <img src="../images/map.jpg" alt="Picture of Map" class="landingimage" />
    <br>
    <br>
    <!-- Button to go to the log inpage --> 
    <router-link to="/LogIn" tag="button" class="button"><span>Log In</span></router-link>
    <br>
    <br>
    <!-- Button to go to the sign up page --> 
    <router-link to="/SignUp" tag="button" class="button"><span>Sign Up</span></router-link>
    <br>
    <br>

    <br>
    <br>
    <br>
    <br>
  </v-container>
  </div>
</template>

<script>
export default {
  name: 'Landing',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.button {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 14px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 18px;
  height: 50px;
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

img {
  max-width: 30%;
  max-height: 30%;

  height: auto;
}
</style>
