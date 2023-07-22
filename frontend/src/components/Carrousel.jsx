import React from "react";
import { Carousel } from "react-bootstrap";
import fleur from "../assets/fleur.jpg";
import banner from "../assets/ban4.jpeg";
import holmes from "../assets/holme.jpg";
import ado from "../assets/ado.jpeg";
import "../App.css";

function Carrousel() {
  const imageSize = {
    width: "400px", // Set your desired width here
    height: "600px", // Set your desired height here
  };

  return (
    <Carousel fade interval={3000}>
      <Carousel.Item className="slide">
        <img
          className="d-block w-100"
          src={holmes}
          alt="Cliff Above a Stormy Sea"
          style={imageSize}
        />
        <Carousel.Caption>
          <h5>Profitez 10% SOLDES</h5>
          {/* <p className="content-carousel">
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="slide">
        <img
          className="d-block w-100"
          src={fleur}
          alt="Sunset Over the City"
          style={imageSize}
        />
        <Carousel.Caption>
          <h5>Profitez 10% SOLDES</h5>
          {/* <p className="content-carousel">
            Nulla vitae elit libero, a pharetra augue mollis interdum.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="slide">
        <img
          className="d-block w-100"
          src={ado}
          alt="Canyon at Night"
          style={imageSize}
        />
        <Carousel.Caption>
          <h5>Profitez 10% SOLDES</h5>
          {/* <p className="content-carousel">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="slide">
        <img
          className="d-block w-100"
          src={banner}
          alt="Canyon at Night"
          style={imageSize}
        />
        <Carousel.Caption>
          <h5>Profitez 10% SOLDES</h5>
          {/* <p className="content-carousel">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrousel;
