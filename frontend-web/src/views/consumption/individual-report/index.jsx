//#region Imports

import Table from 'components/Table';
import React, { Fragment } from 'react';
import useConsumptionContext, { ConsumptionContextProvider } from 'storages/consumption/context';
import { CONSUMPTION_INDIVIDUAL_REPORT_COLMUNS } from 'utils/constants/columns/consumption';
import ChartIndividualConsumption from './components/ChartIndividualConsumption';
import FormDateFilter from './FormDateFilter';

//#endregion

const Content = () => {
    const { consumptions } = useConsumptionContext();

    return (
        <Fragment>
            <FormDateFilter />

            <ChartIndividualConsumption />
            <Table rows={consumptions} fetch={fetch} pageable={null} columns={CONSUMPTION_INDIVIDUAL_REPORT_COLMUNS} />
        </Fragment>
    );
};

const ConsumptionIndividualReport = () => (
    <ConsumptionContextProvider>
        <Content />
    </ConsumptionContextProvider>
);

export default ConsumptionIndividualReport;
