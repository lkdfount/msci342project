<template>  
  <div class="Onboarding">
     <div class="container">
    <!-- Onboarding fields that the user must fill in in order to get personalized recommendations --> 
    <h2>Welcome to Travvy, we'd love to learn more about you!</h2>
    <p>Please fill in the following information in order to get a custom travel experience.</p>
    <label>Please select the sex you identify with: </label>
    <br>
    <br>
    <div class="box">
    <select>
        <option></option>
        <option>Male</option>
        <option>Female</option>
        <option>Prefer not to say</option> 
    </select>
    </div>
    <br>
    <br>
    <label>Please input your age: </label>
    <input type="text" > 
    <br>
    <br>
    <label>Please select the type of activity you enjoy most: </label>
    <br>
    <br>
    <button class="nextActivity">Family</button>   <button class="nextActivity">Historical</button>   <button class="nextActivity">Active</button>  <button class="nextActivity">Nature</button>  <button class="nextActivity"> Entertainment</button> <button class="nextActivity">Food</button> 
    <br>
    <br>
    <label>What is your dream vacation spot?: </label>
    <input type="text"> 
    <br>
    <br>
    <label>Please input your budget: </label>
    <input type="text">
    <br>
    <br>
    <label>Please include your Instagram handle!: </label>
    <input type="text"> 
    <br>
    <br>
    <!-- Button to go to the Home page --> 
    <router-link to="/Home" tag="button" class="button"><span>Get Started!</span></router-link> 
    <br>
    
    </div>
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
  background-color: #FF5F00; 
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 12px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2)
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

.nextActivity{
  background-color: #89C4A0;
  border: none;
  color: white;
  padding: 15px 40px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 24px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2)
}

.nextActivity:hover {
  background-color: #C7EEA9;
}

.container {
  /* Add shadows to create the "card" effect */
  background-color: #F0E4D8;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  margin: 0 400px;
  transition: 0.3s;
}

/* On mouse-over, add a deeper shadow */
.container:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

/* Add some padding inside the card container */
.container {
  padding: 22px 10px;
}

.container {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 15px; /* 15px rounded corners */
}

.box {
position: absolute;
padding: 0px 445px;

}

.box select {
background-color: #89C4A0;
color: white;
padding: 4px;
width: 200px;
height: 26px;
border: none;
font-size: 14px;
box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
outline: none;
}

.box:before{
    content: 'f063';
}


</style>
