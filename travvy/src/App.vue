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
</style>
