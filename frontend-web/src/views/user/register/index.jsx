//#region Imports

import AlertBox from 'components/AlertBox';
import ContainerBox from 'components/ContainerBox';
import React from 'react';
import { CondominiumContextProvider } from 'storages/condominium/context';
import useUserContext, { UserContextProvider } from 'storages/user/context';
import FormUser from './FormUser';
import useStyles from './styles';

//#endregion

const Content = () => {
    const styles = useStyles();
    const { requestState } = useUserContext();

    return (
        <div className={styles.container}>
            <ContainerBox>
                <FormUser />
                <AlertBox title='Erro ao efetuar o cadastro' errors={requestState.errors} />
            </ContainerBox>
        </div>
    );
};

const UserRegister = () => (
    <UserContextProvider>
        <CondominiumContextProvider>
            <Content />
        </CondominiumContextProvider>
    </UserContextProvider>
);

export default UserRegister;
