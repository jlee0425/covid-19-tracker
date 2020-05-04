import React from 'react'
import { Grid, Paper } from '@material-ui/core'
import CustomCard from './Card/CustomCard'

export default ({ data: { main, sub } }) => {
  return (
    <Paper elevation={2}>
      <Grid container spacing={3} justify='center' direction='row'>
        {Object.keys(main).map(key => (
          <Grid container item xs key={key.toString()}>
            <CustomCard data={main[key]} title={key.toString()} />
          </Grid>
        ))}
        <Grid container item xs direction='column' justify='center'>
          {Object.keys(sub).map(key => (
            <CustomCard data={sub[key]} title={key.toString()} />
          ))}
        </Grid>
      </Grid>
    </Paper>
  )
}
