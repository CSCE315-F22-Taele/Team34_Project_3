import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Page A',
    Sales: 2400,
    Orders: 2400,
  },
  {
    name: 'Page B',
    Sales: 1398,
    Orders: 2210,
  },
  {
    name: 'Page C',
    Sales: 9800,
    Orders: 2290,
  },
  {
    name: 'Page D',
    Sales: 3908,
    Orders: 2000,
  },
  {
    name: 'Page E',
    Sales: 4800,
    Orders: 2181,
  },
  {
    name: 'Page F',
    Sales: 3800,
    Orders: 2500,
  },
  {
    name: 'Page G',
    Sales: 4300,
    Orders: 2100,
  },
];

export default class LineGraph extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-line-chart-kec3v';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
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
          <Line type="monotone" dataKey="Sales" stroke="#cf0d2e" activeDot={{ r: 4 }} />
          <Line type="monotone" dataKey="Orders" stroke="black" activeDot={{ r: 4 }}/>
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
