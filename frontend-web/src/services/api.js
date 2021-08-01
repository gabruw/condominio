//#region Imports

import axios from 'axios';
import useSystemContext from 'storages/system/context';
import ENDPOINT from './endpoint';

//#endregion

const useApi = () => {
    const { token } = useSystemContext();

    const api = axios.create({
        baseURL: ENDPOINT.BASE
    });

    api.interceptors.request.use((config) => {
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    });

    return api;
};

export default useApi;
