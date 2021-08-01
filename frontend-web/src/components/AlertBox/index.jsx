//#region Imports

import { Alert, AlertTitle } from '@material-ui/lab';
import React, { Fragment, useEffect, useState } from 'react';
import useStyles from './styles';

//#endregion

const AlertBox = ({ severity = 'error', errors = [], title = 'Erro', widthAuto = false }) => {
    const styles = useStyles({ widthAuto });
    const [visibility, setVisibility] = useState(false);

    useEffect(() => {
        setVisibility(errors && Boolean(errors.length));
    }, [errors, setVisibility]);

    return (
        <Fragment>
            {visibility && (
                <Alert className={styles.container} severity={severity} onClose={() => setVisibility(false)}>
                    <AlertTitle>{title}</AlertTitle>
                    <ul className={styles.list}>
                        {errors && errors.map((value, index) => <li key={index}>{value}</li>)}
                    </ul>
                </Alert>
            )}
        </Fragment>
    );
};

export default AlertBox;
