//#region Imports

import AlertBox from 'components/AlertBox';
import Button from 'components/Button';
import ModalCrud from 'components/ModalCrud';
import FieldsCondominiun from 'form-fields/FieldsCondominiun';
import React, { useCallback } from 'react';
import useFormContext, { FormContextProvider } from 'storages/form/context';
import useCondominiumContext from 'storages/condominium/context';
import CONDOMINIUM_FIELDS from 'utils/constants/fields/condominium';
import condominiumSchema from 'utils/validations/yup/schemas/condominium';
import useStyles from './styles';

//#endregion

const Content = () => {
    const styles = useStyles();

    const { handleSubmit, setValue } = useFormContext();
    const { sector, modalRef, setSector, fetchInclude, fetchFindAll, requestState, clear } = useCondominiumContext();

    const onSubmit = async (data) => {
        const { errors } = await fetchInclude(data);
        if (!errors.length) {
            await fetchFindAll();
            modalRef.current.hide();
        }
    };

    const handleOpenModal = useCallback(() => {
        if (sector) {
            setValue(CONDOMINIUM_FIELDS.NAME, sector[CONDOMINIUM_FIELDS.NAME]);
        }
    }, [sector, setValue]);

    const handleCloseModal = useCallback(() => {
        setSector();
        clear();
    }, [setSector, clear]);

    return (
        <ModalCrud modalRef={modalRef} title='Criar setor' onOpen={handleOpenModal} onClose={handleCloseModal}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FieldsCondominiun />

                <AlertBox widthAuto errors={requestState.errors} />

                <div className={styles.buttonContainer}>
                    <Button type='submit'>Confirmar</Button>
                </div>
            </form>
        </ModalCrud>
    );
};

const FormSector = () => {
    const { sector } = useCondominiumContext();

    return (
        <FormContextProvider schema={condominiumSchema} defaultValues={sector}>
            <Content />
        </FormContextProvider>
    );
};

export default FormSector;
