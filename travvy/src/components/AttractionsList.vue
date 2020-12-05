<template>
  <div class="AttractionsList">
      <!-- this adds the profile button, in later sprints it will take the user to their profile page-->
      <router-link to="/Profile" tag="button" class="profile" style="float: right;"><span>Profile</span></router-link>
       <!-- let the user go back to the home page and change the info they gave -->
      <router-link to="/Home" tag="button" class="change" style="float: left;"><span>Home</span></router-link>
            <br><br><br>
      <!--button class="button" @click="login"><span>Log In</span></button-->

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
        <img src="../images/toronto3.jpg" alt="Picture of Toronto" class ="cityimage"/>
      </div>
      <div v-else-if="$store.state.city == 'Paris'">
        <img src="../images/paris3.jpg" alt="Picture of Paris" class ="cityimage"/>
      </div>
      <div v-else-if="$store.state.city == 'London'">
        <img src="../images/london3.jpg" alt="Picture of London" class ="cityimage" />
      </div>
      <div v-else-if="$store.state.city == 'New York City'">
        <img src="../images/newyorkcity3.jpg" alt="Picture of New York City" class ="cityimage"/>
      </div>
      <div v-else-if="$store.state.city == 'Rio de Janeiro'">
        <img src="../images/rio3.jpg" alt="Picture of Rio de Janeiro" class ="cityimage"/>
      </div>
      <div v-else-if="$store.state.city == 'Rome'">
        <img src="../images/rome3.jpg" alt="Picture of Rome" class ="cityimage"/>
      </div>
      <div v-else="">
      </div>

      <div v-if="$store.state.recommendedAttractions.length > 0">
      <br>
      <hr size="3" width="60%" color="#E7EDF7">  
      <h3>Description</h3>
      <p>{{$store.state.city}} is the largest city in {{$store.state.recommendedAttractions[0].country}}, and is home to attractions such as the {{$store.state.recommendedAttractions[0].attraction_name}}.</p>
      <h3>Live COVID-19 Information</h3>
      <p>Active Cases: {{$store.state.covidInfo.active}}</p>
      <p>Today's Cases: {{$store.state.covidInfo.todayCases}}</p>
      <p>Total Cases: {{$store.state.covidInfo.cases}}</p>
      <p>Total Deaths: {{$store.state.covidInfo.deaths}}</p>
      <br>
      <hr size="3" width="60%" color="#E7EDF7">  
      </div>
      <div v-else>
        <h1> No Attractions Information Available </h1>
      </div>
      <!-- make a list of buttons that take you to attraction pages -->
      <!-- in later sprints this list of attractions will be pulled from the database -->
      <div v-if="$store.state.recommendedAttractions.length > 0">
      <h1>Personalized attractions, based on your preferences</h1>
  
      <!-- generates dynamic buttons based on the recommended attractions -->
      <div class="btn-group" v-for="value in $store.state.recommendedAttractions" :key="value.id" >
        <br>
          <!--<button v-on:click="navigateTo({name:`/AttractionDetails/${value.id}`})" tag="button" class="button"><span>{{ value.attraction_name }}</span></button>-->
          <!--<router-link :to="`/AttractionDetails/${value.id}`" tag="button" class="button"><span>{{ value.attraction_name }} </span></router-link>-->
          <router-link v-model="attractionDetailsId" :to="{name:'AttractionDetails', params: {id: 0} }" tag="button" class="button"><span>{{ value.attraction_name }} </span></router-link>
      </div>
      </div>
      <div v-else>
          <!--handling of empty recommended attractions -->
          <h1> No Attractions available </h1>
      </div>

      <!-- give some information collected from other travellers who have been to Toronto -->
      <!-- in later sprints, they will be pulled from the database -->
      <br>
      <br>
      <br>
      <hr size="3" width="60%" color="#E7EDF7">  

