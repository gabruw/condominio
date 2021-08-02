//#region Imports

import Button from 'components/Button';
import Title from 'components/Title';
import FieldsAuthentication from 'form-fields/FieldsAuthentication';
import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import ROUTE_NAME from 'routes/route-name';
import useAuthenticationContext from 'storages/authentication/context';
import useFormContext, { FormContextProvider } from 'storages/form/context';
import authenticationSchema from 'utils/validations/yup/schemas/authentication';
import useStyles from './styles';

//#endregion

const Content = () => {
    const styles = useStyles();
    const history = useHistory();

    const { handleSubmit } = useFormContext();
    const { fetchLogin, requestState } = useAuthenticationContext();

    const onSubmit = useCallback(
        async (data) => {
            const { errors } = await fetchLogin(data);
            !errors.length && history.push(ROUTE_NAME.CONDOMINIUM);
        },
        [fetchLogin, history]
    );

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.title}>
                <Title>Login</Title>
            </div>

            <FieldsAuthentication />

            <Button type='submit' isLoading={requestState.isLoading}>
                Entrar
            </Button>
        </form>
    );
};

const FormLogin = () => (
    <FormContextProvider schema={authenticationSchema}>
        <Content />
    </FormContextProvider>
);

export default FormLogin;
