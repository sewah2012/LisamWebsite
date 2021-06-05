import './Documents.css'
import React from 'react'
import Document from './Document'

const Documents = () => {
  return (
    <div>
      <Document
        downloadSrc="https://firebasestorage.googleapis.com/v0/b/lisam-5c8b4.appspot.com/o/constitution.pdf?alt=media&token=c149fc21-131d-45cf-8f53-957d1d2d91f2"
        docType="pdf"
        docName="LISAM REVISED CONSTITUTION"
      />

      <Document
        downloadSrc="https://firebasestorage.googleapis.com/v0/b/lisam-5c8b4.appspot.com/o/GrammarProgressive(LISAM).pdf?alt=media&token=529544e8-04f8-4fbb-af11-8a93adfcdb5a"
        docType="pdf"
        docName="Grammaire Progressive (FRENCH GRAMMAR Progressive)"
      />

      <Document
        downloadSrc="https://firebasestorage.googleapis.com/v0/b/lisam-5c8b4.appspot.com/o/LISAM%20Financial%20Report%20copy.pdf?alt=media&token=d8f6e1f3-5806-42ad-ae61-bf60d6e9b90d"
        docType="pdf"
        docName="Financial Report (2018/2019) of Past Leadership)"
      />

      {/* <Document
        downloadSrc="#"
        docType="word"
        docName="December and January financial Report"
      /> */}
    </div>
  )
}

export default Documents
