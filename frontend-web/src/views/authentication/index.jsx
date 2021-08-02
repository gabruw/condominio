//#region Imports

import Typography from '@material-ui/core/Typography';
import AlertBox from 'components/AlertBox';
import ContainerBox from 'components/ContainerBox';
import React from 'react';
import { useHistory } from 'react-router-dom';
import ROUTE_NAME from 'routes/route-name';
import useAuthenticationContext, { AuthenticationContextProvider } from 'storages/authentication/context';
import FormLogin from './FormLogin';
import useStyles from './styles';

//#endregion

const Content = () => {
    const history = useHistory();
    const { requestState } = useAuthenticationContext();

    const styles = useStyles({ hasErrors: Boolean(requestState.errors) });

    return (
        <div className={styles.container}>
            <ContainerBox>
                <FormLogin />

                <Typography className={styles.forget} onClick={() => history.push(ROUTE_NAME.AUTHENTICATION)}>
                    Esqueci a senha
                </Typography>

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
