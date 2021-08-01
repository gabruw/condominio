//#region Imports

import TableHub from 'containers/TableHub';
import React, { Fragment, useCallback } from 'react';
import useCondominiumContext, { CondominiumContextProvider } from 'storages/condominium/context';
import SECTOR_COLMUNS from 'utils/constants/columns/condominium';
import FormSector from './FormSector';

//#endregion

const Content = () => {
    const { modalRef, sectors, pageable, setSector, fetchRemove, fetchFindAll } = useCondominiumContext();

    const handleEdit = useCallback(
        (data) => {
            setSector(data);
            modalRef.current.show();
        },
        [setSector, modalRef]
    );

    const handleRemove = useCallback(
        async ({ id }) => {
            await fetchRemove(id);
        },
        [fetchRemove]
    );

    return (
        <Fragment>
            <FormSector />
            <TableHub
                rows={sectors}
                label='Criar setor'
                pageable={pageable}
                modalRef={modalRef}
                fetch={fetchFindAll}
                columns={SECTOR_COLMUNS}
                onClickEdit={handleEdit}
                onClickRemove={handleRemove}
            />
        </Fragment>
    );
};

const Sector = () => (
    <CondominiumContextProvider>
        <Content />
    </CondominiumContextProvider>
);

export default Sector;
