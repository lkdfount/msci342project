<template>
  <div>
    <!-- Button to go to go back to the AttractionsList page -->
    <router-link to="/AttractionList" tag="button" class="back"><span>Back</span></router-link>

    <h1>{{$store.state.recommendedAttractions[id].attraction_name}} </h1>
    <img src="../images/toronto.jpg" alt="Picture of Toronto"/>
    <br>
    <h1>Description</h1>
    <p>The CN Tower is a 553.3 m-high concrete communications and observation tower located in Downtown Toronto, Ontario, Canada.</p>
    <h2>Address: <span>{{$store.state.recommendedAttractions[id].street_address}}</span> </h2>
    <h3>Email: {{$store.state.recommendedAttractions[id].email_address}}</h3>
    <h3>Phone Number: {{$store.state.recommendedAttractions[id].phone_number}}</h3>
    <h3>Ticket Pricing: {{$store.state.recommendedAttractions[id].ticket_price}}</h3>
    <h3>Maximum Group Size: {{$store.state.recommendedAttractions[id].max_number_guest}}</h3>
    <h3>Are masks required: {{$store.state.recommendedAttractions[id].mask_required}}</h3>
    <h3>COVID-19 Safety Measures: {{$store.state.recommendedAttractions[id].covid_safety_measures}}</h3>
    <br>
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
.span {
    font-size: 15px;

}

</style>
