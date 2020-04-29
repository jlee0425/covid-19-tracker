import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@material-ui/core'

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
})
const CustomRow = ({
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
        {((deaths / confirmed) * 100).toFixed(2)}%
      </TableCell>
      <TableCell align='right'>
        {((recovered / confirmed) * 100).toFixed(2)}%
      </TableCell>
      <TableCell align='right'>
        {testsPM ? testsPM.toLocaleString() : 'N/A'}
      </TableCell>
    </TableRow>
  )
}
export default ({ data }) => {
  const classes = useStyles()
  console.log('table data', data)
  if (!data) return null
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Country</TableCell>
            <TableCell align='right'>Confirmed</TableCell>
            <TableCell align='right'>Active</TableCell>
            <TableCell align='right'>Recovered</TableCell>
            <TableCell align='right'>Deaths</TableCell>
            <TableCell align='right'>Tests</TableCell>
            <TableCell align='right'>Mortality&nbsp;Rate</TableCell>
            <TableCell align='right'>Recovery&nbsp;Rate</TableCell>
            <TableCell align='right'>Tests Per Million</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(country => (
            <CustomRow data={country} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
