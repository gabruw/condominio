//#region Imports

import Table from 'components/Table';
import React, { Fragment, useEffect } from 'react';
import useConsumptionContext, { ConsumptionContextProvider } from 'storages/consumption/context';
import useSystemContext from 'storages/system/context';
import { CONSUMPTION_GENERAL_REPORT_COLMUNS } from 'utils/constants/columns/consumption';
import ChartGeneralConsumption from './components/ChartGeneralConsumption';

//#endregion

const Content = () => {
    const { condominium } = useSystemContext();
    const { consumptions, fetchFindAllByCondominium } = useConsumptionContext();

    useEffect(() => {
        (async () => {
            await fetchFindAllByCondominium(condominium);
        })();
    }, []);

    return (
        <Fragment>
            <ChartGeneralConsumption />

            <Table rows={consumptions} fetch={fetch} pageable={null} columns={CONSUMPTION_GENERAL_REPORT_COLMUNS} />
        </Fragment>
    );
};

const ConsumptionGeneralReport = () => (
    <ConsumptionContextProvider>
        <Content />
    </ConsumptionContextProvider>
);

export default ConsumptionGeneralReport;
