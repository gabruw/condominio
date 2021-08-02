//#region Imports

import React, { createContext, useCallback, useContext, useRef, useState } from 'react';
import USER_FIELDS from 'utils/constants/fields/user';
import CONTEXT_INITIAL_STATE from 'utils/constants/types/context-initial-state';
import useUserService from './service';

//#endregion

const UserContext = createContext();

const initialState = {
    [USER_FIELDS.THIS]: null,
    ...CONTEXT_INITIAL_STATE
};

export const UserContextProvider = ({ children, defaultValues }) => {
    const modalRef = useRef(null);
    const [state, setState] = useState({ ...initialState, ...defaultValues });

    const setUser = useCallback((user) => setState((prevState) => ({ ...prevState, user })), [setState]);

    const service = useUserService({ setUser });
    return <UserContext.Provider value={{ modalRef, ...state, ...service }}>{children}</UserContext.Provider>;
};

const useUserContext = () => {
    const context = useContext(UserContext);

    return { ...context };
};

export default useUserContext;
