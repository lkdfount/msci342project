import Vue from 'vue'
import Vuex from 'vuex'
// Initializes the vuex store
Vue.use(Vuex)

export default new Vuex.Store({
    strict: true, 
    state: {
        // Creates the recommended attractions and city variable where an array of recommended attractions will be stored
        recommendedAttractions: null, 
        city: null
    },
    mutations: {
        // If user selects new locations, recommended attractions change
        setRecommendedAttractions(state,recommendedAttractions){
            state.recommendedAttractions = recommendedAttractions
        }, 
        setCity(state,city){
            state.city = city
        },
        setSe(state,selectedAttraction){
            state.selectedAttraction = selectedAttraction
        }
    }, 
    actions: {
        // If the user selects a location, recommended attractions is set to the recommended attractions array
        setRecommendedAttractions({commit}, recommendedAttractions){
            commit('setRecommendedAttractions', recommendedAttractions)
        },
        setCity({commit}, city){
            commit('setCity', city)
        },
        setSelectedAttraction({commit}, selectedAttraction){
            commit('setSelectedAttraction', selectedAttraction)
        }
    },
    // this will be used to store user information async registerUser({commit}, registrationInfo){
       // try{
        //    let response = await ExtensionScriptApis().post('users', registrationInfo);
         //   let user = response.data.data.attributes;
          //  commit('SET_CURRENT_USER', user);
          //  return user;
       // } catch{
        //    return {error: "There was an error. Try again."}
     //   }
   // }  
        

}

)