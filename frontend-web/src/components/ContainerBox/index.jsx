//#region Imports

import React from 'react';
import Paper from '@material-ui/core/Paper';
import useStyles from './styles';

//#endregion

const ContainerBox = ({ children, variant = 'elevation', isLoading = false, isDisabled = false }) => {
    const styles = useStyles();

    return (
        <Paper className={styles.container} variant={variant}>
            {children}
        </Paper>
    );
};

export default ContainerBox;
