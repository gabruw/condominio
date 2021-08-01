//#region Imports

import { useCallback } from 'react';
import useApi from 'services/api';
import ENDPOINT from 'services/endpoint';

//#endregion

const useSendData = () => {
    const api = useApi();

    const postInclude = useCallback((data) => api.post(ENDPOINT.CONDOMINIUM.THIS, data), [api]);

    return {
        postInclude
    };
};

export default useSendData;
