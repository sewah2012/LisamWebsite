import {
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from '@material-ui/core'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPastLeaders } from '../../../Redux/actions/newsActions'
import AddFormerLeaders from './AddFormerLeaders'
import DeleteFormerLeader from './DeleteFormerLeader'
import EditFormerLeader from './EditFormerLeader'

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 'fit-content',
  },
})

const columns = [
  { id: 'presidentName', label: 'Name of President', minWidth: 170 },
  { id: 'vicePresidentName', label: 'Name of Vice President', minWidth: 100 },
  { id: 'startYear', label: 'Year Inducted', minWidth: 100 },
  { id: 'endYear', label: 'End of Administration', minWidth: 100 },
]

const PastLeadershipPanel = () => {
  const dispatch = useDispatch()
  const { loading, pastLeaders } = useSelector((state) => state.data)
  const classes = useStyles()
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  useEffect(() => {
    dispatch(getPastLeaders())
    return () => {}
  }, [dispatch])

  return (
    <div>
      {/* <h1>Alumini Management Console</h1> */}

      <div className="dashboardBody">
        <AddFormerLeaders />

        <Paper className={classes.root}>
          {loading ? (
            <h2>loading data ...</h2>
          ) : (
            <div>
              <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="List of Graduates">
                  <TableHead>
                    <TableRow>
                      {columns.map((column) => (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          style={{ minWidth: column.minWidth }}
                        >
                          {column.label}
                        </TableCell>
                      ))}
                      <TableCell>ACTION</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {pastLeaders
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage,
                      )
                      .map((row) => {
                        return (
                          <TableRow
                            hover
                            role="checkbox"
                            tabIndex={-1}
                            key={row.code}
                          >
                            {columns.map((column) => {
                              const value = row[column.id]
                              return (
                                <TableCell key={column.id} align={column.align}>
                                  {value}
                                </TableCell>
                              )
                            })}
                            <TableCell>
                              <EditFormerLeader formerLeader={row} />
                              <DeleteFormerLeader aluminiID={row.officialId} />
                            </TableCell>
                          </TableRow>
                        )
                      })}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[5, 10, 15]}
                component="div"
                count={pastLeaders.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
              />
            </div>
          )}
        </Paper>
      </div>
    </div>
  )
}

export default PastLeadershipPanel
