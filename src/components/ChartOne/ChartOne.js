import React from 'react';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const ChartOne = ({chart}) => {
    return (

        <div>
            <h2 className='text-center my-10 font-semibold text-fuchsia-700 text-xl'>Month wise sell</h2>
            <ResponsiveContainer width={"99%"} height={300}>  
                <LineChart 
                    width={400} 
                    height={300} 
                    data={chart}
                    margin={{ 
                        top: 5, 
                        right: 30, 
                        left: 20, 
                        bottom: 5 
                    }}> 
                    <CartesianGrid strokeDasharray="3 3"> </CartesianGrid>
                    <XAxis dataKey={'month'}> </XAxis>
                    <YAxis> </YAxis>
                    <Tooltip> </Tooltip>
                    <Legend></Legend>
                    <Line dataKey={'sell'} stroke="purple" type='monotone'> </Line>
                </LineChart>
            </ResponsiveContainer>    
        </div>
       
    );
};

export default ChartOne;