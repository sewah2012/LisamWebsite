import './Documents.css';
import React from 'react'
import Document from './Document';

const Documents = () => {
	return (
		<div>
			<Document
				downloadSrc='https://firebasestorage.googleapis.com/v0/b/lisam-5c8b4.appspot.com/o/constitution.pdf?alt=media&token=c149fc21-131d-45cf-8f53-957d1d2d91f2'
				docType='pdf'
				docName='LISAM REVISED CONSTITUTION'
			/>

			<Document
				downloadSrc='#'
				docType='word'
				docName='December and January financial Report'
			/>
		</div>
	)
}

export default Documents
