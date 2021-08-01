//#region Imports

import MaterialButton from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Icon from '@material-ui/core/Icon';
import React, { useMemo } from 'react';
import useStyles from './styles';

//#endregion

const Button = ({
    icon,
    children,
    color = 'primary',
    isLoading = false,
    isDisabled = false,
    variant = 'contained',
    ...rest
}) => {
    const styles = useStyles();
    const hasIcon = useMemo(() => !isLoading && icon, [isLoading, icon]);

    return (
        <MaterialButton
            color={color}
            variant={variant}
            className={styles.button}
            disabled={isLoading || isDisabled}
            startIcon={hasIcon && <Icon className={icon} />}
            {...rest}
        >
            {!isLoading ? children : <CircularProgress size={22} />}
        </MaterialButton>
    );
};

export default Button;
