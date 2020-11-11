import axios from "./request";
import { apiKey } from "./base";
const api = {
    detail(id) {
        return axios.get(`/movie/${id}`, {
            params: {
                api_key: apiKey,
            },
        });
    },
    latest() {
        return axios.get(`/movie/latest`, {
            params: {
                api_key: apiKey,
            },
        });
    },
    nowPlaying() {
        return axios.get(`/movie/now_playing`, {
            params: {
                api_key: apiKey,
            },
        });
    },
    popular() {
        return axios.get(`/movie/popular`, {
            params: {
                api_key: apiKey,
            },
        });
    },
    topRated() {
        return axios.get(`/movie/top_rated`, {
            params: {
                api_key: apiKey,
            },
        });
    },
    upcoming() {
        return axios.get(`/movie/upcoming`, {
            params: {
                api_key: apiKey,
            },
        });
    },
};
export default api;
