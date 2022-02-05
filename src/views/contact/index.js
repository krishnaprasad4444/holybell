import React, { Component } from "react";
import { Col, Row, Carousel, Item, Caption, Card, Container, Button, Accordion, Form  } from "react-bootstrap";

class PoojaBooking extends Component {
  
  componentDidMount() {
  }

  componentDidUpdate(prevProps) {}

  render() {

    return (
      <>
      <div className="dark-background offerings">
     
          <Row>
            <Col md={8}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d820.9336418277092!2d75.48543112858
            243!3d11.832436660094103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba42500d0af4a4f%3A0xc8e
            f1f2dd99c8aba!2sSree%20Peralassery%20Temple!5e0!3m2!1sen!2sin!4v1608644362008!5m2!1sen!2sin" 
            width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </Col>
          </Row>
       
      </div>
      </>
    );
  }
}

export default React.memo(PoojaBooking);
