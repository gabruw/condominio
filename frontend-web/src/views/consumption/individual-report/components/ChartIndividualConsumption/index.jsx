//#region Imports

import React from 'react';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import useConsumptionContext from 'storages/consumption/context';

//#endregion

const ChartIndividualConsumption = () => {
    const { consumptions } = useConsumptionContext();

    return (
        <ResponsiveContainer width='50%' height='50%'>
            <LineChart
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
                <XAxis dataKey='readDate' />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type='monotone' dataKey='revision' stroke='#8884d8' activeDot={{ r: 8 }} />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default ChartIndividualConsumption;
