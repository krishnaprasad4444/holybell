import React, { Component } from "react";
import {
    Accordion,
    Button,
    Card,
    Col,
    Form,
    Modal,
    Row
} from "react-bootstrap";
import { connect } from "react-redux";
import { getCartList } from "../../apiManager/services/cartServices";
class PoojaInfo extends Component {
  state = {
    currentCart: [{}],
    activeIndex: "0",
  };
  componentDidMount() {
    let cartList = getCartList();
    let poojaID = this.props.poojaInfo.poojaID;
    cartList = cartList && cartList.length ? cartList : [{}];
    let itemCart = cartList.filter((x) => x.poojaID === poojaID);
    itemCart = itemCart && itemCart.length ? itemCart.push({}) : [{}];
  }

  componentDidUpdate(prevProps) {}

  addToTempCart = () => {
    let { currentCart, activeIndex } = this.state;
    this.setState({ currentCart: [...currentCart, {}] });
    this.setState({ activeIndex: parseInt(activeIndex) + 1 + "" });
  };

  handleTextChange = (event, index) => {
    let { currentCart } = this.state;
    currentCart[index][event.target.name] = event.target.value;
    this.setState({ currentCart: currentCart });
  };

  render() {
    let { currentCart, activeIndex } = this.state;

    return (
      <>
        <Modal
          show={this.props.show}
          onHide={() => this.props.onClose()}
          backdrop="static"
          keyboard={true}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header>
            <Modal.Title className="offering-wrap">
              <h2>{this.props.poojaInfo.poojaName}</h2>
              <h1>{this.props.poojaInfo.price} ₹</h1>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Accordion
              defaultActiveKey={currentCart.length - 1 + ""}
              activeKey={activeIndex + ""}
            >
              {currentCart.map((element, index) => {
                return (
                  <Card key={"Card-" + index}>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey={index + ""}
                      onClick={() => this.setState({ activeIndex: "" + index })}
                    >
                      {currentCart.length - 1 === index
                        ? "Enter Devotee Information"
                        : element.name}
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={"" + index}>
                      <Card.Body key={"Body" + index}>
                        <Row key={"Row" + index}>
                          <Col md={12} className="pb-3">
                            <Form.Control
                              type="text"
                              value={element.name}
                              placeholder="Name"
                              name="name"
                              onChange={(event) =>
                                this.handleTextChange(event, index)
                              }
                            />
                          </Col>
                          <Col md={12} className="pb-3">
                            <Form.Control
                              type="text"
                              placeholder="Star"
                              name="star"
                              onChange={(event) =>
                                this.handleTextChange(event, index)
                              }
                            />
                          </Col>
                          <Col md={12} className="pb-3">
                            <Form.Control
                              type="text"
                              placeholder="Date"
                              name="date"
                              onChange={(event) =>
                                this.handleTextChange(event, index)
                              }
                            />
                          </Col>
                          <Col md={12} className="pb-3">
                            <Form.Control
                              type="text"
                              placeholder="Count"
                              name="count"
                              onChange={(event) =>
                                this.handleTextChange(event, index)
                              }
                            />
                          </Col>
                        </Row>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                );
              })}
            </Accordion>
          </Modal.Body>
          <Modal.Footer>
            <Row>
              <Col xs={6} sm={6}>
                <Button
                  variant="secondary"
                  block
                  onClick={() => this.props.onClose()}
                >
                  Add to cart
                </Button>
              </Col>
              <Col xs={6} sm={6}>
                <Button
                  variant="primary"
                  onClick={() => this.addToTempCart()}
                  block
                >
                  Add new name
                </Button>
              </Col>
            </Row>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  //   poojaList:state.poojaReducer.poojaList
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  //   poojaListService: (data) => dispatch(poojaListService(data)),
});

const connectedPoojaInfo = connect(
  mapStateToProps,
  mapDispatchToProps
)(PoojaInfo);
export default React.memo(connectedPoojaInfo);
