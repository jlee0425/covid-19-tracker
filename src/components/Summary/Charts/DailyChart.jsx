import React from 'react'
import { Brush } from 'recharts'
import CustomLineChart from './CustomLineChart'

export default props => {
  const startDate = props.data.length - 30
  return (
    <React.Fragment>
      <CustomLineChart
        props={{
          data: props.data,
          title: 'newConfirmed',
          color: '#8884d8',
          brush: true,
          startIndex: startDate
        }}
      />
      <Brush startIndex={startDate} />
      <CustomLineChart
        props={{ data: props.data, title: 'newRecovered', color: '#82ca9d' }}
      />
      <CustomLineChart
        props={{ data: props.data, title: 'newDeaths', color: '#ffc658' }}
      />
    </React.Fragment>
  )
}
