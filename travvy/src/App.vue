<template>
  <div id="app">
    <div id="nav">
    <!-- Have the logo appear on each page --> 
    <!-- Have the logo act as a button to take users back to the landing page --> 
      <router-link to="/">
        <img src="./images/JPEGLogo.jpg" alt="Logo" class="navbarimage"/>

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

.navbarimage {
  max-height: 200px;
  height: 70%;
  width: auto;
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
border-radius: 10px; 
}
</style>
