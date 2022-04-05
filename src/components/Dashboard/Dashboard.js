import React, { useEffect, useState } from 'react';
import ChartFour from '../ChartFour/ChartFour';
import ChartOne from '../ChartOne/ChartOne';
import ChartTwo from '../ChartOne/ChartTwo/ChartTwo';
import ChartThree from '../ChartThree/ChartThree';

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
                <ChartOne chart={chart}> </ChartOne>
                <ChartTwo chart={chart}> </ChartTwo>
                <ChartThree chart={chart}></ChartThree>
                <ChartFour chart={chart}> </ChartFour>
            </div>
        </>
    );
};

export default Dashboard;