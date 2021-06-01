import './ResidenceCard.css'
import React from 'react'
import Header from '../../../Components/Header/Header'
import Footer from '../../../Components/Header/Footer/Footer'
import Banner from '../../../Components/Header/Banner/Banner'

const ResidenceCard = () => {
  return (
    <div>
      <Header />
      <Banner
        title="Information on Residence Card"
        image="/assets/imgs/maroc.jpg"
      />
      <section id="residenceCardBody">
        <h1>Procedures for obtaining or Renewing your residence card</h1>
        <p>
          Consistent with Morocco's immigration laws, all residents in Morocco
          are required to obtain a resident card, if he/she desires to reside in
          Morocco. For students, upon the completion of your enrollment process
          at AMCI, you're needed to follow the following procedures to obtain a
          permanent resident:
        </p>{' '}
        {/* <br /> */}
        <ol className="residence__procedures">
          <li>
            Carte de Séjour application forms, drawn up by the DGSN,(National
            Police Authority)duly completed in duplicate;
          </li>
          <li>
            Certified copies of the pages of the passport establishing the
            identity of the person concerned, the stamp attesting to their
            admission into Morocco and the foreigners subject to this formality;
            entry visa.{' '}
          </li>
          <li>
            An extract of criminal record from your country of origin, should
            tbe translated to French in Morocco (new students Only);
          </li>
          <li>
            An extract of the Moroccan criminal record from your city of
            residence (Cassier Judiciaire); click here to apply for your Casier
            Judiciaire;
          </li>
          <li>
            {' '}
            Original copy of your medical certificate (Certificat medical);
          </li>
          <li>Certified copy of School Enrolment Certificate</li>
          <li>(Attestation d'inscription) School registration certificate </li>
          <li>Scholarship certificate (Attestation de Bourse);</li>
          <li>
            A lease contract (Contrat de bail or Certificat d’Hebergement, if
            you live on the dormitory ) justifying effective residence at a
            fixed address.{' '}
          </li>
          <li>
            Payment:100 MAD for First Time 1-year registration and 300 MAD for a
            3-year renewal.
          </li>
        </ol>
        <br />
        <br />
        <i>
          Note that all photocopies of original documents should be notarized at
          the Moqu'ata. (Administrative documents in Morocco are valid for three
          months, after the said period, the document is no longer valid).
        </i>
        <br />
        <div className="important">
          <h2>Important Link:</h2>
          <a
            href="https://casierjudiciaire.justice.gov.ma/Accueil.aspx?culture=fr-FR"
            target="_blank"
            rel="noreferrer"
          >
            Online Police Clarence Demande Platform
          </a>
        </div>
        <br /> <br /> <br />
        <div>
          <h1>
            Any student having difficulty obtaining the above mentioned required
            documents should kindly refer to the individuals below:
          </h1>
          <h2>Emmanuel Sahr Sewah,</h2>
          <h4>General Secretary, (LISAM)</h4>
          <p>
            Phone / Whatsapp #: <i>+212 632 952 071</i>
          </p>
          <br /> <br /> <h2>or</h2> <br /> <br />{' '}
          <h4>Send your Inquiries to</h4>
          <h1>lisamlisam26@gmail.com</h1>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default ResidenceCard
