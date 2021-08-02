//#region Imports

import TableHub from 'containers/TableHub';
import React, { Fragment } from 'react';
import useCondominiumContext, { CondominiumContextProvider } from 'storages/condominium/context';
import CONDOMINIUM_COLMUNS from 'utils/constants/columns/condominium';
import FormCondominium from './FormCondominium';

//#endregion

const Content = () => {
    const { modalRef, condominiums, pageable, fetchFindAll } = useCondominiumContext();

    return (
        <Fragment>
            <FormCondominium />
            <TableHub
                rows={condominiums}
                pageable={pageable}
                modalRef={modalRef}
                fetch={fetchFindAll}
                label='Criar condomínio'
                columns={CONDOMINIUM_COLMUNS}
            />
        </Fragment>
    );
};

const Condominium = () => (
    <CondominiumContextProvider>
        <Content />
    </CondominiumContextProvider>
);

export default Condominium;
