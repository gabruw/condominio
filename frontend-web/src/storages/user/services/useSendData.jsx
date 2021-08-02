//#region Imports

import { useCallback } from 'react';
import useApi from 'services/api';
import ENDPOINT from 'services/endpoint';

//#endregion

const useSendData = () => {
    const api = useApi();

    const postIncludeResident = useCallback((data) => api.post(ENDPOINT.USER.INCLUDE_RESIDENT, data), [api]);

    return {
        postIncludeResident
    };
};

export default useSendData;
