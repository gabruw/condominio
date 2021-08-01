//#region Imports

import Typography from '@material-ui/core/Typography';
import React from 'react';
import useStyles from './styles';

//#endregion

const Title = ({ children }) => {
    const styles = useStyles();

    return (
        <Typography className={styles.title} variant='h1'>
            {children}
        </Typography>
    );
};

export default Title;
