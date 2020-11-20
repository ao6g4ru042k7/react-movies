import axios from "./request";
import { apiKey } from "./base";

const api = {
    createUserData(token, data) {
        return axios.post("/userData.json?auth=" + token, data);
    },
    getUserData(token, userId) {
        return axios.get("/userData.json?auth=" + token + '&orderBy="userId"&equalTo="' + userId + '"');
    },
};

export default api;
