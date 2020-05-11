import React from 'react'
import { Paper } from '@material-ui/core'
import Card from './Card'

export default ({ data, title }) => (
  <Paper elevation={2}>
    <Card
      data={{
        title: title,
        totalNumber: data?.totalNumber,
        newNumber: data?.newNumber
      }}
      style={{ alignItems: 'center' }}
    />
  </Paper>
)
