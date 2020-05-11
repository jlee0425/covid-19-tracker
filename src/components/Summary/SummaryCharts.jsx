import React, { useState, useEffect } from 'react'
import { Paper, makeStyles, Container, TextField } from '@material-ui/core'
import Autocomplete from '@material-ui/lab/Autocomplete'

import { fetchCountryHistory } from '../../api'
import StackChart from './Charts/StackChart'
import DailyChart from './Charts/DailyChart'
import Title from './Title'

const useStyle = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    margin: 10,
    textAlign: 'center'
  },
  content: {
    padding: 10,
    margin: 10,
    alignSelf: 'center',
    width: '100%',
    height: '45vw',
    maxHeight: 600
  }
})
export default props => {
  const classes = useStyle()
  const [country, setCountry] = useState(props.countryName)
  const [countryData, setCountryData] = useState(props.data)
  useEffect(() => {
    pullCountryData(country)
  }, [country])
  const pullCountryData = async countryName => {
    try {
      const data = await fetchCountryHistory(countryName)
      if (data) setCountryData(data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Container className={classes.container}>
      <Title>Daily Statistics in</Title>
      <Autocomplete
        value={country}
        onChange={(event, newValue) => {
          setCountry(newValue)
        }}
        options={props.countries.sort((c1, c2) => c1[0].localeCompare(c2[0]))}
        groupBy={country => country[0]}
        style={{ width: 200, alignSelf: 'center' }}
        renderInput={params => <TextField {...params} variant='standard' />}
      />
      <Paper elevation={2} className={classes.content}>
        {country ? (
          <StackChart data={countryData.total} />
        ) : (
          <StackChart data={props.data.total} />
        )}
      </Paper>
      <Paper elevation={2} className={classes.content}>
        {country ? (
          <DailyChart data={countryData.daily} />
        ) : (
          <DailyChart data={props.data.daily} />
        )}
      </Paper>
    </Container>
  )
}
