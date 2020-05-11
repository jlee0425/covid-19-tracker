import React from 'react'
import { TableRow, TableCell, Typography } from '@material-ui/core'

export default ({
  data: {
    country,
    active,
    confirmed,
    deaths,
    newConfirmed,
    newDeaths,
    recovered,
    tests,
    tpm,
    rr,
    mr,
    flag
  }
}) => {
  return (
    <TableRow hover key={country}>
      <TableCell component='th' scope='row'>
        <img alt='flag' src={flag} style={{ height: '1em' }} />
        &nbsp;
        {country}
      </TableCell>
      <TableCell align='right'>
        {confirmed.toLocaleString()}
        <br />
        {newConfirmed ? (
          <Typography variant='caption' color='error' display='inline-block'>
            (+{newConfirmed.toLocaleString()})
          </Typography>
        ) : null}
      </TableCell>
      <TableCell align='right'>{active.toLocaleString()}</TableCell>
      <TableCell align='right'>
        {recovered ? recovered.toLocaleString() : 'N/A'}
      </TableCell>
      <TableCell align='right'>
        {deaths.toLocaleString()}
        <br />
        <Typography variant='caption' color='error'>
          {newDeaths ? `(+${newDeaths.toLocaleString()})` : null}
        </Typography>
      </TableCell>
      <TableCell align='right'>
        {tests ? tests.toLocaleString() : 'N/A'}
      </TableCell>
      <TableCell align='right'>{rr > 0 ? rr + '%' : 'N/A'}</TableCell>
      <TableCell align='right'>{mr > 0 ? mr + '%' : 'N/A'}</TableCell>
      <TableCell align='right'>{tpm ? tpm.toLocaleString() : 'N/A'}</TableCell>
    </TableRow>
  )
}
