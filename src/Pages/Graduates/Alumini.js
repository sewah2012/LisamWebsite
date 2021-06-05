import './Alumini.css'
import React from 'react'
import Banner from '../../Components/Header/Banner/Banner'
import Footer from '../../Components/Header/Footer/Footer'
import Header from '../../Components/Header/Header'
import AluminiData from './AluminiData'

const Alumini = () => {
  return (
    <div>
      <Header />
      <Banner title="OUR AlUMINI / GRADUATES" image="/assets/imgs/alu.jpeg" />
      <div className="alumini__body">
        <h1>List Morocco-Liberia Bilateral Scholarship Program Alumini</h1>
        <p>
          The Morocco - Liberia Bilateral Scholarship program since 1989 has
          produced a number of highly trained Liberian professionals in several
          different significant disciplines which and are participating in the
          national building process of Liberia. The below table outlines all
          scholars that acquired their professionals and technial training in
          the Kingdom under the auspices of the Morocco-Liberia Scholarship
          PRogram.
        </p>

        <div className="alumini__data">
          <AluminiData />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Alumini
