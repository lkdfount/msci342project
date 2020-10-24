import Api from '@/services/Api'

export default {
    recommend(city) {
        return Api().get('recommend', {"city": city})
    }

}

// AttractionsService.AttractionName({
//     city: 'Toronto'
// })
