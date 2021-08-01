//#region Imports

import Backdrop from '@material-ui/core/Backdrop';
import MaterialModal from '@material-ui/core/Modal';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import useStyles from './styles';

//#endregion

const Modal = ({ width, onOpen, onClose, children }, ref) => {
    const isLarge = useMediaQuery((theme) => theme.breakpoints.up('lg'));
    const styles = useStyles({ isLarge, width });

    const [isVisible, setIsVisible] = useState(false);

    useImperativeHandle(ref, () => ({
        show: () => setIsVisible(true),
        hide: () => setIsVisible(false),
        toggle: () => setIsVisible(!isVisible)
    }));

    useEffect(() => {
        onOpen && onOpen();
    }, [onOpen]);

    useEffect(() => {
        isVisible === false && onClose && onClose();
    }, [isVisible, onClose]);

    return (
        <MaterialModal
            open={isVisible}
            closeAfterTransition
            className={styles.modal}
            BackdropComponent={Backdrop}
            onClose={() => onClose && onClose()}
            BackdropProps={{
                timeout: 500
            }}
        >
            <div className={styles.paper}>{children}</div>
        </MaterialModal>
    );
};

export default forwardRef(Modal);
