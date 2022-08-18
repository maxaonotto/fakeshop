import React from "react";
import fas from "../../assets/fas.jpg";
import fas_negate from "../../assets/fas_negate.jpg";
import fiawn from "../../assets/fiawn.jpg";
import fiawn_negate from "../../assets/fiawn_negate.jpg";
import fashion from "../../assets/fashion.jpg";
import fashion_negate from "../../assets/fashion_negate.jpg";
import Carousel from "react-bootstrap/Carousel";

const Corausel = ({ darkMode }) => {
  return (
    <Carousel fade variant="dark" controls={false} indicators={false}>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={darkMode === "light" ? fas : fas_negate}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={darkMode === "light" ? fashion : fashion_negate}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={darkMode === "light" ? fiawn : fiawn_negate}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Corausel;
