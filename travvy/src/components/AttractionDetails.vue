<template>
    <div class="container">
    
      <!-- Button to go to go back to the AttractionsList page -->
      
      <button class="change" style="float:left;" @click="$router.go(-1)">Back</button>
     <h1 style="float:center;">{{$store.state.recommendedAttractions[id].attraction_name}} </h1>
     <div v-if="$store.state.city == 'Toronto'">
        <img src="../images/toronto.jpg" alt="Picture of Toronto" class ="cityimage"/>
      </div>
      <div v-else-if="$store.state.city == 'Paris'">
        <img src="../images/paris.jpg" alt="Picture of Paris" class ="cityimage"/>
      </div>
      <div v-else-if="$store.state.city == 'London'">
        <img src="../images/london.jpg" alt="Picture of London" class ="cityimage" />
      </div>
      <div v-else-if="$store.state.city == 'New York City'">
        <img src="../images/newyorkcity.jpg" alt="Picture of New York City" class ="cityimage"/>
      </div>
      <div v-else-if="$store.state.city == 'Rio de Janeiro'">
        <img src="../images/rio.jpg" alt="Picture of Rio de Janeiro" class ="cityimage"/>
      </div>
      <div v-else-if="$store.state.city == 'Rome'">
        <img src="../images/rome.jpg" alt="Picture of Rome" class ="cityimage"/>
      </div>
      <div v-else="">
      </div>
    <br>
    <h1>Description</h1>
     <div v-if="$store.state.city == 'Toronto'">
        <p>The CN Tower is a 553.3 m-high concrete communications and observation tower located in Downtown Toronto, Ontario, Canada.</p>
      </div>
      <div v-else-if="$store.state.city == 'Paris'">
        <p>The Eiffel Tower is 1,063 feet (324 meters) tall, including the antenna at the top. Without the antenna, it is 984 feet (300 m).</p>
      </div>
      <div v-else-if="$store.state.city == 'London'">
        <p>Buckingham Palace is the Queen's official and main royal London home. It has been the official London residence of Britain's monarchy since 1837.</p>
      </div>
      <div v-else-if="$store.state.city == 'New York City'">
        <p>Central Park is home to more than 18,000 trees, including one of the country's largest and last remaining stands of American elms, along the Mall and Fifth Avenue.</p>
      </div>
      <div v-else-if="$store.state.city == 'Rio de Janeiro'">
        <p>Christ the Redeemer is the largest art deco statue in the world. It is 98 feet tall (not including the 26 foot pedestal), and the arms stretch to 92 feet wide.</p>
      </div>
      <div v-else-if="$store.state.city == 'Rome'">
        <p>The Colosseum in Rome, Italy, is a large amphitheater that hosted events like gladiatorial games. It was built during the reign of the Flavian emperors as a gift to the Roman people.</p>
      </div>
      <div v-else="">
      </div>
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


.span {
    font-size: 15px;

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
