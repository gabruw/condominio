//#region Imports

import Table from 'components/Table';
import React, { useEffect } from 'react';
import HeaderHub from './HeaderHub';
import useStyles from './styles';

//#endregion

const TableHub = ({ label, rows, columns, pageable, onClickEdit, onClickRemove, fetch, modalRef }) => {
    const styles = useStyles();

    useEffect(() => {
        (async () => {
            await fetch();
        })();
    }, []);

    return (
        <div className={styles.container}>
            <HeaderHub label={label} modalRef={modalRef} />
            <Table
                rows={rows}
                fetch={fetch}
                columns={columns}
                pageable={pageable}
                onClickEdit={onClickEdit}
                onClickRemove={onClickRemove}
            />
        </div>
    );
};

export default TableHub;
