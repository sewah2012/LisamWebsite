import {makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {getChairman} from '../../../Redux/actions/newsActions';
import AddChairman from './AddChairman';
import DeleteChairman from './DeleteChairman';
import EditChairman from './EditChairman';



const useStyles = makeStyles({
	root: {
		width: '100%',
	},
	container: {
		maxHeight: 'fit-content',
	},
});

const columns = [
	{ id: 'cChairPerson', label: 'Name', minWidth: 170 },
	{ id: 'committee', label: 'Committee', minWidth: 100 },
	{ id: 'email', label: 'Email', minWidth: 100 },
	{ id: 'phone', label: 'Phone Number', minWidth: 100 }

];

const CommitteesLeaderPanel = () => {
	const dispatch = useDispatch();
	const { loading, chairman } = useSelector(state => state.data)
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
		dispatch(getChairman());
		return () => {

		}
	}, [dispatch])

	return (
		<div>
			{/* <h1>Heads of Committee</h1> */}

			<div className='dashboardBody'>
				<AddChairman />
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
										{chairman.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
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
														<EditChairman leader={row} />
														<DeleteChairman chairmanId={row.chairmanId} />
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
								count={chairman.length}
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

export default CommitteesLeaderPanel
