import './ContactForm.css'
import React, { useState } from 'react'
import { Button, CircularProgress } from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook'
import PhoneIcon from '@material-ui/icons/Phone'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import { useDispatch, useSelector } from 'react-redux'
import { submitContactForm } from '../../Redux/actions/newsActions'
import SendSuccess from './SendSuccess'

const ContactForm = () => {
  const dispatch = useDispatch()
  const { loading } = useSelector((state) => state.UI)
  const [info, setInfo] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [errorMessage, setErrorMessage] = useState({
    nameError: '',
    emailError: '',
    messageError: '',
  })
  const [dialogStatus, setDialogStatus] = useState(false)

  const handleChange = (event) => {
    setInfo({
      ...info,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    // dispatch(addAlumini(newAlumini,handleClose));

    if (info.name === '') {
      setErrorMessage({
        ...errorMessage,
        nameError: '* Please provide your name.',
      })
    } else if (info.email === '') {
      setErrorMessage({
        ...errorMessage,
        emailError: '* Please provide your email.',
      })
    } else if (info.message === '') {
      setErrorMessage({
        ...errorMessage,
        messageError: '* Please write your message / inquiry / feedback.',
      })
    } else {
      const payload = {
        name: info.name,
        message: info.message,
        email: info.email,
      }

      dispatch(submitContactForm(payload, setDialogStatus))

      //   alert(payload)
    }
  }

  const handleClose = () => {
    setInfo({
      name: '',
      email: '',
      message: '',
    })

    setDialogStatus(false)
  }

  return (
    <div className="contactForm">
      <div>
        <div className="footer__widget-address">
          <div className="footer__widget-address-brand">
            <img src="/assets/imgs/logo.png" alt="footer-logo" />
            <h2>LISAM</h2>
          </div>

          <div className="footer__widget-address-location contactForm__address">
            <h4>
              23, Rue Cadi Ben Hamadi Senhaji, 10170 Souissi
              <br />
              Rabat, Kingdom of Morocco <br />
              P.O. Box 10000
              <br />
              <br />
              <PhoneIcon fontSize="large" /> (+212) 632 952 071 <br />
              <MailOutlineIcon fontSize="large" />{' '}
              <span>lisamlisam26@gmail.com</span>
            </h4>

            <div className="social_icons">
              <a
                href="https://www.facebook.com/Liberian-Student-Association-In-Morocco-102390798420984"
                target="_blank"
                rel="noreferrer"
              >
                <FacebookIcon fontSize="large" />:{' '}
                <span>Liberia Students Association in Morocco</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="contactForm__getintouch">
        <h2>Get in touch ... </h2>
        <div className="contactForm__wrapper">
          <form name="contact" className="contactForm__form">
            <input
              placeholder="Full Name"
              name="name"
              type="text"
              value={info.name}
              className="contactForm__form-field"
              required
              onChange={handleChange}
            />
            {info.name === '' && (
              <p style={{ color: 'orange', textAlign: 'center' }}>
                {errorMessage.nameError}
              </p>
            )}

            <input
              placeholder="Email Address"
              name="email"
              type="email"
              value={info.email}
              className="contactForm__form-field"
              required
              onChange={handleChange}
            />
            {info.email === '' && (
              <p style={{ color: 'orange', textAlign: 'center' }}>
                {errorMessage.emailError}
              </p>
            )}

            <textarea
              placeholder="Please specify your inquiry..."
              name="message"
              type="text"
              rows="10"
              value={info.message}
              className="contactForm__form-field"
              onChange={handleChange}
            />
            {info.message === '' && (
              <p style={{ color: 'orange', textAlign: 'center' }}>
                {errorMessage.messageError}
              </p>
            )}

            <Button color="primary" onClick={handleSubmit}>
              SEND MESSAGE {loading && <CircularProgress />}
            </Button>
          </form>
          <SendSuccess dialogStatus={dialogStatus} handleClose={handleClose} />
        </div>
      </div>
    </div>
  )
}

export default ContactForm
