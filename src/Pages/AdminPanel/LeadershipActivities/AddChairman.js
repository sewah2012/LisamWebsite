import { Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@material-ui/core'
import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addChairman } from '../../../Redux/actions/newsActions';
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


const AddChairman = () => {
	const classes = styles;
	const { errors, loading } = useSelector(state => state.UI);

	const dispatch = useDispatch();


	const [newLeader, setNewLeader] = useState({
		cChairPerson: '',
		committee: '',
		email: '',
		facebook: '',
		linkind: '',
		phone: '',
		filepath: '',
		imageUrl: ''
	});

	const [open, setOpen] = useState(false);

	// const handleSelectClose = () => {
	// 	setSelectOpen(false)
	// }
	// const handleSelectOpen = () => {
	// 	setSelectOpen(true)
	// }
	const handleOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		dispatch({ type: CLEAR_ERRORS })
		setOpen(false);
		setNewLeader({
			cChairPerson: '',
			committee: '',
			email: '',
			facebook: '',
			linkind: '',
			phone: '',
			filepath: '',
			imageUrl: ''
		});

	}

	const handleChange = (event) => {
		setNewLeader({
			...newLeader,
			[event.target.name]: event.target.value
		});
	}

	const [imgError, setImgError] = useState(false);
	const [upload, setUpload] = useState(null)
	const [loadingImg, setLoadingImg] = useState(false);
	let imgUpld = {};

	const handleImageChange = async (event) => {
		const url = URL.createObjectURL(event.target.files[0]);
		setNewLeader({
			...newLeader,
			imageUrl: url
		})

		const selectedImage = event.target.files[0];

		setUpload(selectedImage);
	}

	const handleSubmit = async (event) => {

		let formData = new FormData();
		if (upload == null) {
			setImgError(true);
		} else {
			formData.append('image', upload, upload.name); //create form data
		}




		if (upload !== null) {
			setLoadingImg(true);
			const axiosRes = await axios.post('/news/image', formData)

			if (axiosRes) {
				imgUpld = {
					imageUrl: axiosRes.data.img,
					filepath: axiosRes.data.filepath
				}

				// console.log(axiosRes.data)
			}
			setLoadingImg(false);
		}


		const editData = {
			cChairPerson: newLeader.cChairPerson,
			committee: newLeader.committee,
			email: newLeader.email,
			linkind: newLeader.linkind,
			facebook: newLeader.facebook,
			phone: newLeader.phone,
			filepath: imgUpld.filepath ? imgUpld.filepath : newLeader.filepath,
			imageUrl: imgUpld.imageUrl ? imgUpld.imageUrl : newLeader.imageUrl
		}

		// console.log(edit);

		dispatch(addChairman( editData, handleClose));




	}




	return (
		<div>
			<Button color='primary' variant='contained' size='large' onClick={handleOpen}>
				Add New Chairman
			</Button>
			<Dialog
				open={open}
				onClose={handleClose}
				fullWidth
				maxWidth='sm'
			>
				<DialogTitle>Enter Chairman Information</DialogTitle>
				<DialogContent>
					<form>
						<TextField
							name='cChairPerson'
							type='text'
							label='Full Name'
							placeholder='Full name of staff'
							value={newLeader.cChairPerson}
							onChange={handleChange}
							variant='outlined'
							fullWidth
							error={errors.cChairPerson ? true : false}
							helperText={errors.cChairPerson}
							className={classes.TextField}
							required
						/>
						<br /><br />

						<TextField
							name='committee'
							type='text'
							label='committee'
							placeholder='what is this staff position'
							value={newLeader.committee}
							onChange={handleChange}
							fullWidth
							variant='outlined'
							error={errors.committee ? true : false}
							helperText={errors.committee}

							className={classes.TextField}
						/>

						<br /><br />

						<TextField
							name='email'
							type='email'
							label='Email Address'
							placeholder='staff personal email'
							value={newLeader.email}
							onChange={handleChange}
							fullWidth
							variant='outlined'
							error={errors.email ? true : false}
							helperText={errors.email}

							className={classes.TextField}
						/>

						<br /><br />

						<TextField
							name='facebook'
							type='text'
							label='Facebook Page Link'
							placeholder='staff facebook profile link'
							value={newLeader.facebook}
							onChange={handleChange}
							fullWidth
							variant='outlined'
							error={errors.facebook ? true : false}
							helperText={errors.facebook}

							className={classes.TextField}
						/>

						<br /><br />

						<TextField
							name='linkind'
							type='text'
							label='LinkedIn Page Link'
							placeholder='Linkedin profile of this staff'
							value={newLeader.linkind}
							onChange={handleChange}
							fullWidth
							variant='outlined'
							error={errors.linkind ? true : false}
							helperText={errors.linkind}

							className={classes.TextField}
						/>

						<br /><br />

						<TextField
							name='phone'
							type='tel'
							label='Phone Number'
							placeholder='staff phone number'
							value={newLeader.phone}
							onChange={handleChange}
							fullWidth
							variant='outlined'
							error={errors.phone ? true : false}
							helperText={errors.phone}

							className={classes.TextField}
						/>

						<br /><br />

						<img src={newLeader.imageUrl} alt='profileImage' className='postImage' />
						<input required type='file' id='image' onChange={handleImageChange} />





					</form>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color='primary'>
						Cancel
					</Button>
					<Button disabled={loading || loadingImg} onClick={handleSubmit} color='primary' type='submit'>
						Save Changes
						{
							loading && <CircularProgress color='secondary' />
						}

						{
							loadingImg && <CircularProgress color='secondary' />
						}

					</Button>
				</DialogActions>
			</Dialog>
		</div>
	)
}

export default AddChairman
