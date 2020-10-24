<template>
  <div>
    <!-- Button to go to go back to the AttractionsList page --> 
    <router-link to="/AttractionList" tag="button" class="back"><span>Back</span></router-link>

    <h1>CN Tower </h1>
    <img src="../images/toronto.jpg" alt="Picture of Toronto"/>
    <br>
    <h1>Description</h1>
    <p>The CN Tower is a 553.3 m-high concrete communications and observation tower located in Downtown Toronto, Ontario, Canada.</p>
    <h3>Address:</h3>
    <h3>Email:</h3>
    <h3>Phone Number:</h3>
    <h3>Ticket Pricing:</h3>
    <h3>Maximum Group Size:</h3>
    <h3>Are masks required:</h3>
    <h3>COVID-19 Safety Measures:</h3>
    <br>
  </div>
</template>

<script>

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
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

.back {
  display: inline-block;
  border-radius: 4px;
  background-color: #FEC195;
  border: none;
  color: #FFFFFF;
  text-align: center;
  font-size: 22px;
  padding: 12px 22px;
  width: 150px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
  margin-left: -1690px;
  background: linear-gradient(
      to bottom,
        rgba(255,95,0) 8%,
        rgba(254,193,149) 56%,
        rgba(240,228,216) 82%,
        rgba(255,242,225) 100%)
}
.back span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.back span:after {
  content: '\00ab';
  position: absolute;
  opacity: 0;
  top: 0;
  left: -20px;
  transition: 0.5s;
}
.back:hover span {
  padding-left: 25px;
}

.back:hover span:after {
  opacity: 1;
  left: 0;
}

</style>
