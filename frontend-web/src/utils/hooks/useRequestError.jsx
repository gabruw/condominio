//#region Imports

import { useCallback, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import ROUTE_NAME from 'routes/route-name';
import MISC_ERRORS from 'utils/constants/errors/misc';

//#endregion

const useRequestError = () => {
    const history = useHistory();

    const getAction = useMemo(
        () => ({
            401: () => history.push(ROUTE_NAME.AUTHENTICATION)
        }),
        [history]
    );

    const getError = useCallback(
        (error) => {
            const errors = error && error.data && error.data.errors;
            if (errors && errors.length) {
                const action = getAction[error.status];
                action && action();

                return errors;
            }

            return Array(MISC_ERRORS.UNKNOW);
        },
        [getAction]
    );

    return {
        getError
    };
};

export default useRequestError;
