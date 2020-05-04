import React from 'react'
import { TableRow, TableCell } from '@material-ui/core'

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
    <TableRow key={country}>
      <TableCell component='th' scope='row'>
        <img alt='flag' src={flag} style={{ height: '1em' }} />
        &nbsp;
        {country}
      </TableCell>
      <TableCell align='right'>
        {confirmed.toLocaleString()}
        {newConfirmed ? `(+${newConfirmed.toLocaleString()})` : null}
      </TableCell>
      <TableCell align='right'>{active.toLocaleString()}</TableCell>
      <TableCell align='right'>
        {recovered ? recovered.toLocaleString() : 'N/A'}
      </TableCell>
      <TableCell align='right'>
        {deaths.toLocaleString()}
        {newDeaths ? `(+${newDeaths.toLocaleString()})` : null}
      </TableCell>
      <TableCell align='right'>
        {tests ? tests.toLocaleString() : 'N/A'}
      </TableCell>
      <TableCell align='right'>{rr > 0 ? rr : 'N/A'}</TableCell>
      <TableCell align='right'>{mr > 0 ? mr : 'N/A'}%</TableCell>
      <TableCell align='right'>{tpm ? tpm.toLocaleString() : 'N/A'}</TableCell>
    </TableRow>
  )
}
