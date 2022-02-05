import React, { useEffect, useState } from 'react';
import { Button, Col, Form, Nav, Navbar, Row } from 'react-bootstrap';
import { useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import { getCartList } from '../apiManager/services/cartServices';
import Login from "../views/login/loginForm";

const TheHeader = () => {
  const history = useHistory()
  const [count, setCartCount] = useState(getCartList().length);
  const [showLogin, setLogin] = useState(false);
  const { cartCount } = useSelector((state) => state.cartReducer);
  
    useEffect(() => {
        setCartCount(cartCount)   
    },[cartCount]);


  return (
    <>
    <div className="header">
      <div className="top sticky">
        <Row className="m-0">
          <Col md={5}>
          <span className="d-flex logo-wrapper"  onClick={()=>history.push(`/home`)}>
            <img src="assets/images/sree-padmanabhaswamy.png" />
            <span className="d-flex flex-column">
            <h1>Sree Padmanabhaswamy Temple</h1>
            <h2>Thiruvananthapuram - 695023, Kerala, India</h2>
            </span>
            </span>
          </Col>
          <Col md={7} className="d-flex justify-content-end header-right-elements pr-3">
             <h3 className="pt-4 mt-3 pr-3">19.12.2020-SATURDAY-4/DHANU/1196-AVITTAM</h3>
             <Button variant="outline-light">Register</Button>
             <Button onClick={()=>setLogin(true)} variant="outline-light">Login</Button>
             <Form.Control as="select" className="lang-select mt-4" size="lg" custom>
              <option>English</option>
              <option>Malayalam</option>
              <option>Tamil</option>
              <option>Kannada</option>
              <option>Hindi</option>
            </Form.Control>
            <Button variant="outline-light cart" onClick={()=>history.push('/cart')}><img src="assets/images/cart.svg" />{count>0?<span className="count">{count}</span>:""}</Button>
          </Col>
        </Row>
      </div>
    </div>
    <Navbar expand="lg" className="main-header">
      <div className="d-flex pt-2 pb-2 justify-content-between">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <h6 className="d-block d-flex align-self-center calendar-date d-sm-none pl-3">19.12.2020-SATURDAY-4/DHANU/1196-AVITTAM</h6>
      </div>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link onClick={()=>history.push(`/home`)}>Home</Nav.Link>
          <Nav.Link onClick={()=>history.push(`/history`)}>History</Nav.Link>
          <Nav.Link onClick={()=>history.push(`/administration`)}>Administration</Nav.Link>
          <Nav.Link onClick={()=>history.push(`/festival`)}>Festival</Nav.Link>
          <Nav.Link onClick={()=>history.push(`/gallery`)}>Gallery</Nav.Link>
          <Nav.Link onClick={()=>history.push(`/events`)}>Events</Nav.Link>
          <Nav.Link onClick={()=>history.push(`/news`)}>Tenders &amp; News</Nav.Link>
          <Nav.Link onClick={()=>history.push(`/attractions`)}>Attractions</Nav.Link>
          <Nav.Link onClick={()=>history.push(`/token-booking`)}>Token Booking</Nav.Link>
          <Nav.Link onClick={()=>history.push(`/donation`)}>Donation</Nav.Link>
          <Nav.Link onClick={()=>history.push(`/poojaBooking`)}>Offerings</Nav.Link>
          <Nav.Link href="#link" className="d-block d-sm-none">Register</Nav.Link>
          <Nav.Link onClick={()=>this.handleLoginShow()} className="d-block d-sm-none">Login</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link onClick={()=>history.push(`/contact`)}>Contact Us</Nav.Link>
          <Nav.Link href="#link">Location</Nav.Link>
        </Nav>
        
      </Navbar.Collapse>
    </Navbar>
    {showLogin?<Login show={showLogin} onClose={()=>setLogin(false)}/>:null}
    </>
  )
}

export default TheHeader



