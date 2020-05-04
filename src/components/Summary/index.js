import React from 'react'
import { Container, Typography } from '@material-ui/core'

import SummaryTable from './SummaryTable'
import SummaryBoard from './SummaryBoard'
import SummaryChart from './SummaryCharts'

export default props => {
  if (!props || !props.cardData) {
    return <Typography>Loading...</Typography>
  }
  const data = {
    main: {
      confirmed: {
        total: props.cardData.confirmed,
        new: props.cardData.newConfirmed
      },
      active: {
        total: props.cardData.active
      },
      recovered: {
        total: props.cardData.recovered
      },
      deaths: {
        total: props.cardData.deaths,
        new: props.cardData.newDeaths
      }
    },
    sub: {
      tests: {
        total: props.cardData.tests
      },
      'mortality rate': {
        total: props.cardData.mr
      },
      'recovery rate': {
        total: props.cardData.rr
      }
    }
  }
  return (
    <div>
      <Container>
        <SummaryBoard data={data} />
      </Container>
      <SummaryChart data={props.chartData} />
      <SummaryTable data={props.tableData} />
    </div>
  )
}
