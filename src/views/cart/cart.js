import React, { Component } from "react";
import { connect } from "react-redux";
import { poojaListService, starListService } from "../../apiManager/services";
import {Media,Col,Row,Button, Table} from 'react-bootstrap'
import { getCartList, setCartList } from "../../apiManager/services/cartServices";
import moment from "moment";
import { getArraySumByKey } from "../../helpers/tools";
import PoojaInfo from "../poojaInfoForm/poojaInfoForm";


const styles = {
  mediaItem: {
    border: "1px solid black",
    backgroundColor: "#f5f5f5",
    paddingTop: "5px",
    paddingBottom: "5px"
  },
  mediaItemButtons: {
    paddingTop: "5px",
    paddingBottom: "5px"
  }
};

class Cart extends Component {
  state={
    cartList : getCartList(),
    showPoojaInfo:false,
    poojaInfo:{},
    poojaID:0,
    name:"",
    price:""
  }
  componentDidMount() {  
    let {starList,poojaList} =this.props

    if(!starList.length)
    this.props.starListService()
    if(!poojaList.length)
    this.props.poojaListService()
  }

  componentDidUpdate(prevProps) {}

  removeItemAt=(index)=>{
    let {cartList} =this.state
    cartList.splice(index, 1)
    setCartList(cartList)
    this.setState({cartList:cartList })
  }

  handleClose = () => {this.setState({showPoojaInfo:false})};
  handleShow = (list,id,name,price) => {this.setState({showPoojaInfo:true , poojaInfo:list,poojaID:id,name:name,price:price})};
  

  render() {
    let {cartList,showPoojaInfo,poojaInfo,poojaID,name,price} = this.state
    
    let {starList,poojaList} =this.props


    
    return (
      <>
      <div className="dark-background offerings">
        <Row>
          <Col md={9}>
            
      <Table className="cart-table">
              <thead>
                <tr>
                  <th>Deity</th>
                  <th>Name</th>
                  <th>Star</th>
                  <th>Date</th>
                  <th>Offering</th>
                  <th>Count</th>
                  <th>Price</th>
                </tr>
              </thead><tbody>
       { cartList && cartList.length ? cartList.map((element,index) => {
         element.total = (element.price * element.count)
          return(
          
          
            
            
              
                <tr>
                  <td>Sree padmanabhaswamy</td>
                  <td>{element.name}</td>
                  <td>{starList[starList.findIndex(x=>x.id===element.star_id)]?starList[starList.findIndex(x=>x.id===element.star_id)].name_ml:null}</td>
                  <td>{moment(element.date).format('MM-DD-YYYY')}</td>
                  <td>{poojaList[poojaList.findIndex(x=>x.id===element.pooja_id)]?poojaList[poojaList.findIndex(x=>x.id===element.pooja_id)].name_ml:null}</td>
                  <td>{element.count}</td>
                  <td>{(element.price * element.count).toFixed(2)}</td>
                  <td>
                    <Button
              variant="primary"
              onClick={()=>this.handleShow(getCartList().filter(x => x.pooja_id === element.pooja_id),element.pooja_id,poojaList[poojaList.findIndex(x=>x.id===element.pooja_id)]?poojaList[poojaList.findIndex(x=>x.id===element.pooja_id)].name_ml:null,element.price)}
              block
            >
              Edit
            </Button></td>
                  <td><Button
              variant="danger"
              onClick={()=>this.removeItemAt(index)}
              block
            >
              Remove
            </Button>
            </td>
                </tr>
              )
            

        
        }):null}
        </tbody>
        </Table>
           
          </Col>
          <Col md={3} className="">
              <div className="payment">
                <Row>
                  <Col md={6}>Subtotal</Col>
                  <Col md={6} className="text-right">{(getArraySumByKey(cartList,"total").toFixed(2))}</Col>
                  <hr />
                  <Col md={6}>Tax</Col>
                  <Col md={6} className="text-right">0.00</Col>
                  <hr />
                  <Col md={6}>Shipping</Col>
                  <Col md={6} className="text-right">0.00</Col>
                  <hr />
                  <Col md={6}><h1>Total</h1></Col>
                  <Col md={6} className="text-right"><h1>{(getArraySumByKey(cartList,"total").toFixed(2))}</h1></Col>
                </Row>
              </div>
          </Col>
        </Row>
        {cartList && cartList.length ? (
        <Row className="d-flex justify-content-end mr-4">
          <Col md={1}>
            <Button
              variant="primary"
              onClick={()=>setCartList([])}
              block
            >
              Remove All
            </Button>
          </Col>
          <Col md={1}>
            <Button
              variant="primary"
              onClick={()=>console.log(getCartList())}
              block
            >
              Checkout
            </Button>
          </Col>
        </Row>):null}
    </div>

    {showPoojaInfo?<PoojaInfo show={showPoojaInfo} onClose={this.handleClose} poojaInfo={poojaInfo} poojaID={poojaID} name={name} price={price}/>:null}

      </>
    );
  }
}

const mapStateToProps = (state) => ({
  starList:state.starReducer.starList,
  poojaList:state.poojaReducer.poojaList
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  poojaListService: () => dispatch(poojaListService()),
  starListService: () => dispatch(starListService()),
});

const connectedCart = connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
export default React.memo(connectedCart);
