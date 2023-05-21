import React from 'react';
import { LineChart,CartesianGrid,XAxis,YAxis,Tooltip,Legend,Line } from 'recharts';

const BoxChart = () => {

    const data =  [
        {
          "name": "Page A",
          
          "pv": 900,
          "amt": 2400
        },
        {
          "name": "Page B",
          
          "pv": 2500,
          "amt": 2210
        },
        {
          "name": "Page C",
         
          "pv": 1400,
          "amt": 2290
        },   
        {
          "name": "Page D",
         
          "pv": 1700,
          "amt": 1890
        }, 
      ]
    
  return (
    <div>
        <LineChart width={150} height={100} data={data}
  margin={{ top: 5, right: 30, left: 5, bottom: 5 }}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Line type="monotone" dataKey="pv" stroke="#8884d8" />  
</LineChart>
    </div>
  )
}

export default BoxChart;