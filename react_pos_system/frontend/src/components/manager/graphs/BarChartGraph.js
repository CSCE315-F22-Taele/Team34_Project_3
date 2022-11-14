import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Page A',
    Customers: 4000,
    amt: 2400,
  },
  {
    name: 'Page B',
    Customers: 3000,
    amt: 2210,
  },
  {
    name: 'Page C',
    Customers: 2000,
    amt: 2290,
  },
  {
    name: 'Page D',
    Customers: 2780,
    amt: 2000,
  },
  {
    name: 'Page E',
    Customers: 1890,
    amt: 2181,
  },
  {
    name: 'Page F',
    Customers: 2390,
    amt: 2500,
  },
  {
    name: 'Page G',
    Customers: 3490,
    amt: 2100,
  },
];

export default class BarChartGraph extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-bar-chart-tpz8r';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Customers" fill="#cf0d2e" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
