import React from 'react'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
export default props => {
  return (
    <Typography>
      <Link href={props.src} variant='subtitle2'>
        {props.title}
      </Link>
    </Typography>
  )
}
