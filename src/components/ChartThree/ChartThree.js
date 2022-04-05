import React from 'react';
import {  Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const ChartThree = ({chart}) => {
    return (

        <div>
            <h2 className='text-center my-10 font-semibold text-fuchsia-700 text-xl'>Investment Vs. Revenue</h2>
            <ResponsiveContainer width={'99%'} height={300}>   
                <BarChart
                    width={500}
                    height={300}
                    data={chart}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="investment" fill="#8884d8" stackId="a" />
                    <Bar dataKey="revenue" fill="#82ca9d" stackId="a" />
                </BarChart> 
            </ResponsiveContainer>
        </div>
    );
};

export default ChartThree;