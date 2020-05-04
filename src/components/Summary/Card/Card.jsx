import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardContent, Typography } from '@material-ui/core'
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
          {title.toUpperCase()}
        </Typography>
        <Typography variant='h5' component='h5'>
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
