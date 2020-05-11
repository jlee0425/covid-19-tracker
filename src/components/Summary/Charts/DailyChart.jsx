import React from 'react'
import {
  BarChart,
  Bar,
  Brush,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'

export default props => {
  const startDate = props.data.length - 20
  return (
    <ResponsiveContainer>
      <BarChart
        data={props.data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='date' />
        <YAxis />
        <Tooltip />
        <Legend verticalAlign='top' />
        <Bar dataKey='confirmed' fill='#8884d8' />
        <Bar dataKey='recovered' fill='#82ca9d' />
        <Bar dataKey='deaths' fill='#ffc658' />
        <Brush startIndex={startDate} dataKey='date' height={20} />
      </BarChart>
    </ResponsiveContainer>
  )
}
