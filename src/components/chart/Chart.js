import React from 'react';
import { BarChart,CartesianGrid,XAxis,YAxis,Tooltip,Legend,Bar } from 'recharts';

const Chart = () => {

    const data =  [
        {
          "name": "Page A",
      
          "pv": 2400
        },
        {
          "name": "Page B",
        
          "pv": 1398
        },
        {
          "name": "Page C",
        
          "pv": 3000
        },
        
        
      ]
  return (
    <div>
        <BarChart width={150} height={100} data={data}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Bar dataKey="pv" fill="#8884d8" />
  
</BarChart>
    </div>
  )
}

export default Chart