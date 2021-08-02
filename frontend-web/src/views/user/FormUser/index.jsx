//#region Imports

import AlertBox from 'components/AlertBox';
import Button from 'components/Button';
import ModalCrud from 'components/ModalCrud';
import FieldsUser from 'form-fields/FieldsUser';
import React, { useCallback, useMemo } from 'react';
import useFormContext, { FormContextProvider } from 'storages/form/context';
import useUserContext from 'storages/user/context';
import userRegisterFormater from 'utils/validations/formater/user-register';
import authenticationSchema from 'utils/validations/yup/schemas/authentication';
import condominiumSchema from 'utils/validations/yup/schemas/condominium';
import userSchema from 'utils/validations/yup/schemas/user';
import useStyles from './styles';

//#endregion

const Content = () => {
    const styles = useStyles();

    const { handleSubmit } = useFormContext();
    const { modalRef, includeRegister, requestState, clear } = useUserContext();

    const onSubmit = async (data) => {
        data = userRegisterFormater(data);

        const { errors } = await includeRegister(data);
        !errors.length && modalRef.current.hide();
    };

    const handleCloseModal = useCallback(() => {
        clear();
    }, [clear]);

    return (
        <ModalCrud modalRef={modalRef} title='Criar usuário' onClose={handleCloseModal}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FieldsUser />

                <AlertBox widthAuto errors={requestState.errors} />

                <div className={styles.buttonContainer}>
                    <Button type='submit'>Confirmar</Button>
                </div>
            </form>
        </ModalCrud>
    );
};

const FormUser = () => {
    const schema = useMemo(() => authenticationSchema.concat(userSchema).concat(condominiumSchema), []);

    return (
        <FormContextProvider schema={schema}>
            <Content />
        </FormContextProvider>
    );
};

export default FormUser;
