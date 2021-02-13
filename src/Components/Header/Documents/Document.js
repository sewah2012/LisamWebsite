import './Document.css'
import React from 'react'

const Document = ({downloadSrc,docType,docName}) => {
	return (
		<div className='document'>
			{docType==='pdf'? <img src='/assets/imgs/pdf.png' alt='pdf'className='document__avt'/> : <img src='/assets/imgs/word.png' alt='word' className='document__avt'/>}
			<h2><a href={downloadSrc}  target='_blank'  rel="noreferrer" >{docName} </a> </h2>
		</div>
	)
}

export default Document;
