
<template>  
  <div class="Landing">
    <br>
    <br>
    <img src="../images/map.jpg" alt="Picture of Map"/>
    <br>
    <br>
    <router-link to="/Home" tag="button" class="button">Enter Site!</router-link>
    <br>
    <br>

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

.button:hover {
  background-color: #90EE90  ; /* Light Green */

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
