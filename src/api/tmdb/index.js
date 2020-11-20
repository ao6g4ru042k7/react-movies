import axios from "./request";
import { apiKey, sessionId } from "./base";
const commonParams = {
    api_key: apiKey,
    language: "zh-TW",
    region: "TW",
};
const api = {
    detail(id) {
        return axios.get(`/movie/${id}`, {
            params: commonParams,
        });
    },
    latest() {
        return axios.get(`/movie/latest`, {
            params: {
                api_key: apiKey,
                language: "zh-TW",
            },
        });
    },
    nowPlaying() {
        return axios.get(`/movie/now_playing`, {
            params: commonParams,
        });
    },
    popular() {
        return axios.get(`/movie/popular`, {
            params: commonParams,
        });
    },
    topRated() {
        return axios.get(`/movie/top_rated`, {
            params: commonParams,
        });
    },
    upcoming() {
        return axios.get(`/movie/upcoming`, {
            params: commonParams,
        });
    },
    search(query, page = 1) {
        return axios.get(`/search/movie`, {
            params: {
                ...commonParams,
                // include_adult: true,
                query,
                page,
            },
        });
    },
    createList() {
        return axios.post(
            `/list`,
            {
                name: "This is my awesome test list.",
                description: "Just an awesome test list dawg."+Math.random(),
                language: "zh-TW",
            },
            {
                params: {
                    api_key: apiKey,
                    session_id: sessionId,
                },
            }
        );
    },
};
export default api;
