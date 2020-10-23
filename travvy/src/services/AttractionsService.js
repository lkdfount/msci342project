import Api from '@/services/Api'

export default {
    AttractionName(info) {
        return Api().post('AttractionName', info)
    }

}

// AttractionsService.AttractionName({
//     city: 'Toronto'
// })
