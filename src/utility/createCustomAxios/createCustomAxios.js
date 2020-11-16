import * as actions from "../../store/actions";
import store from "../../store";
import axios from "axios";
const createCustomAxios = (domain) => {
    const instance = axios.create({
        baseURL: domain,
    });

    instance.interceptors.request.use(
        (config) => {
            return config;
        },
        (error) => {
            store.dispatch(actions.setErrorMes(error.message));
            return Promise.reject(error);
        }
    );

    instance.interceptors.response.use(
        (response) => {
            return response;
        },
        (error) => {
            store.dispatch(actions.setErrorMes(error.message));
            return Promise.reject(error);
        }
    );
    return instance;
};

export default createCustomAxios;
