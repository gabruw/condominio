//#region Imports

import React, { createContext, useCallback, useContext, useRef, useState } from 'react';
import PAGEABLE_FIELDS from 'utils/constants/fields/pageable';
import CONSUMPTION_FIELDS from 'utils/constants/fields/consumption';
import CONTEXT_INITIAL_STATE from 'utils/constants/types/context-initial-state';
import useConsumptionService from './service';

//#endregion

const ConsumptionContext = createContext();

const initialState = {
    [CONSUMPTION_FIELDS.THIS]: null,
    [CONSUMPTION_FIELDS.CONSUMPTIONS]: null,
    ...CONTEXT_INITIAL_STATE
};

export const ConsumptionContextProvider = ({ children, defaultValues }) => {
    const modalRef = useRef(null);
    const [state, setState] = useState({ ...initialState, ...defaultValues });

    const setConsumption = useCallback((sector) => setState((prevState) => ({ ...prevState, sector })), [setState]);

    const setConsumptions = useCallback(
        (data) =>
            setState((prevState) => ({
                ...prevState,
                [CONSUMPTION_FIELDS.CONSUMPTIONS]: data.content,
                [PAGEABLE_FIELDS.THIS]: {
                    ...data[PAGEABLE_FIELDS.THIS],
                    [PAGEABLE_FIELDS.TOTAL_PAGES]: data[PAGEABLE_FIELDS.TOTAL_PAGES],
                    [PAGEABLE_FIELDS.TOTAL_ELEMENTS]: data[PAGEABLE_FIELDS.TOTAL_ELEMENTS]
                }
            })),
        [setState]
    );

    const service = useConsumptionService({ setConsumption, setConsumptions });
    return (
        <ConsumptionContext.Provider value={{ modalRef, ...service, ...state }}>{children}</ConsumptionContext.Provider>
    );
};

const useConsumptionContext = () => {
    const context = useContext(ConsumptionContext);

    return { ...context };
};

export default useConsumptionContext;
