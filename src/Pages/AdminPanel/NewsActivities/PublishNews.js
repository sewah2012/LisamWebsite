import { Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import axios from 'axios';
import { postNews } from '../../../Redux/actions/newsActions';
import { CLEAR_ERRORS } from '../../../Redux/types';

const styles = {
	closeBtn: {
		position: 'absolute',
		left: '90%'
	},
	textField: {
		margin: '10px auto 10px auto'
	},
}


const PublishNews = () => {

	const classes = styles;
	const { errors, loading } = useSelector(state => state.UI);
	
	const dispatch = useDispatch();
	const [loadingImg, setLoadingImg] = useState(false)
	const [upload, setUpload] = useState(null);
	// const [errors, setErrors] = useState({});

	let uploadImage = {

	};

	const [newPost, setNewPost] = useState({
		body: '',
		title: ''

	});

	const [open, setOpen] = useState(false);
	const [previewUrl, setPreviewUrl] = useState({
		imageUrl: ''
	})


	const handleOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		dispatch({ type: CLEAR_ERRORS })
		setOpen(false);
		setNewPost({
			body: '',
			title: ''
		});

		uploadImage = {}
		setUpload(null)
		setPreviewUrl({
			imageUrl: ''
		})



	}




	const handleChange = (event) => {
		setNewPost({
			...newPost,
			[event.target.name]: event.target.value
		});
	}





	const handleImageChange = async (event) => {
		const url = URL.createObjectURL(event.target.files[0]);
		setPreviewUrl({
			imageUrl: url
		});

		const selectedImage = event.target.files[0];

		setUpload(selectedImage);



		//send to server



	}
	const [imgError, setImgError] = useState(false);

	const handleSubmit = async (event) => {
		let formData = new FormData();
		if (upload == null) {
			setImgError(true);
		} else {

			formData.append('image', upload, upload.name); //create form data
		}

		if (upload == null) {
			alert("No Feature Image Selected")
		} else {
			if (newPost.body && newPost.title !== '') {
				setLoadingImg(true);
				const axiosRes = await axios.post('/news/image', formData)
				// console.log(axiosRes.data)
				if (axiosRes) {
					uploadImage = axiosRes.data
				}


				setLoadingImg(false);
 

				const uploadData = {
					body: newPost.body,
					title: newPost.title,
					imageUrl: uploadImage.img ? uploadImage.img : null,
					filepath: uploadImage.filepath
				}


				dispatch(postNews(uploadData,handleClose));

			} else {
				dispatch(postNews({
					body: '',
					title: '',
					imageUrl: ''
				}))
			}
		}

	}




	return (
		<div>
			<Button color='primary' variant='contained' size='large' onClick={handleOpen}>
				Publish New Articles
			</Button>
			<Dialog
				open={open}
				onClose={handleClose}
				fullWidth
				maxWidth='sm'
			>
				<DialogTitle>Publish a New News/Article</DialogTitle>
				<DialogContent>
					<form>
						<TextField
							name='title'
							type='text'
							label='News/Article Title'
							placeholder='Write the heading for your publication'
							value={newPost.title}
							onChange={handleChange}
							variant='outlined'
							fullWidth
							error={errors.body ? true : false}
							helperText={errors.title}
							className={classes.TextField}
							required
						/>
						<br /><br />
						<TextField
							name='body'
							type='text'
							label='Article Details'
							placeholder='your scream'
							value={newPost.body}
							onChange={handleChange}
							fullWidth
							multiline
							rows={5}
							variant='outlined'
							error={errors.body ? true : false}
							helperText={errors.body}

							className={classes.TextField}
						/>

						<img src={previewUrl.imageUrl} alt='profileImage' className='postImage' />
						<input required type='file' id='image' onChange={handleImageChange} />

					</form>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color='primary'>
						Cancel
					</Button>
					<Button disabled={loading || loadingImg} onClick={handleSubmit} color='primary' type='submit'>
						Post
						{
							loading && <CircularProgress color='secondary' />
						}
						{
							loadingImg && <CircularProgress color='success' />
						}
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	)
}

export default PublishNews
