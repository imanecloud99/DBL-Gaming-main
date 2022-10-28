import React from 'react'
import './BasicPage.css'

const BasicPage = ({ pageTitle, pageContent }) => {
  return (
    <>
      <div className="container-fluid">
        <h1 className="page_title">{pageTitle}</h1>
        <p className="page_content">{pageContent}</p>
      </div>
    </>
  )
}

export default BasicPage
