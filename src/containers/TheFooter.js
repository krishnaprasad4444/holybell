import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const TheFooter = () => {
  return (
   <>
       <div className="footer">
           <Container fluid>
            <Row className="row p-3">
               <Col className="col-md-6 col-12">
                  <div className="help">
                  <h3>Need help?</h3>
                  <h4>Support Desk is available <br />every day 8 a.m. - 8 p.m. IST.</h4>
                  </div>   
                  <div className="footer-links">
                  <Row className="row">
                     <Col md={6} xl={3} className="d-flex flex-column">
                        
                        <a href="#">Temple History</a>
                        <a href="#">Administration</a>
                        <a href="#">Upcoming Events</a>
                        <a href="#">Tenders &amp; News</a>
                        <a href="#">Contact Us</a>
                     </Col>
                     <Col md={6} xl={3} className="d-flex flex-column">
                        
                        <a href="#">Festival</a>
                        <a href="#">Offerings</a>
                        <a href="#">Donation</a>
                        <a href="#">E Kanikka</a>
                        <a href="#">Token Booking</a>
                     </Col>
                     <Col md={6} xl={3} className="d-flex flex-column">
                        
                        <a href="#">Gallery</a>
                        <a href="#">Careers</a>
                        <a href="#">Register</a>
                        <a href="#">Login</a>
                        <a href="#">Location</a>
                     </Col>
                  </Row>
               </div>
               </Col>
               <Col className="col-md-6">
                  <div className="call-email-wrap mt-5">
                  <Row className="row">
                  <Col md={12} xl={5} className="d-flex">
                        <img src="assets/images/call-us.svg" />
                        <span>
                           <h5>Call Us</h5>
                           <h4>0471 2450233</h4>
                        </span>
                     </Col>
                     <Col md={12} xl={7} className="d-flex">
                        <img src="assets/images/mail-us.svg" />
                        <span>
                           <h5>Mail Us</h5>
                           <h4><a href="mailto:info@sreepadmanabhaswamytemple.org">info@sreepadmanabhaswamytemple.org</a></h4>
                        </span>
                     </Col>
                  </Row>
                  </div>
                  <div className="text-right about">
                  The origin of the Temple of Sree Padmanabhaswamy is lost in antiquity. 
                  It is not possible to determine with any exactitude, from any reliable h
                  istorical documents or other sources as to when and by whom the original 
                  idol of Sree Padmanabhaswamy was consecrated.
                  </div>
                  <div className="text-right social-links">
                     <a href="#"><img src="assets/images/instagram.svg" /></a>
                     <a href="#"><img src="assets/images/linkedin.svg" /></a>
                     <a href="#"><img src="assets/images/twitter.svg" /></a>
                     <a href="#"><img src="assets/images/youtube.svg" /></a>
                     <a href="#"><img src="assets/images/facebook.svg" /></a>
                  </div>
               </Col>
            </Row>
         
       
         <div className="text-center copyright">
            © 2020 Peralassery Sree Subhramanyaswami Temple | All Rights Reserved. <br />enabled by - <a href="#"><img src="assets/images/codsprint.png" width="26" /> Codsprint</a>
         </div>
         </Container>
        </div>
     
   </>
  )
}

export default React.memo(TheFooter)
