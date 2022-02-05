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
import { cartCountResponseAction } from "../../actions";
import { getCartList, setCartList } from "../../apiManager/services/cartServices";
import Select from 'react-select';
import DatePicker from 'react-datepicker'

class PoojaInfo extends Component {
  state = {
    currentCart: [{}],
    errors: [{}],
    activeIndex: "0",
    validated:false
  };
  componentDidMount() {
    let {starList} =this.props

    if(!starList.length)
    this.props.starListService()

    let cartList = getCartList();


    let poojaID = this.props.poojaID;

    cartList = cartList && cartList.length ? cartList : [{}];
    let itemCart = cartList.filter((x) => x.pooja_id === poojaID);
    let currentCart = [{}]
    if(itemCart && itemCart.length){
      currentCart= itemCart;
      if(currentCart!==this.state.currentCart)
      this.setState({currentCart:currentCart,activeIndex: (currentCart.length - 1) + "" })
    }
  }

  componentDidUpdate(prevProps) {}

  addToTempCart = () => {
    if(!this.checkValid())return;
    let { currentCart } = this.state;
    this.setState({ currentCart: [...currentCart, {}] },()=>{
    this.setState({ activeIndex: (currentCart.length) + "" })
    });




  };

  addToCart = () => {
        if(!this.checkValid() && !currentCart.length)return;
        let { currentCart } = this.state;
        let filterCart=getCartList()
        filterCart = filterCart.filter((x) => x.pooja_id !== currentCart[0].pooja_id);
        setCartList(filterCart)
        setCartList([...getCartList(),...currentCart]);
        this.props.cartCountResponseAction(getCartList().length)
        this.props.onClose();
  };


  handleTextChange = (event, index) => {
    let { currentCart } = this.state;
    currentCart[index][event.target.name] = event.target.value;
    currentCart[index].date = currentCart[index].date?currentCart[index].date:new Date()
    currentCart[index].price = this.props.poojaInfo.price
    currentCart[index].pooja_id = this.props.poojaInfo.id
    this.setState({ currentCart: currentCart });
  };

  
  handleDateChange = (date, index) => {
    let { currentCart } = this.state;
    currentCart[index]['date'] = new Date(date);
    this.setState({ currentCart: currentCart });
  };

  handleSelectChange = (selected,index) => {
    let { currentCart } = this.state;
    currentCart[index]['star_id'] = selected?selected.id:0;
    this.setState({ currentCart: currentCart });
  };

  checkValid = () => {
    let { currentCart } = this.state;
    let errors=[];
    let errorCount = 0;
    currentCart.forEach((element) => {
      let obj = {name:!element['name']?true:false,star_id:!element['star_id']?true:false,date:!element['date']?true:false,count:!element['count']?true:false }
      let anyTrue = Object.keys(obj).some(k => !obj[k]);
      if(anyTrue===false)errorCount++
      errors.push(obj)
    });
  this.setState({errors:errors})
  if(errorCount>0)
  return false
  else
  return true
  };

  removeItemAt=(index)=>{
    let {currentCart} =this.state
    currentCart.splice(index, 1)
    this.setState({currentCart:currentCart,activeIndex: (currentCart.length ) + "",errors:[{}] })
  }

  render() {
    let { currentCart, activeIndex,errors } = this.state;
    let {starList} =this.props


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
              <h2>{this.props.name}</h2>
              <h1>{this.props.price} ₹</h1>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Accordion
              defaultActiveKey={currentCart.length - 1 + ""}
              activeKey={activeIndex + ""}
            >
              {currentCart.map((element, index) => {
                let error = errors[index]||{}
                return (
                    <Form noValidate >
                  <Card key={"Card-" + index}>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey={index + ""}
                      onClick={() => this.setState({ activeIndex: "" + index })}
                    >
                      {!element.name
                        ? "Enter Devotee Information"
                        : element.name}
                       {element.name
                        ? <Button
                  variant="danger"
                  block
                  onClick={()=>this.removeItemAt(index)}
                >
                  Remove
                </Button>:null}
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={"" + index}>
                      <Card.Body key={"Body" + index}>
                        <Row key={"Row" + index}>
                          <Col md={12} className="pb-3">
                            <Form.Control
                            autoComplete={false}
                              type="text"
                              value={element.name}
                              placeholder="Name"
                              name="name"
                              onChange={(event) =>
                                this.handleTextChange(event, index)
                              }
                              required
                              isInvalid={error.name}
                            />
                            <Form.Control.Feedback type="invalid">
            Please provide a valid name.
          </Form.Control.Feedback>
                          </Col>
                          <Col md={12} className="pb-3">
                            <Select
                            placeholder="Star"
                                className="basic-single"
                                classNamePrefix="select"
                                isClearable={true}
                                isSearchable={true}
                                name="color"
                                options={starList}
                                value={starList && starList.length && element.star_id ? starList.filter(x=>x.id===element.star_id):[]}
                                getOptionLabel={option => `${option.name_ml}`}
                                getOptionValue={option =>option['id']}
                                onChange={(selected)=>this.handleSelectChange(selected,index)}
                              />
                            <Form.Control.Feedback type="invalid">
            Please provide a valid star.
          </Form.Control.Feedback>
                          </Col>
                          <Col md={12} className="pb-3">
                          <Form.Check 
                            type="switch"
                            id="custom-switch"
                            value={true}
                            label="Enter Multiple Dates"
                          />
                          </Col>
                          <Col md={12} className="pb-3">
                            {/* <Form.Control
                              type="text"
                              placeholder="Date"
                              name="date"
                              onChange={(event) =>
                                this.handleTextChange(event, index)
                              }
                              required
                            /> */}

                             <DatePicker
                                selected={element.date?new Date(element.date):new Date()}
                                name="date"
                                onChange={date => this.handleDateChange(date,index)}
                                peekNextMonth
                                showMonthDropdown
                                showYearDropdown
                                dropdownMode="select"
                                withPortal
                              />
                            <Form.Control.Feedback type="invalid">
            Please provide a valid date.
          </Form.Control.Feedback>
                          </Col>
                          <Col md={12} className="pb-3">
                            <Form.Control
                              type="number"
                              placeholder="Count"
                              name="count"
                              onChange={(event) =>
                                this.handleTextChange(event, index)
                              }
                              required
                              isInvalid={error.count}
                              value={element.count}

                            />
                            <Form.Control.Feedback type="invalid">
            Please provide a valid qty.
          </Form.Control.Feedback>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>

                  </Form>
                );
              })}
            </Accordion>
            <Row className="m-0 cta">
              <Col xs={4} sm={4} className="p-0">
                <Button
                  variant="primary"
                  onClick={()=>this.addToTempCart()}
                  block
                >
                  Add new name
                </Button>
              </Col>
              <Col xs={4} sm={4} className="p-0">
                <Button
                  variant="success"
                  block
                  onClick={()=>this.addToCart()}
                >
                  Add to cart
                </Button>
              </Col>
              <Col xs={4} sm={4} className="p-0">
                <Button
                  variant="danger"
                  block
                  onClick={()=>this.props.onClose()}
                >
                  Close
                </Button>
              </Col>
            </Row>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  //   poojaList:state.poojaReducer.poojaList
  starList:state.starReducer.starList
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  //   poojaListService: (data) => dispatch(poojaListService(data)),
  cartCountResponseAction: (data) => dispatch(cartCountResponseAction(data)),
});

const connectedPoojaInfo = connect(
  mapStateToProps,
  mapDispatchToProps
)(PoojaInfo);
export default React.memo(connectedPoojaInfo);
