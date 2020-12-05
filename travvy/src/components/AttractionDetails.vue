<template>
  <div>
    <div class="container">
    
      <!-- Button to go to go back to the AttractionsList page -->
      
      <button class="change" style="float:left;" @click="$router.go(-1)">Back</button>
    
      <br>
      <br>
      <h1>{{$store.state.recommendedAttractions[id].attraction_name}} </h1>
      <hr size="3" width="90%" color="#A9A9A9"> 
      <br>
      <img src="../images/toronto.jpg" alt="Picture of Toronto" width=60%/>
      <br>
      <p>The CN Tower is a 553.3 m-high concrete communications and observation tower located in Downtown Toronto, Ontario, Canada.</p>
      <hr size="3" width="90%" color="#A9A9A9"> 
      <h4>Address: <span>{{$store.state.recommendedAttractions[id].street_address}}</span> </h4>
      <h4>Email: {{$store.state.recommendedAttractions[id].email_address}}</h4>
      <h4>Phone Number: {{$store.state.recommendedAttractions[id].phone_number}}</h4>
      <h4>Ticket Pricing: {{$store.state.recommendedAttractions[id].ticket_price}}</h4>
      <h4>Maximum Group Size: {{$store.state.recommendedAttractions[id].max_number_guest}}</h4>
      <h4>Are masks required: {{$store.state.recommendedAttractions[id].mask_required}}</h4>
      <h4>COVID-19 Safety Measures: {{$store.state.recommendedAttractions[id].covid_safety_measures}}</h4>
      <br>
    </div>
  </div>
</template>

<script>


export default {

  name: 'AttractionDetails',
  data() {
    return {
      id: 0,
    }
  },
  created() {
    this.id = this.$route.params.id;
  },


  methods: {
      async navigateTo(route) {
          this.$router.push(route)
      }
    }
 
  }

  
</script>

<style scoped>
.travvy{
  background-color: #B8D1FF;
  border: none;
  color: #FF5F00;
  padding: 50px 50px;
  text-align: left;
  text-decoration: none;
  display: inline-block;
  font-size: 40px;
  border-radius: 150px;
}
.container {
  padding: 20px 10px;
  margin: 0 100px;
}

h1{
  font-weight:bold
}

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

.change {
  background-color: #FF5F00; 
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 22px;
  border-radius: 10px;
}

.change span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.change span:after {
  content: '\00ab';
  position: absolute;
  opacity: 0;
  top: 0;
  left: -20px;
  transition: 0.5s;
}
.change:hover span {
  padding-left: 25px;
}

.change:hover span:after {
  opacity: 1;
  left: 0;
}
.change:hover {
  background-color: #ed7485;
  cursor: pointer
}

</style>
