import React from 'react'
import { Container, Grid } from '@material-ui/core'

import Table from './Table'
import Chart from './Chart'
import Card from './Card'

export default props => {
  if (!props || !props.cardData) return null
  console.log('summary props', props)
  const {
    active,
    confirmed,
    deaths,
    newConfirmed,
    newDeaths,
    recovered,
    tests
  } = props.cardData

  const CustomGrid = (data, size) => (
    <Grid item xs={size}>
      <Card
        data={{
          title: Object.keys(data)[0].toUpperCase(),
          totalNumber: 0,
          newNumber: newConfirmed
        }}
      />
    </Grid>
  )
  return (
    <div>
      <Container>
        {props.cardData ? (
          <Grid container spacing={3} justify='center'>
            <Grid item xs={3}>
              <Card
                data={{
                  title: 'Confirmed',
                  totalNumber: confirmed,
                  newNumber: newConfirmed
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <Card
                data={{
                  title: 'Active',
                  totalNumber: active,
                  newNumber: newConfirmed
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <Card
                data={{
                  title: 'Recovered',
                  totalNumber: recovered
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <Card
                data={{
                  title: 'Deaths',
                  totalNumber: deaths,
                  newNumber: newDeaths
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <Grid container spacing={3} direction='column' justify='center'>
                <Grid item xs>
                  <Card
                    data={{
                      title: 'Tests',
                      totalNumber: tests
                    }}
                  />
                </Grid>
                <Grid item xs>
                  <Card
                    data={{
                      title: 'Mortality Rate',
                      totalNumber: ((deaths / confirmed) * 100).toFixed(2)
                    }}
                  />
                </Grid>
                <Grid item xs>
                  <Card
                    data={{
                      title: 'Recovery Rate',
                      totalNumber: ((recovered / confirmed) * 100).toFixed(2)
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        ) : null}
        <Chart />
      </Container>
      <Table data={props.tableData} />
    </div>
  )
}
