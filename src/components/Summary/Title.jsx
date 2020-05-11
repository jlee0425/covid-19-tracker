import React from 'react'
import Typography from '@material-ui/core/Typography'
export default props => {
  return (
    <Typography
      component='h2'
      variant='h6'
      color='primary'
      gutterBottom
      style={{ textAlign: 'center' }}
    >
      {props.children}
    </Typography>
  )
}
