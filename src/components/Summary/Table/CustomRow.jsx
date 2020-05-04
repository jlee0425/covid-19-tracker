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
    testsPM,
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
      <TableCell align='right'>
        {recovered ? `${((recovered / confirmed) * 100).toFixed(2)}%` : 'N/A'}
      </TableCell>
      <TableCell align='right'>
        {((deaths / confirmed) * 100).toFixed(2)}%
      </TableCell>
      <TableCell align='right'>
        {testsPM ? testsPM.toLocaleString() : 'N/A'}
      </TableCell>
    </TableRow>
  )
}
