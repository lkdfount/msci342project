<template>  
  <div class="Profile">
        <h2>Profile</h2>
        <br>
        <br>
        <button class="button" @click="signout"><span>Sign Out</span></button>
    </div>
</template>

<script>
  //import from the AuthenticationService file

  export default {
    data(){
      return {
        
      }
    }, 
    methods:{
      async signout(){
        this.$store.dispatch('setUserEmail', null)
        alert("Sign out successful")
        this.$router.push("/")
      },
    }
  }
</script>


<style>
.button {
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

.container {
  padding: 20px 10px;
  margin: 0 700px;
}
</style>
