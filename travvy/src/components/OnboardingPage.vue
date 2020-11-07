<template>  
  <div class="Onboarding">
    <h2>Welcome to Travvy, we'd love to learn more about you!</h2>
    <p>Please fill in the following information in order to get a custom travel experience.</p>
    <br>
    <label>Please select the type of activity you enjoy most: </label>
    <input type="text" v-model="activity" placeholder="activity"/> 
    <br>
    <br>
    <label>Where would your dream vacation be?: </label>
    <input type="text" v-model="activity"/> 
    <br>
    <br>
    <label>Please select the sex you identify with: </label>
    <select type="text" v-model="Sex"/> 
    <option value="Male">Male</option>
    <option value="Female">Female</option>
    <option value="Prefer not to say">Prefer not to say</option>
    <br>
    <br>
    <!-- Button to go to the Home page --> 
    <router-link to="/Home" tag="button" class="button"><span>Get Started!</span></router-link> 
    <br>

  </div>
</template>

<script>
export default {
  name: 'Onboarding',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.button {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 12px;
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
  max-width: 40%;
  max-height: 40%;

  height: auto;
}
</style>
