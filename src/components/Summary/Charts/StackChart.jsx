import React from 'react'
import {
  AreaChart,
  Area,
  XAxis,
  Legend,
  YAxis,
  CartesianGrid,
  Tooltip,
  Brush,
  ResponsiveContainer
} from 'recharts'
export default props => {
  const startDate = props.data.length - 60
  return (
    <ResponsiveContainer>
      <AreaChart
        data={props.data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <Legend verticalAlign='top' />
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='date' />
        <YAxis />
        <Tooltip />
        <Area
          type='monotone'
          dataKey='confirmed'
          stroke='#8884d8'
          fill='#8884d8'
        />
        <Area
          type='monotone'
          dataKey='recovered'
          stroke='#82ca9d'
          fill='#82ca9d'
        />
        <Area
          type='monotone'
          dataKey='deaths'
          stroke='#ffc658'
          fill='#ffc658'
        />
        <Brush startIndex={startDate} dataKey='date' height={20} />
      </AreaChart>
    </ResponsiveContainer>
  )
}
