import React, { Component } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { poojaListService, starListService } from "../../apiManager/services";
import PoojaInfo from "../poojaInfoForm/poojaInfoForm";
class PoojaBooking extends Component {
  state = {
    showPoojaInfo: false,
    poojaData: {}
  }
  componentDidMount() {
    this.props.poojaListService()
    this.props.starListService()
  }

  componentDidUpdate(prevProps) { }

  handleClose = () => this.setState({ showPoojaInfo: false });

  handleShow = (element) => {
    this.setState(
      { poojaData: element },
      () => {
        this.setState({ showPoojaInfo: true })
      }
    )
  };

  render() {
    let { poojaList } = this.props
    let { showPoojaInfo, poojaData } = this.state
    return (
      <>
        <div className="dark-background offerings">
          <Row className=" m-0">
            <Col md={12} className="sticky pt-2 pb-2">
              <Row className="m-0">
                <Col md={6}>
                  <h1 className="c-white">Offerings</h1>
                </Col>
                <Col md={6} className="text-right">
                  {/* <Button className="booking-cta">Add to Cart</Button> */}
                </Col>
              </Row>
            </Col>

            <Col md={12}>
              <div className="offers-wrapper">
                <Row className="m-0">

                  {poojaList && poojaList.length ? poojaList.map((element, index) => {
                    return (<Col md={3} className="mb-4  text-center" onClick={() => this.handleShow(element)} key={index + "col"}>
                      <Form.Label className="offer" key={index + "label"}>
                        <Row>
                          <Col md={12}>


                            <Row key={index + "row"} className="m-0 p-3">
                              <Col md={12} key={index + "a"} >
                                <Row className="offering m-0" key={index + "name"} >{element.name_en}</Row>
                                {/* <Row className="offering" key={index+"cat"} >{element.poojaCategoryName}</Row> */}
                                {/* <Row className="offering" key={index+"desc"} >{element.poojaDescription}</Row> */}
                              </Col>
                              <Col md={12} key={index + "b"}>
                                <Row className="price m-0" key={index + "price"} >{element.price + " ₹"}</Row>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                        <div className="deity-offering">
                          <img src="assets/images/sree-padmanabhaswamy.png" />
                        </div>
                      </Form.Label>

                    </Col>)
                  }) : null}


                </Row>
              </div>
            </Col>

          </Row>

        </div>

        {showPoojaInfo ? <PoojaInfo show={showPoojaInfo} onClose={this.handleClose} poojaInfo={poojaData} poojaID={poojaData.id} name={poojaData.name_en} price={poojaData.price} /> : null}

      </>
    );
  }
}

const mapStateToProps = (state) => ({
  poojaList: state.poojaReducer.poojaList
});


const mapDispatchToProps = (dispatch, ownProps) => ({
  poojaListService: () => dispatch(poojaListService()),
  starListService: () => dispatch(starListService()),
});

const connectedPoojaBooking = connect(
  mapStateToProps,
  mapDispatchToProps
)(PoojaBooking);
export default React.memo(connectedPoojaBooking);
