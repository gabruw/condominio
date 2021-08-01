//#region Imports

import { useCallback } from 'react';
import useRequestState from 'utils/hooks/useRequestState';
import useGetData from './services/useGetData';
import useSendData from './services/useSendData';

//#endregion

const useCondominiumService = ({ setCondominium, setCondominiums }) => {
    const { run, requestState, clear } = useRequestState();

    const { postInclude } = useSendData();
    const { getFindOptions, getFindAll, getFindById, getFindByName } = useGetData();

    const fetchInclude = useCallback(
        async (form) => {
            const response = await run(() => postInclude(form));
            setCondominium(response.data);

            return response;
        },
        [run, postInclude, setCondominium]
    );

    const fetchFindOptions = useCallback(
        async (form) => {
            const response = await run(() => getFindOptions(form));
            setCondominium(response.data);

            return response;
        },
        [run, getFindById, setCondominium]
    );

    const fetchFindAll = useCallback(
        async (page, size, order, direction) => {
            const response = await run(() => getFindAll({ page, size, order, direction }));
            response.data && setCondominiums(response.data);

            return response;
        },
        [run, getFindAll, setCondominiums]
    );

    const fetchFindById = useCallback(
        async (form) => {
            const response = await run(() => getFindById(form));
            setCondominium(response.data);

            return response;
        },
        [run, getFindById, setCondominium]
    );

    const fetchFindByName = useCallback(
        async (form) => {
            const response = await run(() => getFindByName(form));
            setCondominium(response.data);

            return response;
        },
        [run, getFindByName, setCondominium]
    );

    return {
        clear,
        fetchInclude,
        fetchFindAll,
        fetchFindById,
        fetchFindByName,
        fetchFindOptions,
        setCondominium,
        setCondominiums,
        requestState
    };
};

export default useCondominiumService;
