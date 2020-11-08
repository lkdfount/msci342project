import Vue from 'vue'
import Vuex from 'vuex'
// Initializes the vuex store
Vue.use(Vuex)

export default new Vuex.Store({
    strict: true, 
    state: {
        // Creates the recommended attractions and city variable where an array of recommended attractions will be stored
        recommendedAttractions: null, 
        city: null,
        //create the variable where the logged in user's email will be stored
        userEmail: null
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
        },
        //when a user logs in, set the variable to their email
        setUserEmail(state,userEmail){
            state.userEmail = userEmail
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
        },
        //when a user logs in, set it to the array
        setUserEmail({commit}, userEmail){
            commit('setUserEmail', userEmail)
        }
    },
  
        

}

)