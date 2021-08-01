//#region Imports

import { yupResolver } from '@hookform/resolvers/yup';
import React, { createContext, useContext } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

//#endregion

const FormContext = createContext();

export const FormContextProvider = ({ children, schema, formProperties, defaultValues = {} }) => {
    const form = useForm({
        defaultValues,
        shouldUnregister: true,
        reValidateMode: 'onBlur',
        resolver: yupResolver(schema),
        ...formProperties
    });

    return (
        <FormContext.Provider value={{ form }}>
            <FormProvider {...form}>{children}</FormProvider>
        </FormContext.Provider>
    );
};

const useFormContext = () => {
    const { form } = useContext(FormContext);

    return { ...form };
};

export default useFormContext;
