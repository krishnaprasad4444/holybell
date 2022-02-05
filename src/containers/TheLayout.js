import React from 'react'
import {
  TheContent,
  TheFooter,
  TheHeader, TheSidebar
} from './index'
import {Row, Col} from "react-bootstrap";

const TheLayout = () => {

  return (
    <>
   
      <div className="main-wrapper">
        <TheSidebar/>
        <TheHeader/>
        <div className="content-wrapper">
        <TheContent/>
        </div>
        <TheFooter/>
      </div>
   
    </>
  )
}

export default TheLayout
