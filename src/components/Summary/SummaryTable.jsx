import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Container,
  Table,
  TableBody,
  TableContainer,
  TablePagination,
  Paper
} from '@material-ui/core'

import Title from './Title'
import Popover from './Table/Popover'
import CustomHead from './Table/CustomHead'
import CustomRow from './Table/CustomRow'

const useStyles = makeStyles({
  container: {
    width: '100%',
    magin: 10
  },
  tableContainer: {
    padding: 20
  },
  table: {
    maxHeight: 800
  }
})
// source: material-ui.com/components/tables
function descendingComparator (a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1
  }
  if (b[orderBy] > a[orderBy]) {
    return 1
  }
  return 0
}

function getComparator (order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy)
}

function stableSort (array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index])
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0])
    if (order !== 0) return order
    return a[1] - b[1]
  })
  return stabilizedThis.map(el => el[0])
}
export default ({ data }) => {
  const classes = useStyles()
  const [order, setOrder] = React.useState('desc')
  const [orderBy, setOrderBy] = React.useState('confirmed')
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)

  const handleSortRequest = (event, prop) => {
    const isAsc = orderBy === prop && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(prop)
    setPage(0)
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }
  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value))
    setPage(0)
  }
  if (!data) return null
  return (
    <Container className={classes.container}>
      <Title>Statistics Per Country</Title>
      <Paper elevation={2} className={classes.tableContainer}>
        <Popover />
        <TableContainer className={classes.table}>
          <Table
            stickyHeader
            aria-label='sticky table'
            className={classes.table}
          >
            <CustomHead
              className={classes.head}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleSortRequest}
            />
            <TableBody className={classes.body}>
              {stableSort(data, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(country => {
                  return <CustomRow data={country} key={country.country} />
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 20, 50]}
          rowsPerPage={rowsPerPage}
          count={data.length}
          page={page}
          onChangeRowsPerPage={handleChangeRowsPerPage}
          onChangePage={handleChangePage}
          component='div'
        />
      </Paper>
    </Container>
  )
}
