//#region Imports

import React, { createContext, useCallback, useContext, useRef, useState } from 'react';
import PAGEABLE_FIELDS from 'utils/constants/fields/pageable';
import CONDOMINIUM_FIELDS from 'utils/constants/fields/condominium';
import CONTEXT_INITIAL_STATE from 'utils/constants/types/context-initial-state';
import useCondominiumService from './service';

//#endregion

const CondominiumContext = createContext();

const initialState = {
    [CONDOMINIUM_FIELDS.THIS]: null,
    [CONDOMINIUM_FIELDS.CONDOMINIUMS]: null,
    ...CONTEXT_INITIAL_STATE
};

export const CondominiumContextProvider = ({ children, defaultValues }) => {
    const modalRef = useRef(null);
    const [state, setState] = useState({ ...initialState, ...defaultValues });

    const setCondominium = useCallback((sector) => setState((prevState) => ({ ...prevState, sector })), [setState]);

    const setCondominiums = useCallback(
        (data) =>
            setState((prevState) => ({
                ...prevState,
                [CONDOMINIUM_FIELDS.CONDOMINIUMS]: data.content,
                [PAGEABLE_FIELDS.THIS]: {
                    ...data[PAGEABLE_FIELDS.THIS],
                    [PAGEABLE_FIELDS.TOTAL_PAGES]: data[PAGEABLE_FIELDS.TOTAL_PAGES],
                    [PAGEABLE_FIELDS.TOTAL_ELEMENTS]: data[PAGEABLE_FIELDS.TOTAL_ELEMENTS]
                }
            })),
        [setState]
    );

    const service = useCondominiumService({ setCondominium, setCondominiums });
    return (
        <CondominiumContext.Provider value={{ modalRef, ...service, ...state }}>{children}</CondominiumContext.Provider>
    );
};

const useCondominiumContext = () => {
    const context = useContext(CondominiumContext);

    return { ...context };
};

export default useCondominiumContext;
