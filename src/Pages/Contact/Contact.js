import './Contact.css'
import React from 'react'
import Banner from '../../Components/Header/Banner/Banner'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Header/Footer/Footer'
import ContactForm from './ContactForm'
// import LocationMap from '../../Components/Header/Map/LocationMap'

const Contact = () => {
  return (
    <div className="contact">
      <Header />
      <Banner title="Contact us" image="assets/imgs/cont.jpg" />
      <div>
        <ContactForm />
        {/* <LocationMap /> */}
      </div>
      <Footer />
    </div>
  )
}

export default Contact
