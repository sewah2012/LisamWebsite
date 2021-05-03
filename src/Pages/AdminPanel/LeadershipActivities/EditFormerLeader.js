import { Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle,TextField } from '@material-ui/core'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { editPastLeader } from '../../../Redux/actions/newsActions';
import { CLEAR_ERRORS } from '../../../Redux/types';

const styles = {
	closeBtn: {
		position: 'absolute',
		left: '90%'
	},
	textField: {
		margin: '10px auto 10px auto'
	},
	button: {
		display: 'block',
		marginTop: 5,
	},
	formControl: {
		margin: '1rem',
		minWidth: 120,
	},
}


const EditFormerLeader = ({ alumini }) => {
	const classes = styles;
	const { errors, loading } = useSelector(state => state.UI);

	const dispatch = useDispatch();


	const [newAlumini, setNewAlumini] = useState({
		presidentName: alumini.presidentName,
		vicePresidentName: alumini.vicePresidentName,
		startYear: alumini.startYear,
		endYear: alumini.endYear,
	});

	const [open, setOpen] = useState(false);
	
	const handleOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		dispatch({ type: CLEAR_ERRORS })
		setOpen(false);
		setNewAlumini({
			presidentName: alumini.presidentName,
			vicePresidentName: alumini.vicePresidentName,
			startYear: alumini.startYear,
			endYear: alumini.endYear,
		});

	}

	const handleChange = (event) => {
		setNewAlumini({
			...newAlumini,
			[event.target.name]: event.target.value
		});
	}


	const handleSubmit = async (event) => {
		const editData = {
			presidentName: newAlumini.presidentName,
			vicePresidentName: newAlumini.vicePresidentName,
			startYear: newAlumini.startYear,
			endYear: newAlumini.endYear,
		}

		// console.log(editData);

		dispatch(editPastLeader(alumini.officialId, editData, handleClose));
	}



	return (
		<div>
			<Button color='primary' variant='contained' size='large' onClick={handleOpen}>
				Edit
			</Button>
			<Dialog
				open={open}
				onClose={handleClose}
				fullWidth
				maxWidth='sm'
			>
				<DialogTitle>Edit Information</DialogTitle>
				<DialogContent>
					<form>
						<TextField
							name='presidentName'
							type='text'
							label='Full Name of the President'
							placeholder='Full name of President'
							value={newAlumini.presidentName}
							onChange={handleChange}
							variant='outlined'
							fullWidth
							error={errors.presidentName ? true : false}
							helperText={errors.presidentName}
							className={classes.TextField}
							required
						/>
						<br /><br />

						<TextField
							name='vicePresidentName'
							type='text'
							label='Vice President Full Name'
							placeholder='Full Name of Vice-President'
							value={newAlumini.vicePresidentName}
							onChange={handleChange}
							variant='outlined'
							fullWidth
							error={errors.vicePresidentName ? true : false}
							helperText={errors.vicePresidentName}
							className={classes.TextField}
							required
						/>


						<br /><br />

						<TextField
							name='startYear'
							type='number'
							label='Year Inducted in Office'
							placeholder='Year degree was earned'
							value={newAlumini.startYear}
							onChange={handleChange}
							fullWidth
							variant='outlined'
							error={errors.startYear ? true : false}
							helperText={errors.startYear}

							className={classes.TextField}
						/>

						<br /><br />

						<TextField
							name='endYear'
							type='number'
							label='Year Administration Ended'
							placeholder='Year Administration ended'
							value={newAlumini.endYear}
							onChange={handleChange}
							fullWidth
							variant='outlined'
							error={errors.endYear ? true : false}
							helperText={errors.endYear}

							className={classes.TextField}
						/>
					</form>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color='primary'>
						Cancel
					</Button>
					<Button disabled={loading} onClick={handleSubmit} color='primary' type='submit'>
						Save Changes
						{
							loading && <CircularProgress color='secondary' />
						}

					</Button>
				</DialogActions>
			</Dialog>
		</div>
	)
}

export default EditFormerLeader
