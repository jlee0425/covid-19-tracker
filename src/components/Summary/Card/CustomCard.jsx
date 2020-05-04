import React from 'react'
import { Grid } from '@material-ui/core'
import Card from './Card'

export default ({ data, title }) => (
  <Grid item xs>
    <Card
      data={{
        title: title,
        totalNumber: data?.total,
        newNumber: data?.new
      }}
    />
  </Grid>
)
