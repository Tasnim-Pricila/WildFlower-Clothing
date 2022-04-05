import React, { useEffect, useState } from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart,  Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {

    const [chart, setChart] = useState([]);
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setChart(data))
    },[])

    return (
        <>    
            <div className='grid grid-cols-1 md:grid-cols-2 gap-x-36 md:px-36 px-4'>        
                <div className='mt-10'>
                    
                    <LineChart 
                        width={500} 
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
                    
                </div>
                
                <div className='mt-10'> 
                           
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
                   
                </div>
                <div className='mt-10'>
                    
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
                    
                </div>

                <div className='mt-10'>   
                    
                    <PieChart width={500} height={500}>
                        <Pie data={chart} dataKey="investment" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                        <Pie data={chart} dataKey="revenue" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                    </PieChart>   
                    
                </div>
            </div>
        </>
    );
};

export default Dashboard;