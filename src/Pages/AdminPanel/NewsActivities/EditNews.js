import { Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@material-ui/core'
import React, {useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import axios from 'axios';
import { editNews } from '../../../Redux/actions/newsActions';
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


const EditNews = ({ news }) => {

	const classes = styles;
	const { errors, loading } = useSelector(state => state.UI);

	const dispatch = useDispatch();
	const [loadingImg, setLoadingImg] = useState(false)
	const [upload, setUpload] = useState(null);
	
	let imgUpld = {
		
	};

	

	const [newPost, setNewPost] = useState({
		body: news.body,
		title: news.title,
		filepath: news.filepath,
		imageUrl: news.imageUrl

	});

	const [open, setOpen] = useState(false);



	const handleOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		dispatch({ type: CLEAR_ERRORS })
		setOpen(false);
		setUpload(null)
		setNewPost({
			body: news.body,
			title: news.title,
			filepath: news.filepath,
			imageUrl: news.imageUrl
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
		setNewPost({
			...newPost,
			imageUrl: url
		})

		const selectedImage = event.target.files[0];

		setUpload(selectedImage);

	}
	
	const [imgError, setImgError] = useState(false);
	

	const handleSubmit = async (event) => {
		let formData = new FormData();
		if (upload == null) {
			setImgError(true);
		} else {

			formData.append('image', upload, upload.name); //create form data
		}


		if (newPost.body && newPost.title !== '') {


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
				body: newPost.body,
				title: newPost.title,
				imageUrl: imgUpld.imageUrl ? imgUpld.imageUrl : newPost.imageUrl,
				filepath: imgUpld.filepath ? imgUpld.filepath : newPost.filepath
			}

			// console.log(editData)
			dispatch(editNews(news.newsId, editData, handleClose));


		}

	}




	return (
		<div>
			<Button color='primary' variant='contained' size='large' onClick={handleOpen}>
				Edit New Articles
			</Button>
			<Dialog
				open={open}
				onClose={handleClose}
				fullWidth
				maxWidth='sm'
			>
				<DialogTitle>Modify News/Article</DialogTitle>
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

						<img src={newPost.imageUrl} alt='profileImage' className='postImage' />
						<input required type='file' id='image' onChange={handleImageChange} />

					</form>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color='primary'>
						Cancel
					</Button>
					<Button disabled={loading || loadingImg} onClick={handleSubmit} color='primary' type='submit'>
						Modify
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

export default EditNews
