import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Table,
  TableBody,
  TableContainer,
  Paper,
  TablePagination
} from '@material-ui/core'

import CustomHead from './Table/CustomHead'
import CustomRow from './Table/CustomRow'

const useStyles = makeStyles({
  root: {
    width: '100%'
  },
  paper: {
    width: '100%'
  },
  table: {
    minWidth: 750
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1
  }
})

export default ({ data }) => {
  const classes = useStyles()
  const [order, setOrder] = React.useState('asc')
  const [orderBy, setOrderBy] = React.useState('confirmed')
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)
  const handleSortRequest = prop => {
    const isAsc = orderBy === prop && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(prop)
  }

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value))
    setPage(0)
  }
  if (!data) return null
  return (
    <React.Fragment>
      <TableContainer component={Paper}>
        <Table className={classes.table} stickyHeader>
          <CustomHead
            classes={classes}
            order={order}
            orderBy={orderBy}
            onRequestSort={handleSortRequest}
          />
          <TableBody>
            {data.map(country => (
              <CustomRow data={country} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 20, 50]}
        rowsPerPage={rowsPerPage}
        count={data.length}
      />
    </React.Fragment>
  )
}
