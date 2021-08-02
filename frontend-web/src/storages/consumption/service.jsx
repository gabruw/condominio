//#region Imports

import { useCallback } from 'react';
import useRequestState from 'utils/hooks/useRequestState';
import useGetData from './services/useGetData';
import useSendData from './services/useSendData';

//#endregion

const useConsumptionService = ({ setConsumption, setConsumptions }) => {
    const { run, requestState, clear } = useRequestState();

    const { postInclude } = useSendData();
    const { getFindById, getFindByUnity, postFindAllByReadDateBetweenAndUnity } = useGetData();

    const fetchInclude = useCallback(
        async (form) => {
            const response = await run(() => postInclude(form));
            setConsumption(response.data);

            return response;
        },
        [run, postInclude, setConsumption]
    );

    const fetchFindById = useCallback(
        async (form) => {
            const response = await run(() => getFindById(form));
            setConsumption(response.data);

            return response;
        },
        [run, getFindById, setConsumption]
    );

    const fetchFindByUnity = useCallback(
        async (form) => {
            const response = await run(() => getFindByUnity(form));
            setConsumptions(response.data);

            return response;
        },
        [run, getFindByUnity, setConsumptions]
    );

    const fetchFindAllByReadDateBetweenAndUnity = useCallback(
        async (form) => {
            const response = await run(() => postFindAllByReadDateBetweenAndUnity(form));
            response.data && setConsumptions(response.data);

            return response;
        },
        [run, postFindAllByReadDateBetweenAndUnity, setConsumptions]
    );

    return {
        clear,
        fetchInclude,
        fetchFindById,
        fetchFindByUnity,
        fetchFindAllByReadDateBetweenAndUnity,
        setConsumption,
        setConsumptions,
        requestState
    };
};

export default useConsumptionService;
