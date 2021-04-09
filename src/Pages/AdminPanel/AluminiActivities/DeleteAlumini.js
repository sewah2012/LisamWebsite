import { Button, CircularProgress, Dialog, DialogActions, DialogTitle} from '@material-ui/core'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { deleteAlumini} from '../../../Redux/actions/newsActions';

const DeleteAlumini = ({aluminiId}) => {
	const [loading, setLoading] = useState(false)
	const dispatch = useDispatch();
	const [open, setOpen] = useState(false);
	const handleOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false);
		setLoading(false);
		
	}

	const handleSubmit = () => {
		setLoading(true);
		// console.log(aluminiId)
		dispatch(deleteAlumini(aluminiId,handleClose));
	}

	return (
		<div>
			<Button color='secondary' variant='contained' size='large' onClick={handleOpen}>
				Delete
			</Button>
			<Dialog
				open={open}
				onClose={handleClose}
				fullWidth
				maxWidth='sm'
			>
				<DialogTitle>Do you really wish to delete this Person ?</DialogTitle>
				
				<DialogActions>
					<Button onClick={handleClose} color='primary'>
						No, Cancel
					</Button>
					<Button disabled={loading} onClick={handleSubmit} color='primary' type='submit'>
						Yes, Delete {loading && <CircularProgress color='secondary'/>}
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	)
}

export default DeleteAlumini
