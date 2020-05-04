import React from 'react'
import {
  TableHead,
  TableRow,
  TableCell,
  TableSortLabel
} from '@material-ui/core'

const headers = [
  { id: 'country', title: 'Country' },
  { id: 'confirmed', title: 'Confirmed' },
  { id: 'active', title: 'Active' },
  { id: 'recovered', title: 'Recovered' },
  { id: 'deaths', title: 'Deaths' },
  { id: 'tests', title: 'Tests' },
  { id: 'rr', title: 'Recovery Rate' },
  { id: 'mr', title: 'Mortality Rate' },
  { id: 'tpm', title: 'Tests Per Million' }
]

export default ({ classes, order, orderBy, onRequestSort }) => {
  const createSortHandler = prop => event => {
    onRequestSort(event, prop)
  }
  console.log('orderBy', orderBy)
  return (
    <TableHead>
      <TableRow>
        {headers.map(header => (
          <TableCell
            align='right'
            key={header.id}
            sortDirection={orderBy === header.id ? order : 'asc'}
          >
            <TableSortLabel
              active={orderBy === header.id}
              direction={orderBy === header.id ? order : 'asc'}
              onClick={createSortHandler(header.id)}
            >
              {header.title}
              {orderBy === header.id ? (
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
