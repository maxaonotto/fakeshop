import React, { useContext } from "react";
import fas from "../../assets/fas.jpg";
import fas_negate from "../../assets/fas_negate.jpg";
import fiawn from "../../assets/fiawn.jpg";
import fiawn_negate from "../../assets/fiawn_negate.jpg";
import fashion from "../../assets/fashion.jpg";
import fashion_negate from "../../assets/fashion_negate.jpg";
import Carousel from "react-bootstrap/Carousel";
import { ThemeContext } from "../../util/ThemeUtil";

const Corausel = () => {
  const { themeMode } = useContext(ThemeContext);
  return (
    <Carousel fade variant={themeMode} controls={false} indicators={false}>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={themeMode === "light" ? fas : fas_negate}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={themeMode === "light" ? fashion : fashion_negate}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={themeMode === "light" ? fiawn : fiawn_negate}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Corausel;