<!-- include a map of for each city -->
      <h1>Map</h1> 
      <div id="map">
        <div v-if="$store.state.city == 'Toronto'">
        <gmap-map v-bind:center="{lat: 43.6532, lng: -79.3832}"
          v-bind:zoom="11"
          style="margin:45px; height: 425px;">
          <GmapMarker
            v-for="value in $store.state.recommendedAttractions" 
            :key="value.id"
            :position= "{lat:value.lat,lng:value.long}"
            :clickable="true"
            :draggable="false"
            @click="center=m.position"
          />
        <br>
        </gmap-map>
      </div>
      <div v-else-if="$store.state.city == 'Paris'">
        <gmap-map v-bind:center="{lat: 48.8566, lng: 2.3522}" v-bind:zoom="11" style="height: 425px">
        <GmapMarker
            v-for="value in $store.state.recommendedAttractions" 
            :key="value.id"
            :position= "{lat:value.lat,lng:value.long}"
            :clickable="true"
            :draggable="false"
            @click="center=m.position"
          />
        </gmap-map>
      </div>
      <div v-else-if="$store.state.city == 'London'">
        <gmap-map v-bind:center="{lat: 51.5074, lng: -0.1278}" v-bind:zoom="11" style="height: 425px">
        <GmapMarker
            v-for="value in $store.state.recommendedAttractions" 
            :key="value.id"
            :position= "{lat:value.lat,lng:value.long}"
            :clickable="true"
            :draggable="false"
            @click="center=m.position"
          />
        </gmap-map>
      </div>
      <div v-else-if="$store.state.city == 'New York City'">
        <gmap-map v-bind:center="{lat: 40.7128, lng: -74.0060}" v-bind:zoom="11" style="height: 425px">
        <GmapMarker
            v-for="value in $store.state.recommendedAttractions" 
            :key="value.id"
            :position= "{lat:value.lat,lng:value.long}"
            :clickable="true"
            :draggable="false"
            @click="center=m.position"
          />
        </gmap-map>
      </div>
      <div v-else-if="$store.state.city == 'Rio de Janeiro'">
        <gmap-map v-bind:center="{lat: -22.9068, lng: -43.1729}" v-bind:zoom="11" style="height: 425px">
        <GmapMarker
            v-for="value in $store.state.recommendedAttractions" 
            :key="value.id"
            :position= "{lat:value.lat,lng:value.long}"
            :clickable="true"
            :draggable="false"
            @click="center=m.position"
          />
        </gmap-map>
      </div>
      <div v-else-if="$store.state.city == 'Rome'">
        <gmap-map v-bind:center="{lat: 41.9028, lng: 12.4964}" v-bind:zoom="11" style="height: 725px">
        <GmapMarker
            v-for="value in $store.state.recommendedAttractions" 
            :key="value.id"
            :position= "{lat:value.lat,lng:value.long}"
            :clickable="true"
            :draggable="false"
            @click="center=m.position"
          />
        </gmap-map>
      </div>
      <div v-else="">
      </div>
      </div>
      <hr size="3" width="60%" color="#E7EDF7"> 

<!-- all reviews taken from TripAdvisor-->
<!-- the reviews of each city will dynamically display based on the chosen destination -->
      <h1>Traveller Tips</h1>
      <div v-if="$store.state.city == 'Toronto'">
        <h3>Rosie, from Scotland: ⭐⭐⭐⭐⭐</h3>
        <p>Toronto is a beautiful, vibrant city in Canada. It has wonderful architecture, amazing culture and fantastic restaurants and night life</p>
        <h3>Siber, from Minneapolis, Minnesota: ⭐⭐⭐⭐</h3>
        <p>One of my favorite cities. So much to see and do. If you go get a sausage from the street vendor, it's the best you'll ever have. Don't miss Long Street, the longest street in the world. Easy to get around using the subway.</p>
        <h3>John, from Australia: ⭐⭐⭐</h3>
        <p>I visited Toronto in September 2010, mainly because I wanted to go to Niagara Falls on a day trip. Toronto itself is a modern, clean city but I found it a bit bland as a tourist with few historic buildings and not many attractions to visit. I did a hop on hop off bus tour which went round the principal sites and found that a lot of them were not worth getting excited about.</p> 
      </div>
      <div v-else-if="$store.state.city == 'Paris'">
        <h3>Sara, from South Glastonbury, Connecticut: ⭐⭐⭐⭐⭐</h3>
        <p>What a place, the history, architecture and culture is wonderful. So many sites to see, one more amazing then the next. A must see if you are going to visit the great cities of the world.</p>
        <h3>Grace, from Yorba Linda, California: ⭐⭐⭐⭐⭐</h3>
        <p>Nine days of dining in Paris has led me to believe that you "can't" find a bad meal unless you prepared it. Three meals a days in and around the 7eme left us breathless. Exceptional food and service, in and around the Rue Cler area amazed us in both brasseries and cafes
