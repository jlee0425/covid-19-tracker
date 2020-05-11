import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import CssBaseline from '@material-ui/core/CssBaseline'
import Fab from '@material-ui/core/Fab'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import BtnToTop from './BtnToTop'

export default props => {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <Typography variant='h6'>COVID 19 Board</Typography>
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
