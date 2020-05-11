import React from 'react'
import {
  TableHead,
  TableRow,
  TableCell,
  TableSortLabel
} from '@material-ui/core'

const headers = [
  { id: 'country', title: 'Country', minWidth: 170 },
  { id: 'confirmed', title: 'Confirmed', minWidth: 100 },
  { id: 'active', title: 'Active', minWidth: 100 },
  { id: 'recovered', title: 'Recovered', minWidth: 80 },
  { id: 'deaths', title: 'Deaths', minWidth: 70 },
  { id: 'tests', title: 'Tests', minWidth: 100 },
  { id: 'rr', title: 'RR', minWidth: 50 },
  { id: 'mr', title: 'FR', minWidth: 50 },
  { id: 'tpm', title: 'TPM', minWidth: 100 }
]

export default ({ order, orderBy, onRequestSort }) => {
  const createSortHandler = prop => event => {
    onRequestSort(event, prop)
  }
  return (
    <TableHead>
      <TableRow>
        {headers.map(header => (
          <TableCell
            align='right'
            key={header.id}
            style={{ minWidth: header.minWidth }}
            sortDirection={orderBy === header.id ? order : 'asc'}
          >
            <TableSortLabel
              active={orderBy === header.id}
              direction={orderBy === header.id ? order : 'asc'}
              onClick={createSortHandler(header.id)}
            >
              {header.title}
              {orderBy === header.id ? (
                <span
                  style={{
                    border: 0,
                    clip: 'rect(0 0 0 0)',
                    height: 1,
                    margin: -1,
                    overflow: 'hidden',
                    padding: 0,
                    position: 'absolute',
                    top: 20,
                    width: 1
                  }}
                >
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
