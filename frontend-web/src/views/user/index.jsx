//#region Imports

import TableHub from 'containers/TableHub';
import React, { Fragment } from 'react';
import { CondominiumContextProvider } from 'storages/condominium/context';
import useUserContext, { UserContextProvider } from 'storages/user/context';
import FormUser from './FormUser';

//#endregion

const Content = () => {
    const { modalRef, pageable } = useUserContext();

    return (
        <Fragment>
            <FormUser />
            <TableHub
                rows={[]}
                columns={[]}
                fetch={() => {}}
                pageable={pageable}
                modalRef={modalRef}
                label='Criar condomínio'
            />
        </Fragment>
    );
};

const User = () => (
    <UserContextProvider>
        <CondominiumContextProvider>
            <Content />
        </CondominiumContextProvider>
    </UserContextProvider>
);

export default User;
