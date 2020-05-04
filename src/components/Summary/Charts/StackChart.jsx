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

const renderQuarterTick = tickProps => {
  const { x, y, payload } = tickProps
  const { value, offset } = payload
  const date = new Date(value)
  const month = date.toLocaleString('default', { month: 'long' })

  return (
    <text x={x + offset} y={y - 4} textAnchor='middle'>
      {month}
    </text>
  )
}

const renderMonth = tick => {
  console.log('tick', tick)
  const date = new Date(tick)
  console.log('tick date', date)
  return ''
}
export default props => {
  const startDate = props.data.map(day => day.confirmed).lastIndexOf(0) - 1
  const data = props.data.slice(startDate > 0 ? startDate : 0)
  return (
    // <ResponsiveContainer width='900' height='80%'>
    <AreaChart
      width={1000}
      height={400}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0
      }}
    >
      <Legend verticalAlign='top' height={36} />
      <CartesianGrid strokeDasharray='3 3' />
      {/* <Brush dataKey='date' height={30} stroke='#8884d8' /> */}
      <XAxis dataKey='date' tickFormatter={renderMonth} />
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
      <Area type='monotone' dataKey='deaths' stroke='#ffc658' fill='#ffc658' />
    </AreaChart>
    // </ResponsiveContainer>
  )
}
