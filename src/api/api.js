import axios from "axios"

export default () => {
    let currentLocation = window.location;
    let port = currentLocation.port;
    if (process.env.NODE_ENV == "development") {
        port = 8000;
    }

    let baseUrl = "//" + currentLocation.hostname + ":" + port;

    let apiClient = axios.create({
        baseURL: baseUrl,
        //withCredentials: true,
        headers: {
            // "Content-Type": "application/json",
            // 'Accept': 'application/json'
        }
    });

    return apiClient;
};