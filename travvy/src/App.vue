<template>
  <div id="app">
    <div id="nav">
    <!-- Have the logo appear on each page --> 
    <!-- Have the logo act as a button to take users back to the landing page --> 
      <router-link to="/">
        <img src="./images/JPEGLogo.jpg" alt="Logo" style="width:500px;height:200px;"/>
      </router-link>
    </div>
    <router-view/>
  </div>


</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

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
