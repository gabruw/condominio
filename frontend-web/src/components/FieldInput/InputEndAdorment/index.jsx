//#region Imports

import CircularProgress from '@material-ui/core/CircularProgress';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import React from 'react';

//#endregion

const InputEndAdorment = ({ visible, isVisible, isLoading, isPassword }) => (
    <InputAdornment position='end'>
        {isLoading && <CircularProgress size={22} />}

        {!isLoading && isPassword && (
            <IconButton edge='end' onClick={() => isVisible((prevState) => !prevState)}>
                {visible ? <VisibilityOff /> : <Visibility />}
            </IconButton>
        )}
    </InputAdornment>
);

export default InputEndAdorment;
