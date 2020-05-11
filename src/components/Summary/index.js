import React from 'react'
import { Container, Typography, makeStyles } from '@material-ui/core'

import SummaryTable from './SummaryTable'
import SummaryBoard from './SummaryBoard'
import SummaryChart from './SummaryCharts'

const useStyle = makeStyles({
  container: {
    width: '90vw',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column'
  }
})
export default props => {
  if (!props || !props.cardData) {
    return <Typography>Loading data...</Typography>
  }
  const classes = useStyle()
  return (
    <Container className={classes.container}>
      <SummaryBoard data={props.cardData} />
      <SummaryChart
        data={props.chartData}
        countryName={props.countryName}
        countries={props.countries}
      />
      <SummaryTable data={props.tableData} />
    </Container>
  )
}
