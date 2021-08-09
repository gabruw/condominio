//#region Imports

import AlertBox from 'components/AlertBox';
import ContainerBox from 'components/ContainerBox';
import React from 'react';
import useAuthenticationContext, { AuthenticationContextProvider } from 'storages/authentication/context';
import FormLogin from './FormLogin';
import useStyles from './styles';

//#endregion

const Content = () => {
    const { requestState } = useAuthenticationContext();

    const styles = useStyles({ hasErrors: Boolean(requestState.errors) });

    return (
        <div className={styles.container}>
            <ContainerBox>
                <FormLogin />
                <AlertBox title='Erro ao efetuar login' errors={requestState.errors} />
            </ContainerBox>
        </div>
    );
};

const Authentication = () => (
    <AuthenticationContextProvider>
        <Content />
    </AuthenticationContextProvider>
);

export default Authentication;
