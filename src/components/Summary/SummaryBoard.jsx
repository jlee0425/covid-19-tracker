import React from 'react'
import { Grid, Container, Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import CustomCard from './Card/CustomCard'
import Title from './Title'
const useStyle = makeStyles({
  container: {
    padding: 10,
    margin: 10
  },
  title: {
    textAlign: 'center'
  },
  card: {
    alignItems: 'center'
  }
})
const timeDiff = (start, end) => {
  const elapsed = start - end
  const hrs = Math.floor(elapsed / (1000 * 3600))
  const min = Math.floor(elapsed / (1000 * 60))
  const sec = Math.floor(elapsed / 1000)
  return [hrs % 24, min % 60, sec % 60]
}
const timeAgo = time => {
  let res = ''
  if (time[0] > 0) {
    res += `${time[0]} hours `
  }
  if (time[1] > 0) {
    res += `${time[1]} minutes `
  }
  res += `${time[2]} seconds ago`

  return res
}
export default props => {
  const classes = useStyle()

  const data = {
    main: {
      Confirmed: {
        totalNumber: props.data.confirmed,
        newNumber: props.data.newConfirmed
      },
      Active: {
        totalNumber: props.data.active
      },
      Recovered: {
        totalNumber: props.data.recovered
      },
      Deaths: {
        totalNumber: props.data.deaths,
        newNumber: props.data.newDeaths
      }
    },
    sub: {
      Tests: {
        totalNumber: props.data.tests
      },
      'Recovery Rate': {
        totalNumber: props.data.rr
      },
      'Fatality Rate': {
        totalNumber: props.data.mr
      }
    }
  }
  const elapsed = timeDiff(new Date(), new Date(props.data?.date))
  return (
    <Container className={classes.container}>
      <Box className={classes.title}>
        <Title>Global Data</Title>
        <Typography variant='caption' gutterBottom>
          Last Updated: {timeAgo(elapsed)}
        </Typography>
      </Box>
      <Grid container spacing={3}>
        {Object.keys(data.main).map(key => (
          <Grid item xs key={key} className={classes.card}>
            <CustomCard data={data.main[key]} title={key} />
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={3} alignItems='center' justify='center'>
        {Object.keys(data.sub).map(key => (
          <Grid item xs sm={3} md={3} key={key} className={classes.card}>
            <CustomCard data={data.sub[key]} title={key} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
