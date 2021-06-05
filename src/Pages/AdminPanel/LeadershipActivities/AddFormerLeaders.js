import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@material-ui/core'
import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPastLeader } from '../../../Redux/actions/newsActions'
import { CLEAR_ERRORS } from '../../../Redux/types'

const styles = {
  closeBtn: {
    position: 'absolute',
    left: '90%',
  },
  textField: {
    margin: '10px auto 10px auto',
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

const AddFormerLeaders = () => {
  const classes = styles
  const { errors, loading } = useSelector((state) => state.UI)
  const [presUpload, setPresUpload] = useState(null)
  const [vpUpload, setVpUpload] = useState(null)
  const [loadingPresImg, setLoadingPresImg] = useState(false)
  const [loadingVpImg, setLoadingVpImg] = useState(false)

  const dispatch = useDispatch()

  const [newAlumini, setNewAlumini] = useState({
    presidentName: '',
    vicePresidentName: '',
    startYear: '',
    endYear: '',
    vpImage: '',
    presImage: '',
    vpFilepath: '',
    presFilepath: '',
  })

  let imgUpld1 = {}
  let imgUpld2 = {}

  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    dispatch({ type: CLEAR_ERRORS })
    setOpen(false)
    setNewAlumini({
      presidentName: '',
      vicePresidentName: '',
      startYear: '',
      endYear: '',
      vpImage: '',
      presImage: '',
      vpFilepath: '',
      presFilepath: '',
    })
  }

  const handleChange = (event) => {
    setNewAlumini({
      ...newAlumini,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = async (event) => {
    // console.log(newAlumini)

    let formData = new FormData()
    let formData2 = new FormData()
    if (presUpload == null) {
      //   setImgError(true)
      //   alert('form data is empty')
    } else {
      formData.append('image', presUpload, presUpload.name) //create form data
    }

    if (presUpload !== null) {
      setLoadingPresImg(true)
      const axiosRes = await axios.post('/news/image', formData)

      if (axiosRes) {
        imgUpld1 = {
          presimageUrl: axiosRes.data.img,
          presfilepath: axiosRes.data.filepath,
        }

        // console.log(axiosRes.data)
      }
      setLoadingPresImg(false)
    }

    //VP image upload
    if (vpUpload == null) {
      //   setImgError(true)
      //   alert('form data for vp is empty')
    } else {
      formData2.append('image', vpUpload, vpUpload.name) //create form data
    }

    if (vpUpload !== null) {
      setLoadingVpImg(true)
      const axiosRes = await axios.post('/news/image', formData2)

      if (axiosRes) {
        imgUpld2 = {
          vpimageUrl: axiosRes.data.img,
          vpfilepath: axiosRes.data.filepath,
        }

        // console.log(axiosRes.data)
      }
      setLoadingVpImg(false)
    }

    const formerLeader = {
      presidentName: newAlumini.presidentName,
      vicePresidentName: newAlumini.vicePresidentName,
      startYear: newAlumini.startYear,
      endYear: newAlumini.endYear,
      vpImage: imgUpld2.vpimageUrl,
      presImage: imgUpld1.presimageUrl,
      vpFilePath: imgUpld2.vpfilepath,
      presFilepath: imgUpld1.presfilepath,
    }

    console.log(formerLeader)

    // dispatch(editLeader(leader.leadersId, editData, handleClose))

    dispatch(addPastLeader(formerLeader, handleClose))
  }

  const handlePresImageChange = async (event) => {
    const url = URL.createObjectURL(event.target.files[0])
    setNewAlumini({
      ...newAlumini,
      presImage: url,
    })

    const selectedImage = event.target.files[0]

    setPresUpload(selectedImage)
  }

  const handleVpPresImageChange = async (event) => {
    const url = URL.createObjectURL(event.target.files[0])
    setNewAlumini({
      ...newAlumini,
      vpImage: url,
    })

    const selectedImage = event.target.files[0]

    setVpUpload(selectedImage)
  }
  return (
    <div>
      <Button
        color="primary"
        variant="contained"
        size="large"
        onClick={handleOpen}
      >
        Add Former Leaders
      </Button>{' '}
      <br />
      <br />
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>Add New Past Officials</DialogTitle>
        <DialogContent>
          <form>
            <TextField
              name="presidentName"
              type="text"
              label="Full Name of the President"
              placeholder="Full name of President"
              value={newAlumini.presidentName}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              error={errors.presidentName ? true : false}
              helperText={errors.presidentName}
              className={classes.TextField}
              required
            />
            <img
              src={newAlumini.presImage}
              alt="profileImage"
              className="postImage"
            />
            <input
              required
              type="file"
              id="image"
              onChange={handlePresImageChange}
            />
            {loadingPresImg && <CircularProgress />}
            <br />
            <br />

            <TextField
              name="vicePresidentName"
              type="text"
              label="Vice President Full Name"
              placeholder="Full Name of Vice-President"
              value={newAlumini.vicePresidentName}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              error={errors.vicePresidentName ? true : false}
              helperText={errors.vicePresidentName}
              className={classes.TextField}
              required
            />

            <img
              src={newAlumini.vpImage}
              alt="profileImage"
              className="postImage"
            />
            <input
              required
              type="file"
              id="image"
              onChange={handleVpPresImageChange}
            />
            {loadingVpImg && <CircularProgress />}

            <br />
            <br />

            <TextField
              name="startYear"
              type="number"
              label="Year Inducted in Office"
              placeholder="Year degree was earned"
              value={newAlumini.startYear}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              error={errors.startYear ? true : false}
              helperText={errors.startYear}
              className={classes.TextField}
            />

            <br />
            <br />

            <TextField
              name="endYear"
              type="number"
              label="Year Administration Ended"
              placeholder="Year Administration ended"
              value={newAlumini.endYear}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              error={errors.endYear ? true : false}
              helperText={errors.endYear}
              className={classes.TextField}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            disabled={loading}
            onClick={handleSubmit}
            color="primary"
            type="submit"
          >
            Add
            {loading && <CircularProgress color="secondary" />}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default AddFormerLeaders
