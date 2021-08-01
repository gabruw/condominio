//#region Imports

import Chip from '@material-ui/core/Chip';
import FilterListIcon from '@material-ui/icons/FilterList';
import Button from 'components/Button';
import React, { useCallback } from 'react';
import useStyles from './styles';

//#endregion

const HeaderHub = ({ label, modalRef }) => {
    const styles = useStyles();

    const show = useCallback(() => modalRef.current.show(), [modalRef]);

    return (
        <div className={styles.container}>
            <div className={styles.filterContent}>
                <div className={styles.filter}>
                    <FilterListIcon className={styles.filterIcon} />
                    Filtros
                </div>

                <Chip className={styles.chips} label='A - Z' size='medium' />
            </div>

            <Button component='span' className={styles.createButton} onClick={() => show()}>
                {label}
            </Button>
        </div>
    );
};

export default HeaderHub;
