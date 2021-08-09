//#region Imports

import { useCallback } from 'react';
import useApi from 'services/api';
import ENDPOINT from 'services/endpoint';

//#endregion

const useGetData = () => {
    const api = useApi();

    const getFindById = useCallback((data) => api.get(ENDPOINT.CONSUMPTION.FIND_BY_ID(data)), [api]);

    const getFindByUnity = useCallback((data) => api.get(ENDPOINT.CONSUMPTION.FIND_BY_UNITY(data)), [api]);

    const getFindAllByCondominium = useCallback(
        (data) => api.get(ENDPOINT.CONSUMPTION.FIND_ALL_BY_CONDOMINIUM(data)),
        [api]
    );

    const postFindAllByReadDateBetweenAndUnity = useCallback(
        (data) => api.post(ENDPOINT.CONSUMPTION.FIND_BY_READ_DATE_BETWEEN_AND_UNITY, data),
        [api]
    );

    return {
        getFindById,
        getFindByUnity,
        getFindAllByCondominium,
        postFindAllByReadDateBetweenAndUnity
    };
};

export default useGetData;
