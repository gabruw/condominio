//#region Imports

import Button from 'components/Button';
import FieldsDateFilter from 'form-fields/FieldsDateFilter';
import React from 'react';
import useConsumptionContext from 'storages/consumption/context';
import useFormContext, { FormContextProvider } from 'storages/form/context';
import useSystemContext from 'storages/system/context';
import consumptionSchema from 'utils/validations/yup/schemas/consumption';
import useStyles from './styles';

//#endregion

const Content = () => {
    const styles = useStyles();

    const { handleSubmit } = useFormContext();

    const { unity } = useSystemContext();
    const { fetchFindAllByReadDateBetweenAndUnity } = useConsumptionContext();

    const onSubmit = async (data) => {
        await fetchFindAllByReadDateBetweenAndUnity({ ...data, unity });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <FieldsDateFilter />

                    <div style={{ width: '15%' }}>
                        <Button type='submit'>Enviar</Button>
                    </div>
                </div>
            </div>
        </form>
    );
};

const FormDateFilter = () => (
    <FormContextProvider schema={consumptionSchema}>
        <Content />
    </FormContextProvider>
);

export default FormDateFilter;
