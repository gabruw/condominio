//#region Imports

import useApi from 'services/api';
import ENDPOINT from 'services/endpoint';
import { useCallback } from 'react';

//#endregion

const useSendData = () => {
    const api = useApi();

    const postLogin = useCallback((data) => api.post(ENDPOINT.SECURITY.LOGIN, data), [api]);

    return {
        postLogin
    };
};

export default useSendData;
