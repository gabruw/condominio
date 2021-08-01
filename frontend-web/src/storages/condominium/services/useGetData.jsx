//#region Imports

import { useCallback } from 'react';
import useApi from 'services/api';
import ENDPOINT from 'services/endpoint';

//#endregion

const useGetData = () => {
    const api = useApi();

    const getFindOptions = useCallback(() => api.get(ENDPOINT.CONDOMINIUM.OPTIONS), [api]);

    const getFindAll = useCallback((data) => api.get(ENDPOINT.CONDOMINIUM.FIND_ALL(data)), [api]);

    const getFindById = useCallback((data) => api.get(ENDPOINT.CONDOMINIUM.FIND_BY_ID(data)), [api]);

    const getFindByName = useCallback((data) => api.get(ENDPOINT.CONDOMINIUM.FIND_BY_NAME(data)), [api]);

    return {
        getFindAll,
        getFindById,
        getFindByName,
        getFindOptions
    };
};

export default useGetData;
