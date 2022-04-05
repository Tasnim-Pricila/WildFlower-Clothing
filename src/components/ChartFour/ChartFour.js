import React from 'react';
import {  Pie, PieChart, ResponsiveContainer } from 'recharts';

const ChartFour = ({chart}) => {
    return (
        <div>  
            <h2 className='text-center my-10 font-semibold text-fuchsia-700 text-xl'>Investment Vs. Revenue</h2>
            <ResponsiveContainer width={'99%'} height={300}>  
                <PieChart 
                    width={350} 
                    height={300}>
                    <Pie data={chart} dataKey="investment" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                    <Pie data={chart} dataKey="revenue" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                </PieChart>   
            </ResponsiveContainer>     
        </div>
    );
};

export default ChartFour;