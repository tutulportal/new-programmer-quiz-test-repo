import React from 'react';
import './Statistics.css';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const Statistics = () => {
    const quizes = useLoaderData();
    console.log(quizes.data);
    return (
        <div className='chart-wrapper'>
            <h1>Total Quiz Statistics</h1>
        <BarChart
          width={500}
          height={300}
          data={quizes.data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
        <XAxis dataKey="name" scale="Total Quizes" padding={{ left: 10, right: 10 }} />
        <YAxis />
        <Tooltip />
          <Legend />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="total" fill="#1eaa6f" background={{ fill: '#eee' }} />
        </BarChart>
        </div>
    );
};

export default Statistics;
  