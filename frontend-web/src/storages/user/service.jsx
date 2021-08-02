//#region Imports

import { useCallback } from 'react';
import useSystemContext from 'storages/system/context';
import useRequestState from 'utils/hooks/useRequestState';
import useSendData from './services/useSendData';

//#endregion

const useUserService = ({ setUser }) => {
    const { run, requestState, clear } = useRequestState();

    const { postIncludeResident } = useSendData();
    const { setLogin } = useSystemContext();

    const includeRegister = useCallback(
        async (form) => {
            const response = await run(() => postIncludeResident(form));
            const { data, errors } = response;

            !errors.length && setLogin(data);
            return response;
        },
        [run, postIncludeResident, setLogin]
    );

    return {
        clear,
        setUser,
        includeRegister,
        requestState
    };
};

export default useUserService;
