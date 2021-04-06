import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { useDispatch, useSelector } from 'react-redux';
import { getAlumini } from '../../Redux/actions/newsActions';

const columns = [
	{ id: 'name', label: 'Name', minWidth: 170 },
	{ id: 'discipline', label: 'Discipline', minWidth: 100 },
	{ id: 'level', label: 'Degree Earned', minWidth: 100 },
	{ id: 'institution', label: 'Institution', minWidth: 100 },
	{ id: 'year', label: 'Year of Completion', minWidth: 100 },

];

// function createData(name, code, population, size) {
//   const density = population / size;
//   return { name, code, population, size, density };
// }

const rows = [
	{
		name: 'Emmanuel Sahr Sewah',
		discipline: 'Software Design and Engineering',
		institution: 'Specialized Institute of Applied Technology',
		level: 'Associate Degree',
		year: '2021'
	},

	{
		name: 'Emmanuel Sahr Sewah',
		discipline: 'Software Design and Engineering',
		institution: 'Specialized Institute of Applied Technology',
		level: 'Associate Degree',
		year: '2021'
	},

	{
		name: 'Emmanuel Sahr Sewah',
		discipline: 'Software Design and Engineering',
		institution: 'Specialized Institute of Applied Technology',
		level: 'Associate Degree',
		year: '2021'
	}

];

const useStyles = makeStyles({
	root: {
		width: '100%',
	},
	container: {
		maxHeight: 440,
	},
});

export default function AluminiData() {
	const dispatch = useDispatch();
	const { loading, alumini } = useSelector(state => state.data)
	const classes = useStyles();
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(10);


	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};

	useEffect(() => {
		dispatch(getAlumini());
		return () => {

		}
	}, [])

	return (
		<Paper className={classes.root}>
			{loading ? <h2>loading data ...</h2> :
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
								</TableRow>
							</TableHead>
							<TableBody>
								{alumini.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
									return (
										<TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
											{columns.map((column) => {
												const value = row[column.id];
												return (
													<TableCell key={column.id} align={column.align}>
														{column.format && typeof value === 'number' ? column.format(value) : value}
													</TableCell>
												);
											})}
										</TableRow>
									);
								})}
							</TableBody>
						</Table>
					</TableContainer>
					<TablePagination
						rowsPerPageOptions={[10, 25, 100]}
						component="div"
						count={rows.length}
						rowsPerPage={rowsPerPage}
						page={page}
						onChangePage={handleChangePage}
						onChangeRowsPerPage={handleChangeRowsPerPage}
					/>
				</div>
			}
		</Paper>
	);
}