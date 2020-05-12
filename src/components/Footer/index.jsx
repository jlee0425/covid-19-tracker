import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Link from './Link'

export default () => {
  return (
    <Container style={{ margin: 50 }}>
      <Typography variant='h6'>Source</Typography>
      <Link
        src='https://www.worldometers.info/coronavirus/'
        title='worldometers'
      />
      <Link
        src='https://github.com/CSSEGISandData/COVID-19/tree/master/csse_covid_19_data/csse_covid_19_time_series'
        title='JHUCSSE'
      />
      <Link
        src='https://github.com/nytimes/covid-19-data'
        title='New York Times'
      />
      <Link src='https://corona.lmao.ninja/docs/' title='Novel Covid API' />
    </Container>
  )
}
