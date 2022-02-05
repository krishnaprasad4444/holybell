import React, { Component } from "react";
import { Col, Row, Carousel, Item, Caption, Card, Container, Button, Accordion, Form  } from "react-bootstrap";
import DatePicker from 'react-datepicker'
class PoojaBooking extends Component {
  
  componentDidMount() {
  }

  componentDidUpdate(prevProps) {}

  render() {

    return (
      <>
      <div className="dark-background offerings">
      
      <DatePicker
      selected={new Date()}
      // onChange={date => setStartDate(date)}
      monthsShown={1}
      inline
    />
    
    </div>
      </>
    );
  }
}

export default React.memo(PoojaBooking);
