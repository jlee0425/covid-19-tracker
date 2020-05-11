import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardContent, Typography, Box } from '@material-ui/core'
import CountUp from 'react-countup'

const useStyles = makeStyles(theme => {
  return {
    root: {
      maxHeight: '100px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    content: {
      textAlign: 'center'
    },
    title: {
      ...theme.typography.body1
    },
    total: {
      ...theme.typography.subtitle1
    },
    new: {
      ...theme.typography.caption
    }
  }
})

export default ({ data: { title, totalNumber, newNumber } }) => {
  const classes = useStyles()
  if (!title) return null
  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <Typography
          className={classes.title}
          color='textSecondary'
          gutterBottom
        >
          {title}
        </Typography>
        <Box>
          <Box className={classes.total}>
            {Number.isInteger(totalNumber) ? (
              <CountUp start={0} end={totalNumber} duration={2} separator=',' />
            ) : (
              <Typography className={classes.total}>{totalNumber}%</Typography>
            )}
          </Box>
          {newNumber ? (
            <Box className={classes.new}>
              + <CountUp start={0} end={newNumber} duration={2} separator=',' />
            </Box>
          ) : null}
        </Box>
      </CardContent>
    </Card>
  )
}
