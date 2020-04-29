import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import CountUp from 'react-countup'

const useStyles = makeStyles({
  root: {
    minWidth: 275
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
})

export default ({ data: { title, totalNumber, newNumber } }) => {
  const classes = useStyles()
  if (!title) return null
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color='textSecondary'
          gutterBottom
        >
          {title}
        </Typography>
        <Typography variant='h5' component='h2'>
          {Number.isInteger(totalNumber) ? (
            <CountUp
              start={0}
              end={totalNumber}
              duration={2.75}
              separator=','
            />
          ) : (
            <Typography variant='h5'>{totalNumber}%</Typography>
          )}
        </Typography>
        {newNumber ? (
          <Typography className={classes.pos} color='textSecondary'>
            +{' '}
            <CountUp start={0} end={newNumber} duration={2.75} separator=',' />
          </Typography>
        ) : null}
      </CardContent>
    </Card>
  )
}
