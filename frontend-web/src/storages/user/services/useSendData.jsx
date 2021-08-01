//#region Imports

import { useCallback } from 'react';
import useApi from 'services/api';
import ENDPOINT from 'services/endpoint';

//#endregion

const useSendData = () => {
    const api = useApi();

    const postIncludeResident = useCallback((data) => api.post(ENDPOINT.USER.THIS, data), [api]);

    return {
        postIncludeResident
    };
};

export default useSendData;
