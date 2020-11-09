<template>
  <div class="AttractionsList">
      <!-- this adds the profile button, in later sprints it will take the user to their profile page-->
      <input type="button" value="Profile" v-on:click="reverseMessage" style="float: right;" class="profile">

      <!-- include the toronto heading, an image, and some info about Toronto -->
      <br><br><br>
      <!-- Generates location heading based on first recommended attraction -->
      
      <div v-if="$store.state.recommendedAttractions.length > 0">
            <h1>{{$store.state.city}}, {{$store.state.recommendedAttractions[0].country}}</h1>
      </div>
      <div v-else>
          <!--handling of empty recommended attractions -->
          <h1>{{$store.state.city}}</h1>
      </div>

      <!-- the images of each city will dynamically display based on the chosen destination -->
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

      <div v-if="$store.state.recommendedAttractions.length > 0">
      <br>
      <h3>Description</h3>
      <p>{{$store.state.city}} is the largest city in {{$store.state.recommendedAttractions[0].country}}, and is home to attractions such as the {{$store.state.recommendedAttractions[0].attraction_name}}, {{$store.state.recommendedAttractions[1].attraction_name}}, and {{$store.state.recommendedAttractions[2].attraction_name}}.</p>
      <h3>COVID-19</h3>
      <p>Active cases: 2684</p>
      <p>Trend: Numbers increasing</p>
      <h3>Safety Guidelines</h3>
      <p>{{$store.state.city}} is in phase 2</p>
      <p>Max gathering of people indoors: 10</p>
      <p>Masks: required</p>
      <br>
      </div>
      <div v-else>
        <h1> No Attractions Information Available </h1>
      </div>
      <!-- make a list of buttons that take you to attraction pages -->
      <!-- in later sprints this list of attractions will be pulled from the database -->
      <div v-if="$store.state.recommendedAttractions.length > 0">
      <h1>Personalized attractions, based on your preferences</h1>
      <!-- let the user go back to the home page and change the info they gave -->
      <router-link to="/Home" tag="button" class="button"><span>Change Preferences</span></router-link>
      <br><br>
      <!-- generates dynamic buttons based on the recommended attractions -->
      <div class="btn-group"  v-for="value in $store.state.recommendedAttractions" :key="value.id" >
          <!--<button v-on:click="navigateTo({name:`/AttractionDetails/${value.id}`})" tag="button" class="button"><span>{{ value.attraction_name }}</span></button>-->
          <!--<router-link :to="`/AttractionDetails/${value.id}`" tag="button" class="button"><span>{{ value.attraction_name }} </span></router-link>-->
          <router-link :to="{name:'AttractionDetails', params: {id: 0} }" tag="button" class="button"><span>{{ value.attraction_name }} </span></router-link>
      </div>
      </div>
      <div v-else>
          <!--handling of empty recommended attractions -->
          <h1> No Attractions available </h1>
      </div>

      <!-- give some information collected from other travellers who have been to Toronto -->
      <!-- in later sprints, they will be pulled from the database -->
      <div v-if="$store.state.recommendedAttractions.length > 0">
      <h1>Traveller Tips</h1>
      <h3>Matt, 25 from Montreal</h3>
      <p>{{$store.state.recommendedAttractions[0].city}} felt pretty safe but if you are worried about COVID it may not be the best time to go, it is tough to get around without being around a lot of people.</p>
      <h3>Lisa, 28 from Winnepeg</h3>
      <p>I spent time at {{$store.state.recommendedAttractions[0].attraction_name}}, I'd totally recommend it. Great view and less people.</p>
      </div>
      <div v-else>
          <!--handling of empty recommended attractions -->
          <h1> No reviews available </h1>
      </div>
      <!-- include a map of Toronto, later this will be made responsive with the Google Maps APU -->
      <h1>Map</h1>
      <img src="../images/TorontoMap.jpg" alt="Map of Toronto" class="responsive"/>
      <br>
  </div>
</template>

<script>


 export default {
  name: 'AttractionsList',
  data() {
    return {
      value: {
        id: 0,
      }
    }
  },
  methods: {
    async navigateTo(route) {
        this.$router.push(route)
      }
    //sendValueId() {
      //<!--  this.$root.$emit(value.id) -->
  //  }    

    }
  }
   

</script>

<style>
/* include the styling for the profile button, keeps it consistant through the website*/
.profile{
  background-color: #FF5F00;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 12px;
}
/* include the styling for the change preferences button*/
.button {
  background-color: #FF5F00; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 12px;
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
/* include the styling for the button group list of attractions*/
.btn-group button {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  border-radius: 12px;
  width: 50%;
  margin: auto;
  display: block;
  justify-content: center;
}
/* make the botton group show which one the mouse is hovering on */
.btn-group button:hover {
  background-color: #3e8e41;
}
/* make the map image responsive to the size of the window */
.responsive {
  width: 100%;
  height: auto;
}

.cityimage {
  max-height: 500px;
  height: 70%;
  width: auto;
}

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
