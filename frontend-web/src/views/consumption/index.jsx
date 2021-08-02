//#region Imports

import Table from 'components/Table';
import React, { Fragment } from 'react';
import useConsumptionContext, { ConsumptionContextProvider } from 'storages/consumption/context';
import CONSUMPTION_COLMUNS from 'utils/constants/columns/consumption';
import FormDateFilter from './FormDateFilter';

//#endregion

const Content = () => {
    const { consumptions } = useConsumptionContext();

    return (
        <Fragment>
            <FormDateFilter />
            <Table rows={consumptions} fetch={fetch} pageable={null} columns={CONSUMPTION_COLMUNS} />
        </Fragment>
    );
};

const Consumption = () => (
    <ConsumptionContextProvider>
        <Content />
    </ConsumptionContextProvider>
);

export default Consumption;
