//#region Imports

import React, { createContext, useCallback, useContext, useState } from 'react';
import AUTHENTICATION_FIELDS from 'utils/constants/fields/authentication';
import CONTEXT_INITIAL_STATE from 'utils/constants/types/context-initial-state';
import useAuthenticationService from './service';

//#endregion

const AuthenticationContext = createContext();

const initialState = {
    [AUTHENTICATION_FIELDS.THIS]: null,
    ...CONTEXT_INITIAL_STATE
};

export const AuthenticationContextProvider = ({ children, defaultValues }) => {
    const [state, setState] = useState({ ...initialState, ...defaultValues });

    const setAuthentication = useCallback(
        (authentication) => setState((prevState) => ({ ...prevState, authentication })),
        [setState]
    );

    const service = useAuthenticationService({ state, setAuthentication });
    return <AuthenticationContext.Provider value={{ ...service, ...state }}>{children}</AuthenticationContext.Provider>;
};

const useAuthenticationContext = () => {
    const context = useContext(AuthenticationContext);

    return { ...context };
};

export default useAuthenticationContext;
