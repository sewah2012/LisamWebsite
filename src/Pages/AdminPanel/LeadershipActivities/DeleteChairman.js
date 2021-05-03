import { Button, CircularProgress, Dialog, DialogActions, DialogTitle} from '@material-ui/core'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { deleteChairman } from '../../../Redux/actions/newsActions';


const DeleteChairman = ({chairmanId}) => {
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
		dispatch(deleteChairman(chairmanId, handleClose));
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
				<DialogTitle>Do you really wish to delete this chairman ?</DialogTitle>
				
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

export default DeleteChairman
