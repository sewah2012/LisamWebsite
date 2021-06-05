import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'
import { useDispatch, useSelector } from 'react-redux'
import { getAlumini } from '../../Redux/actions/newsActions'
import {
  Button,
  CircularProgress,
  FormControl,
  InputLabel,
  Select,
  TextField,
} from '@material-ui/core'

const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'discipline', label: 'Discipline', minWidth: 100 },
  { id: 'level', label: 'Degree Earned', minWidth: 100 },
  { id: 'institution', label: 'Institution', minWidth: 100 },
  { id: 'year', label: 'Year of Completion', minWidth: 100 },
]

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 'fit-content',
  },
})

export default function AluminiData() {
  const dispatch = useDispatch()
  const { loading, alumini } = useSelector((state) => state.data)
  const [data, setData] = useState([alumini])
  const classes = useStyles()
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [search, setSearch] = useState({
    name: '',
    institution: '',
    level: '',
    year: '',
    discipline: '',
  })

  const [searchOption, setSearchOption] = useState('name')

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  useEffect(() => {
    dispatch(getAlumini())

    return () => {}
  }, [dispatch])

  useEffect(() => {
    if (!loading) {
      setData(alumini)
    }
    return () => {}
  }, [alumini, loading])

  const onSearchChange = (event) => {
    setSearch({
      ...search,
      [event.target.name]: event.target.value,
    })

    setData(alumini)
  }

  const searchOptionChange = (event) => {
    setSearchOption(event.target.value)
  }

  const searchButton = () => {
    let newData

    switch (searchOption) {
      case 'name':
        newData = data.filter((x) =>
          x.name.toLowerCase().includes(search.name.toLowerCase()),
        )

        break
      case 'year':
        newData = data.filter((x) =>
          x.year.toLowerCase().includes(search.name.toLowerCase()),
        )
        break
      case 'institution':
        newData = data.filter((x) =>
          x.institution.toLowerCase().includes(search.name.toLowerCase()),
        )
        break

      case 'discipline':
        newData = data.filter((x) =>
          x.discipline.toLowerCase().includes(search.name.toLowerCase()),
        )
        break
      case 'level':
        newData = data.filter((x) =>
          x.level.toLowerCase().includes(search.name.toLowerCase()),
        )
        break
      default:
        setData(alumini)

        break
    }

    setData(newData)
  }

  console.log(data)
  return (
    <Paper className={classes.root}>
      {loading ? (
        <CircularProgress />
      ) : (
        <div style={{ padding: '1rem' }}>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}
          >
            <div style={{ margin: '1rem', width: '10rem' }}>
              <FormControl
                className={classes.formControl}
                style={{ margin: '1rem', width: '10rem' }}
              >
                <InputLabel htmlFor="age-native-simple">Filter By</InputLabel>
                <Select
                  native
                  //   value={state.age}
                  onChange={searchOptionChange}
                  inputProps={{
                    name: 'age',
                    id: 'age-native-simple',
                  }}
                >
                  {/* <option aria-label="None" value="" /> */}
                  <option value="name">Name</option>
                  <option value="institution">Institution</option>
                  <option value="year">Year</option>
                  <option value="discipline">Discipline</option>
                  <option value="level">Degree</option>
                </Select>
              </FormControl>
            </div>
            <TextField
              name="name"
              type={searchOption === 'year' ? 'number' : 'text'}
              placeholder={`Search by ${searchOption} `}
              variant="outlined"
              style={{ margin: '1rem' }}
              value={search.name}
              onChange={onSearchChange}
            />

            <Button
              color="primary"
              onClick={searchButton}
              variant="contained"
              style={{ margin: '1rem' }}
            >
              Search
            </Button>
          </div>
          {/* <br />
          <br /> */}
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
                </TableRow>
              </TableHead>
              <TableBody>
                {data
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
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
                              {column.format && typeof value === 'number'
                                ? column.format(value)
                                : value}
                            </TableCell>
                          )
                        })}
                      </TableRow>
                    )
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </div>
      )}
    </Paper>
  )
}
