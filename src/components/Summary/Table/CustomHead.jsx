import React from 'react'
import {
  TableHead,
  TableRow,
  TableCell,
  TableSortLabel
} from '@material-ui/core'

const headers = [
  'Country',
  'Confirmed',
  'Active',
  'Recovered',
  'Deaths',
  'Tests',
  'Recovery Rate',
  'Mortality Rate',
  'Tests Per Million'
]

export default ({ classes, order, orderBy, onRequestSort }) => {
  const createSortHandler = prop => event => {
    onRequestSort(event, prop)
  }
  return (
    <TableHead>
      <TableRow>
        {headers.map(header => (
          <TableCell
            align='right'
            key={header}
            sortDirection={orderBy === header ? order : 'asc'}
          >
            <TableSortLabel
              active={orderBy === header}
              direction={orderBy === header ? order : 'asc'}
              onClick={createSortHandler(header)}
            >
              {header}
              {orderBy === header ? (
                <span className={classes.visuallyHidden}>
                  {order === 'asc' ? 'sorted ascending' : 'sorted descending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}
