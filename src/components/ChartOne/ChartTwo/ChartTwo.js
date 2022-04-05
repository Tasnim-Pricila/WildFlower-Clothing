import React from 'react';
import { Area, AreaChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const ChartTwo = ({chart}) => {
    return (
        <div>
            <h2 className='text-center my-10 font-semibold text-fuchsia-700 text-xl'>Investment Vs. Revenue</h2>
            <ResponsiveContainer width={'99%'} height={300}>
                <AreaChart
                    width={500}
                    height={300}
                    data={chart}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 0,
                        bottom: 5,
                    }} >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend></Legend>
                    <Area type="monotone" dataKey="investment" stackId="1" stroke="#8884d8" fill="#8884d8" />
                    <Area type="monotone" dataKey="revenue" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                </AreaChart> 
        </ResponsiveContainer>
        </div>   
    );
};

export default ChartTwo;