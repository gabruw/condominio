//#region Imports

import { useCallback } from 'react';
import useSystemContext from 'storages/system/context';
import useRequestState from 'utils/hooks/useRequestState';
import useSendData from './services/useSendData';

//#endregion

const useAuthenticationService = () => {
    const { run, requestState } = useRequestState();

    const { postLogin } = useSendData();
    const { setLogin } = useSystemContext();

    const fetchLogin = useCallback(
        async (form) => {
            const response = await run(() => postLogin(form));
            const { data, errors } = response;

            !errors.length && setLogin(data);
            return response;
        },
        [run, postLogin, setLogin]
    );

    return {
        fetchLogin,
        requestState
    };
};

export default useAuthenticationService;
