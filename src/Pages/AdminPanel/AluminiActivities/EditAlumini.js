import { Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, InputLabel, MenuItem, Select, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addAlumini, editAlumini } from '../../../Redux/actions/newsActions';
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


const EditAlumini = ({ alumini }) => {
	const [selectOpen, setSelectOpen] = useState(false);
	const classes = styles;
	const { errors, loading } = useSelector(state => state.UI);

	const dispatch = useDispatch();


	const [newAlumini, setNewAlumini] = useState({
		name: alumini.name,
		discipline: alumini.discipline,
		institution: alumini.institution,
		level: alumini.level,
		year: alumini.year,
	});

	const [open, setOpen] = useState(false);

	const handleSelectClose = () => {
		setSelectOpen(false)
	}
	const handleSelectOpen = () => {
		setSelectOpen(true)
	}
	const handleOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		dispatch({ type: CLEAR_ERRORS })
		setOpen(false);
		setNewAlumini({
			name: alumini.name,
			discipline: alumini.discipline,
			institution: alumini.institution,
			level: alumini.level,
			year: alumini.year
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
			name: newAlumini.name,
			discipline: newAlumini.discipline,
			institution: newAlumini.institution,
			level: newAlumini.level,
			year: newAlumini.year,
		}

		// console.log(editData);

		dispatch(editAlumini(alumini.aluminiID, editData, handleClose));
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
				<DialogTitle>Edit an Alumini Information</DialogTitle>
				<DialogContent>
					<form>
						<TextField
							name='name'
							type='text'
							label='Full Name'
							placeholder='Full name of veteran'
							value={newAlumini.name}
							onChange={handleChange}
							variant='outlined'
							fullWidth
							error={errors.name ? true : false}
							helperText={errors.name}
							className={classes.TextField}
							required
						/>
						<br /><br />

						<TextField
							name='discipline'
							type='text'
							label='Field of Study'
							placeholder='What did this veteran study'
							value={newAlumini.discipline}
							onChange={handleChange}
							fullWidth
							variant='outlined'
							error={errors.discipline ? true : false}
							helperText={errors.discipline}

							className={classes.TextField}
						/>

						<br /><br />

						<InputLabel id="demo-controlled-open-select-label">Type of Degree obtained</InputLabel>
						<FormControl className={classes.formControl}>

							<Select
								labelId="demo-controlled-open-select-label"
								id="demo-controlled-open-select"
								open={selectOpen}
								onClose={handleSelectClose}
								onOpen={handleSelectOpen}
								value={newAlumini.level}
								onChange={handleChange}
								name='level'
								displayEmpty={true}
							>
								<MenuItem disabled value="">
									<em>Click to select</em>
								</MenuItem>
								<MenuItem value='Master'>Master</MenuItem>
								<MenuItem value='Bachelor'>Bachelor</MenuItem>
								<MenuItem value='Associate'>Associate</MenuItem>
							</Select>
						</FormControl>

						<br /><br />

						<TextField
							name='institution'
							type='text'
							label='University / Institution'
							placeholder='school or university'
							value={newAlumini.institution}
							onChange={handleChange}
							fullWidth
							variant='outlined'
							error={errors.institution ? true : false}
							helperText={errors.institution}

							className={classes.TextField}
						/>

						<br /><br />

						<TextField
							name='year'
							type='number'
							label='Year Degree was earned'
							placeholder='Year degree was earned'
							value={newAlumini.year}
							onChange={handleChange}
							fullWidth
							variant='outlined'
							error={errors.year ? true : false}
							helperText={errors.year}

							className={classes.TextField}
						/>

						<br /><br />





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

export default EditAlumini