.There were just too many to name. Paris is the dining capitol of the world.</p>
        <h3>Matthew, from West Des Moines, Iowa: ⭐⭐⭐</h3>
        <p>My trip to Paris was for my 25th birthday. Me nor any of my friends had been here yet. We drove from Germany and upon entering the heart of the city were quickly exposed to there frantic style of driving. After getting settled at our hotel in the Opera district we went out for drinks and had many options to choose from. We toured the Louvre, Eiffel Tower (at night), and Notre Dame, all of which were stunning.</p> 
      </div>
      <div v-else-if="$store.state.city == 'London'">
        <h3>Jessica, from Seattle, Washington: ⭐⭐⭐⭐⭐</h3>
        <p>Whilst a bit pricey, visiting London was the most amazing experience I have had to date! I recommend it to anyone from the US - we speak the same language, so it's extremely easy to "get your feet wet" in the adventure that is overseas travel.</p>
        <h3>Marie, from Melbourne, Australia: ⭐⭐⭐⭐</h3>
        <p>I always wanted to visit england and London was my first destination. Everyone knows about the english weather but that didnt dampen my trip. the place is awesome and there are so many things to do. I enjoyed the city and night life. Great pubs and clubs.</p>
        <h3>John, from Sydney, Australia: ⭐⭐⭐</h3>
        <p>Me and my friends we decided to travel around Europe this year. We have a tight budged, but it allows us to cover most of our costs. We got to London 3 days ago, and we are already considering if continuing to our next destination Barcelona! We knew that prices where high here, but this much? It's not worth it!</p> 
      </div>
      <div v-else-if="$store.state.city == 'New York City'">
        <h3>Liam, from Dublin, Ireland: ⭐⭐⭐⭐</h3>
        <p>I love everything NYC has to offer honestly. I grew up here all my life so its home, the only thing i would change is the subway system.</p>
        <h3>Thomas, from Denver, Colorado: ⭐⭐⭐⭐</h3>
        <p>Great city with diverse culture and great education and jobs if you want to be successful.Also every one is helpful and people are great.</p>
        <h3>Laura, from Burlington, Ontario: ⭐⭐⭐</h3>
        <p>There are nice food places in New York that offer a variety of food choices such as pizza and the classic bacon, egg, and cheese. However, the city is very crowded and I found myself getting lost.</p> 
      </div>
      <div v-else-if="$store.state.city == 'Rio de Janeiro'">
        <h3>Steven, from Montreal, Quebec: ⭐⭐⭐⭐⭐</h3>
        <p>Cariocas, as natives of Rio call themselves, refer to their hometown as "The Marvelous City," and this is no exaggeration. In the beach, it might be compared to Miami, Honolulu, Monte Carlo or Acapulco, but Rio is better. A week there was not enough.</p>
        <h3>Chris, from Los Angeles, California: ⭐⭐⭐⭐⭐</h3>
        <p>Rio was amazing! Just stay safe buy trying to blend in, and leaving your jewelry at home. As long as you don't walk around with anything flashy you will be fine. Locals dont wear anything flashy so that makes you stand out. Be smart and you will have the best experience.</p>
        <h3>Sean, from Venlo, Netherlands: ⭐⭐⭐</h3>
        <p>Disappointed. But as with all the ‘famous’ spots in a city the truth is not as advertised. Built up, nosy and the beach does not seem or feel as clean as nearby beaches.</p> 
      </div>
      <div v-else-if="$store.state.city == 'Rome'">
        <h3>Alex, from Berlin, Germany: ⭐⭐⭐⭐⭐</h3>
        <p>The Colosseum is also very very must go when you are in Italy. This chance, i went there to have a pictures and even without a good angle - its a good picture already.</p>
        <h3>Danny, from Mumbai, India: ⭐⭐⭐⭐</h3>
        <p>Rome fulfils all that it promises. History, paintings, sculptures and food. The Vatican, the Colosseum,the Trevi fountain and lots more. Ideally a month would be less to savour all these things in some detail. </p>
        <h3>Yonina, from Sofia, Bulgaria: ⭐⭐⭐⭐</h3>
        <p>For nearly free, we covered all the major sites in the Roman forum with a fantastic guide who really gave us an excellent overview.</p> 
      </div>
      <div v-else>
        <!--handling of empty recommended attractions -->
          <h1> No reviews available </h1>
      </div>

      <!--<div v-if="$store.state.recommendedAttractions.length > 0">
      <p>{{$store.state.recommendedAttractions[0].city}} felt pretty safe but if you are worried about COVID it may not be the best time to go, it is tough to get around without being around a lot of people.</p>
      <h3>Lisa, 28 from Winnipeg, ⭐ ⭐ ⭐ ⭐</h3>
      <p>I spent time at {{$store.state.recommendedAttractions[0].attraction_name}}, I'd totally recommend it. Great view and less people.</p>
      </div>
      <div v-else>
       </div>-->
      
  </div>
</template>

<script>
 export default {
  name: 'AttractionsList',
  data() {
    return {
      value: {
        id: 0,
      },
      center:{
        lat: 43.6532, lng: -79.3832},
      markers:[
        {
          position:{lat:43.6532,lng:-79.3832}
        },
        {
          position:{lat:43.6512,lng:-79.3432}
        },
        ],

      attractionDetailsId: '',
    }
  },
  methods: {
    async navigateTo1(route) {
        this.$router.push(route)
      },

    async navigateTo(route) {

      try {
        //saves users city in the store
        this.$store.dispatch('setAttractionDetailsId', this.attractionDetailsId)
        //console.log(attractionDetailsId)
        console.log(this.$store.state.attractionDetailsId)

    
        this.$router.push(route)
      } catch (error) {
         console.log(error)
      }
    } 
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
  font-size: 22px;
  border-radius: 12px;
}
.profile span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}
.profile span:after {
  content: '\00bb';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}
.profile:hover span {
  padding-right: 25px;
}
.profile:hover span:after {
  opacity: 1;
  right: 0;
}
/* include the styling for the button group list of attractions*/
.btn-group button {
  background-color: #C7EEA9;
  border: none;
  color: black;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  border-radius: 12px;
  width: 20%;
  margin: auto;
  display: block;
  justify-content: center;
}
/* make the botton group show which one the mouse is hovering on */
.btn-group button:hover {
  background-color: #a9eeae;
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

</style>