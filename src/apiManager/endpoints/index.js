import BASE_API_URL from './config'

const API = {
   EVENT_LIST: BASE_API_URL + 'events',
   POOJA_LIST: BASE_API_URL + 'poojas',
   STAR_LIST: BASE_API_URL + 'stars',
   DATA_FOLDER: window.location.origin.toString()+'/data/',
}

export default API
