//#region Imports

import { useCallback } from 'react';
import useApi from 'services/api';
import ENDPOINT from 'services/endpoint';

//#endregion

const useGetData = () => {
    const api = useApi();

    const getFindById = useCallback((data) => api.get(ENDPOINT.CONDOMINIUM.FIND_BY_ID(data)), [api]);

    const getFindByUnity = useCallback((data) => api.get(ENDPOINT.CONSUMPTION.FIND_BY_UNITY(data)), [api]);

    const postFindAllByReadDateBetweenAndUnity = useCallback(
        (data) => api.post(ENDPOINT.CONDOMINIUM.THIS, data),
        [api]
    );

    return {
        getFindById,
        getFindByUnity,
        postFindAllByReadDateBetweenAndUnity
    };
};

export default useGetData;
