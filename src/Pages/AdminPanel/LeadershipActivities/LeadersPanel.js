import {makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {getLeaders } from '../../../Redux/actions/newsActions';
import EditLeader from './EditLeader';


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
	{ id: 'position', label: 'Position', minWidth: 100 },
	{ id: 'email', label: 'Email', minWidth: 100 },
	{ id: 'phone', label: 'Phone Number', minWidth: 100 }

];

const LeadersPanel = () => {
	const dispatch = useDispatch();
	const { loading, leaders } = useSelector(state => state.data)
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
		dispatch(getLeaders());
		return () => {

		}
	}, [dispatch])

	return (
		<div>
			<h1>Current Top Executive</h1>

			<div className='dashboardBody'>
				{/* <AddAlumini /> */}

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
										{leaders.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
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
														<EditLeader leader={row} />
													</TableCell>
												</TableRow>
											);
										})}
									</TableBody>
								</Table>
							</TableContainer>
							<TablePagination
								rowsPerPageOptions={[5, 10, 15]}
								component="div"
								count={leaders.length}
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

export default LeadersPanel
