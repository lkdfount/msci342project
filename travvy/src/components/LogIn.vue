
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
