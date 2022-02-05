import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import 'swiper/swiper.scss';
import { connect } from "react-redux";
import {eventsListService} from "../../apiManager/services"
import moment from "moment";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';


class Home extends Component {
  
  componentDidMount() {
    this.props.eventsListService({})
  }

  componentDidUpdate(prevProps) {
    if(this.props.eventList!==prevProps.prevProps){

    }
  }

  render() {
    let { eventList } = this.props
    return (
      <>
      <div className="dark-background">
      <Swiper
          spaceBetween={0}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
        <SwiperSlide>
          <div className="lord-img"><img src="assets/images/sree-padmanabhaswamy.png" width="55%" /></div>
          <div className="bg-image"><img src="assets/images/background.jpg" /></div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="bg-image"><img src="assets/images/gallery01.jpg" /></div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="bg-image"><img src="assets/images/gallery02.jpg" /></div>
        </SwiperSlide>
      
      </Swiper>
    <div className="home-events-panel">
      
      <div className="d-flex justify-content-between pl-4 pr-4">
        <h1>Upcoming Events</h1>
        <a href="#" className="">View all events</a>
      </div>
      
      <div className="upcoming-events">
          <Row className="m-0">
            {eventList && eventList.length?
            eventList.map(element => {
              return (
                <Col md={12} lg={4} xl={3} className="event border-0">
                  <div className="event-date">
                      <h6>{moment(new Date(element.date)).format("MMM")}</h6>
                      <h5>{moment(new Date(element.date)).format("DD")}</h5>
                  </div>
                  <div className="event-des">
                      <h3>{element.name}</h3>
                      <h4>{element.description}</h4>
                  </div>
            </Col>
              )
            })
            :null}
          </Row>
          </div>
      </div>





    </div> 

      


      </>
    );
  }
}
const mapStateToProps = (state) => ({
  eventList:state.eventsReducer.eventList
});


const mapDispatchToProps = (dispatch, ownProps) => ({
  eventsListService: (data) => dispatch(eventsListService(data)),
});

const connectedHome = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
export default React.memo(connectedHome);
