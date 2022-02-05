import React, { Component } from "react";
import { Col, Row, Carousel, Item, Caption, Card, Container, Button, Accordion, Form  } from "react-bootstrap";

class PoojaBooking extends Component {
  state={
    form:{},
    error:{}
  }
  componentDidMount() {
  }

  componentDidUpdate(prevProps) {}

  handleTextChange = (event) => {
    let { form } = this.state;
    form[event.target.name] = event.target.value;
    this.setState({ form: form });
  };

  render() {
let {form,error} =this.state
    return (
      <>
      <div className="dark-background offerings">
      <Row className=" m-0">
           <Col md={12} className="sticky pt-2 pb-2">
              <Row className="m-0">
                <Col md={12}>
                  <h1 className="c-white">Donation</h1>
                </Col>
              </Row>
           </Col> 
    </Row>
              <Row >
                          <Col md={12} className="pb-3">
                            <Form.Control
                              autoComplete={false}
                              type="text"
                              value={form.name}
                              placeholder="Name"
                              name="name"
                              onChange={(event) =>
                                this.handleTextChange(event)
                              }
                              required
                              isInvalid={error.name}
                            />
                            <Form.Control.Feedback type="invalid">
                              Please provide a valid name.
                            </Form.Control.Feedback>
                          </Col>
                          </Row>
                          <Row >
                          <Col md={12} className="pb-3">
                            <Form.Control
                              autoComplete={false}
                              type="email"
                              value={form.email}
                              placeholder="Email"
                              name="email"
                              onChange={(event) =>
                                this.handleTextChange(event)
                              }
                             
                              isInvalid={error.email}
                            />
                            <Form.Control.Feedback type="invalid">
                              Please provide a valid email.
                            </Form.Control.Feedback>
                          </Col>
                          </Row>

                          <Row >
                          <Col md={12} className="pb-3">
                            <Form.Control
                              autoComplete={false}
                              type="tel"
                              value={form.phone}
                              placeholder="Phone"
                              name="phone"
                              onChange={(event) =>
                                this.handleTextChange(event)
                              }
                              isInvalid={error.phone}
                            />
                            <Form.Control.Feedback type="invalid">
                              Please provide a valid phone.
                            </Form.Control.Feedback>
                          </Col>
                          </Row>

                          <Row >
                          <Col md={12} className="pb-3">
                            <Form.Control
                              autoComplete={false}
                              type="text"
                              value={form.address}
                              placeholder="Address"
                              name="address"
                              onChange={(event) =>
                                this.handleTextChange(event)
                              }
                            />
                            
                          </Col>
                          </Row>
                          <Row >
                          <Col md={12} className="pb-3">
                            <Form.Control
                              autoComplete={false}
                              type="number"
                              value={form.amount}
                              placeholder="Amount"
                              name="amount"
                              onChange={(event) =>
                                this.handleTextChange(event)
                              }
                            />
                            
                          </Col>
                          </Row>
                          <Row >
                          <Col md={12} className="pb-3">
                            <Form.Control
                              autoComplete={false}
                              type="text"
                              value={form.behalf}
                              placeholder="On Behalf of"
                              name="behalf"
                              onChange={(event) =>
                                this.handleTextChange(event)
                              }
                            />
                            
                          </Col>
                          </Row>
                          <Row >
                          <Col md={12} className="pb-3">
                            <Form.Control
                              autoComplete={false}
                              type="text"
                              value={form.behalf}
                              placeholder="Amount"
                              name="behalf"
                              onChange={(event) =>
                                this.handleTextChange(event)
                              }
                            />
                            
                          </Col>
                          </Row>
                          <Row >
                          <Col md={12} className="pb-3">
                            <Form.Control
                              autoComplete={false}
                              type="text"
                              value={form.occasion}
                              placeholder="On Occasion of"
                              name="occasion"
                              onChange={(event) =>
                                this.handleTextChange(event)
                              }
                            />
                            
                          </Col>
                          </Row>
                          <Row className="m-0 cta">
              <Col xs={4} sm={4} className="p-0">
                <Button
                  variant="danger"
                  block
                  onClick={()=>this.addToCart()}
                >
                  Close
                </Button>
              </Col>
              <Col xs={4} sm={4} className="p-0">
                <Button
                  variant="success"
                  block
                  onClick={()=>this.props.onClose()}
                >
                  Checkout
                </Button>
              </Col>
            </Row>
    </div>
      </>
    );
  }
}

export default React.memo(PoojaBooking);
