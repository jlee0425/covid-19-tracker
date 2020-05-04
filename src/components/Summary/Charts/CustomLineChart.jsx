import React from 'react'
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Line,
  Tooltip,
  Brush
} from 'recharts'

export default ({ props }) => {
  return (
    <div>
      <LineChart
        width={500}
        height={200}
        data={props.data}
        syncId='anyId'
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0
        }}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='date' hide />
        <YAxis />
        <Tooltip />
        <Line
          type='monotone'
          dataKey={props.title}
          stroke={props.color}
          fill={props.color}
        />
        {props.brush ? <Brush startIndex={props.startIndex} /> : null}
      </LineChart>
    </div>
  )
}
