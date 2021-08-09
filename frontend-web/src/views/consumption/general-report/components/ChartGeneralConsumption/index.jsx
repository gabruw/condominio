//#region Imports

import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import useConsumptionContext from 'storages/consumption/context';

//#endregion

const ChartGeneralConsumption = () => {
    const { consumptions } = useConsumptionContext();

    return (
        <ResponsiveContainer width='50%' height='50%'>
            <BarChart
                width={500}
                height={300}
                data={consumptions}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
            >
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='unity' />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey='total' fill='#8884d8' />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default ChartGeneralConsumption;
