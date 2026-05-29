import axios from "axios";




const shopCartClientAPI = axios.create({

    baseURL: import.meta.env.VITE_SERVER_BASE_URL,
    timeout: 60000,
    headers:{
        'content-type': 'application/json',
        Authorization: ``
    }


})

export default shopCartClientAPI;