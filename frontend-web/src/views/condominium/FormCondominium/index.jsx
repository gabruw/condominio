//#region Imports

import AlertBox from 'components/AlertBox';
import Button from 'components/Button';
import ModalCrud from 'components/ModalCrud';
import FieldsAddress from 'form-fields/FieldsAddress';
import FieldsCondominiun from 'form-fields/FieldsCondominiun';
import React, { useCallback, useMemo } from 'react';
import useCondominiumContext from 'storages/condominium/context';
import useFormContext, { FormContextProvider } from 'storages/form/context';
import formatSendAddress from 'utils/validations/formater/address';
import addressSchema from 'utils/validations/yup/schemas/address';
import condominiumSchema from 'utils/validations/yup/schemas/condominium';
import useStyles from './styles';

//#endregion

const Content = () => {
    const styles = useStyles();

    const { handleSubmit } = useFormContext();
    const { modalRef, setCondominium, fetchInclude, fetchFindAll, requestState, clear } = useCondominiumContext();

    const onSubmit = async (data) => {
        data = formatSendAddress(data);

        const { errors } = await fetchInclude(data);
        if (!errors.length) {
            await fetchFindAll();
            modalRef.current.hide();
        }
    };

    const handleCloseModal = useCallback(() => {
        setCondominium();
        clear();
    }, [setCondominium, clear]);

    return (
        <ModalCrud modalRef={modalRef} title='Criar condomínio' onClose={handleCloseModal}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FieldsCondominiun />
                <FieldsAddress />

                <AlertBox widthAuto errors={requestState.errors} />

                <div className={styles.buttonContainer}>
                    <Button type='submit'>Confirmar</Button>
                </div>
            </form>
        </ModalCrud>
    );
};

const FormCondominium = () => {
    const schema = useMemo(() => condominiumSchema.concat(addressSchema), [condominiumSchema, addressSchema]);

    return (
        <FormContextProvider schema={schema}>
            <Content />
        </FormContextProvider>
    );
};

export default FormCondominium;
