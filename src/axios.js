import axios from 'axios';

const instance = axios.create({
    baseURL: "http://localhost:5001/clone-ddefe/us-central1/api"    // The API (Cloud function) URL
})

export default instance;