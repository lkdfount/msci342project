import Api from '@/services/Api'

export default {
    recommend(info) {
        return Api().post('recommend', info)
    }

}

// AttractionsService.AttractionName({
//     city: 'Toronto'
// })
