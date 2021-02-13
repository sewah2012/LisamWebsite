import './Documents.css';
import React from 'react'
import Document from './Document';

const Documents = () => {
	return (
		<div>
			<Document
				downloadSrc='/assets/docs/The-2016 Revised-LISAM-CONST-Final-Copy.pdf'
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
