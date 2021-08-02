//#region Imports

import Button from 'components/Button';
import Title from 'components/Title';
import FieldsUser from 'form-fields/FieldsUser';
import React, { useCallback, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import ROUTE_NAME from 'routes/route-name';
import useFormContext, { FormContextProvider } from 'storages/form/context';
import useUserContext from 'storages/user/context';
import userRegisterFormater from 'utils/validations/formater/user-register';
import authenticationSchema from 'utils/validations/yup/schemas/authentication';
import userSchema from 'utils/validations/yup/schemas/user';
import useStyles from './styles';

//#endregion

const Content = () => {
    const styles = useStyles();
    const history = useHistory();

    const { handleSubmit } = useFormContext();
    const { includeRegister, requestState } = useUserContext();

    const onSubmit = useCallback(
        async (data) => {
            data = userRegisterFormater(data);

            const { errors } = await includeRegister(data);
            !errors.length && history.push(ROUTE_NAME.CONDOMINIUM);
        },
        [includeRegister, history]
    );

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.title}>
                <Title>Cadastro</Title>
            </div>

            <FieldsUser />

            <Button type='submit' isLoading={requestState.isLoading}>
                Confirmar Cadastro
            </Button>
        </form>
    );
};

const UserForm = () => {
    const schema = useMemo(() => authenticationSchema.concat(userSchema), []);

    return (
        <FormContextProvider schema={schema}>
            <Content />
        </FormContextProvider>
    );
};

export default UserForm;
