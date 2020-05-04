import React from 'react'
import { Grid, Paper } from '@material-ui/core'
import CustomCard from './Card/CustomCard'

export default ({ data }) => (
  <Paper elevation={2}>
    <Grid container spacing={3} justify='center' direction='row'>
      {Object.keys(data).map(key => (
        <Grid container item xs key={key.toString()}>
          <CustomCard data={data[key]} title={key.toString()} />
        </Grid>
      ))}
      <Grid container item xs direction='column' justify='center'>
        <CustomCard data={data.tests} />
        <CustomCard
          data={{
            total: ((data.deaths.total / data.confirmed.total) * 100).toFixed(2)
          }}
          title={'Mortality Rate'}
        />
        <CustomCard
          data={{
            total: (
              (data.recovered.total / data.confirmed.total) *
              100
            ).toFixed(2)
          }}
          title={'Recovery Rate'}
        />
      </Grid>
    </Grid>
  </Paper>
)
