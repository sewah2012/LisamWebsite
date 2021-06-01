import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@material-ui/core'
import React from 'react'

const SendSuccess = ({ dialogStatus, handleClose }) => {
  return (
    <div>
      <Dialog open={dialogStatus} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>Thank You for your FeedBack</DialogTitle>
        <DialogContent>
          Your message has been well received. Thank you for your time.
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Exit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default SendSuccess
