//#region Imports

import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Title from 'components/Title';
import Modal from 'containers/Modal';
import React, { useCallback } from 'react';
import useStyles from './styles';

//#endregion

const ModalCrud = ({ title, modalRef, children, ...rest }) => {
    const styles = useStyles();

    const handleClose = useCallback(() => {
        modalRef.current.hide();
    }, [modalRef]);

    return (
        <Modal ref={modalRef} {...rest}>
            <div className={styles.closeContainer}>
                <div className={styles.closeIcon}>
                    <IconButton className={styles.closeIconButton} size='small' onClick={() => handleClose()}>
                        <CloseIcon className={styles.closeIcon} />
                    </IconButton>
                </div>
            </div>

            <div className={styles.title}>
                <Title>{title}</Title>
            </div>

            {children}
        </Modal>
    );
};

export default ModalCrud;
