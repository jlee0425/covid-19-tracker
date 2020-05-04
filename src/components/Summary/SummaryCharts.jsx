import React, { Fragment } from 'react'
import { Container } from '@material-ui/core'
import StackChart from './Charts/StackChart'
import DailyChart from './Charts/DailyChart'

export default props => {
  return (
    <Fragment>
      <Container>
        {/* <StackChart data={props.data} />
        <DailyChart data={props.data} /> */}
      </Container>
    </Fragment>
  )
}
