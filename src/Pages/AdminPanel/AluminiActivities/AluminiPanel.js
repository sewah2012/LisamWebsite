import { Button, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAlumini } from '../../../Redux/actions/newsActions';
import AddAlumini from './AddAlumini';
import DeleteAlumini from './DeleteAlumini';
import EditAlumini from './EditAlumini';

const useStyles = makeStyles({
	root: {
		width: '100%',
	},
	container: {
		maxHeight: 'fit-content',
	},
});

const columns = [
	{ id: 'name', label: 'Name', minWidth: 170 },
	{ id: 'discipline', label: 'Discipline', minWidth: 100 },
	{ id: 'level', label: 'Degree Earned', minWidth: 100 },
	{ id: 'institution', label: 'Institution', minWidth: 100 },
	{ id: 'year', label: 'Year of Completion', minWidth: 100 }

];

const AluminiPanel = () => {
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
		<div>
			{/* <h1>Alumini Management Console</h1> */}

			<div className='dashboardBody'>
				<AddAlumini />

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
											<TableCell >
												ACTION
											</TableCell>
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
																{value}
															</TableCell>
														);

													})}
													<TableCell >
														<EditAlumini alumini={row} />
														<DeleteAlumini aluminiId={row.aluminiID}/>
													</TableCell>
												</TableRow>
											);
										})}
									</TableBody>
								</Table>
							</TableContainer>
							<TablePagination
								rowsPerPageOptions={[10, 25, 100]}
								component="div"
								count={alumini.length}
								rowsPerPage={rowsPerPage}
								page={page}
								onChangePage={handleChangePage}
								onChangeRowsPerPage={handleChangeRowsPerPage}
							/>
						</div>
					}
				</Paper>

			</div>
		</div>
	)
}

export default AluminiPanel
