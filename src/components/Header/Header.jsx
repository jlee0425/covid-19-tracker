import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Fab from '@material-ui/core/Fab'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import BtnToTop from './BtnToTop'

const timeDiff = (start, end) => {
  const elapsed = start - end
  const hrs = Math.floor(elapsed / (1000 * 3600))
  const min = Math.floor(elapsed / (1000 * 60))
  const sec = Math.floor(elapsed / 1000)
  return [hrs % 24, min % 60, sec % 60]
}
export default function BackToTop (props) {
  const elapsed = timeDiff(new Date(), new Date(props.lastUpdated))
  console.log(`date: ${new Date()}`)
  console.log(`props: ${new Date(props.lastUpdated)}`)
  console.log('elapsed: ', elapsed)
  console.log('timeDiff: ', timeDiff(new Date(), new Date(props.lastUpdated)))
  // console.log(elapsed.getHours(), elapsed.getMinutes(), elapsed.getSeconds())
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <Typography variant='h6'>COVID 19 Board</Typography>
          <Typography>
            Last Updated: {elapsed[0]}hrs {elapsed[1]}min {elapsed[2]}sec ago{' '}
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar id='back-to-top-anchor' />
      <BtnToTop {...props}>
        <Fab color='primary' size='small' aria-label='scroll back to top'>
          <KeyboardArrowUpIcon />
        </Fab>
      </BtnToTop>
    </React.Fragment>
  )
}
