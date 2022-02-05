import React, { Component } from "react";
import { Col, Row, Carousel, Item, Caption, Card, Container, Button, Accordion, Form, CardColumns  } from "react-bootstrap";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import ReactBnbGallery from 'react-bnb-gallery';
import 'swiper/swiper.scss';
const photos = [
  {
    photo: "https://source.unsplash.com/aZjw7xI3QAA/1144x763",
    caption: "Viñales, Pinar del Río, Cuba",
    subcaption: "Photo by Simon Matzinger on Unsplash",
    thumbnail: "https://source.unsplash.com/aZjw7xI3QAA/100x67"
  },
  {
    photo: "https://source.unsplash.com/c77MgFOt7e0/1144x763",
    caption: "La Habana, Cuba",
    subcaption: "Photo by Gerardo Sanchez on Unsplash",
    thumbnail: "https://source.unsplash.com/c77MgFOt7e0/100x67"
  },
  {
    photo: "https://source.unsplash.com/QdBHnkBdu4g/1144x763",
    caption: "Woman smoking a tobacco",
    subcaption: "Photo by Hannah Cauhepe on Unsplash",
    thumbnail: "https://source.unsplash.com/QdBHnkBdu4g/100x67"
  }
];

class PoojaBooking extends Component {
  state={
    showGallery:false
  }
  componentDidMount() {
  }

  componentDidUpdate(prevProps) {}

  render() {
      let {showGallery}=this.state
    return (
      <>
     <CardColumns>
      <Card onClick={() => this.setState({showGallery:true})}>
        <Card.Img variant="top" src="assets/images/history-3.jpg" />
        <Card.Body>
          <Card.Title>Card title that wraps to a new line</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
      <small className="text-muted">Uplodad on 13 jan 2020</small>
    </Card.Footer>
      </Card>
      <Card  onClick={() => this.setState({showGallery:true})}>
        <Card.Img variant="top" src="assets/images/history-1.jpg" />
        <Card.Body>
          <Card.Title>Card title that wraps to a new line</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
      <small className="text-muted">Uplodad on 13 jan 2020</small>
    </Card.Footer>
      </Card>
      <Card  onClick={() => this.setState({showGallery:true})}>
        <Card.Img variant="top" src="assets/images/history-2.jpg" />
        <Card.Body>
          <Card.Title>Card title that wraps to a new line</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
      <small className="text-muted">Uplodad on 13 jan 2020</small>
    </Card.Footer>
      </Card>
  </CardColumns>
  <ReactBnbGallery
          show={showGallery}
          photos={photos}
          onClose={() => this.setState({showGallery:false})}
        />
      </>
    );
  }
}

export default React.memo(PoojaBooking);
