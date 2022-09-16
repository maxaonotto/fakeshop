import React, { useContext } from "react";
import fas from "../../assets/fas.jpg";
import fas_negate from "../../assets/fas_negate.jpg";
import fiawn from "../../assets/fiawn.jpg";
import fiawn_negate from "../../assets/fiawn_negate.jpg";
import fashion from "../../assets/fashion.jpg";
import fashion_negate from "../../assets/fashion_negate.jpg";
import Carousel from "react-bootstrap/Carousel";
import {
  makeThemeBgColor,
  makeThemeTextColor,
  ThemeContext,
} from "../../util/ThemeUtil";

const Corausel = () => {
  const { themeMode } = useContext(ThemeContext);
  return (
    <>
      <Carousel
        fade
        variant={themeMode}
        controls={false}
        indicators={false}
        className={`bg-${makeThemeBgColor({ themeMode })} `}
      >
        <Carousel.Item
          interval={2000}
          className="d-flex justify-content-center"
        >
          <img
            style={{ height: "90vh" }}
            className="d-block "
            src={themeMode === "light" ? fas : fas_negate}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item
          interval={2000}
          className="d-flex justify-content-center"
        >
          <img
            style={{ height: "90vh" }}
            className="d-block"
            src={themeMode === "light" ? fashion : fashion_negate}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item
          interval={2000}
          className="d-flex justify-content-center"
        >
          <img
            style={{ height: "90vh" }}
            className="d-block"
            src={themeMode === "light" ? fiawn : fiawn_negate}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <section
        className={`d-flex justify-content-center 
      fs-1 fw-bold p-2
      bg-${makeThemeBgColor({ themeMode })} 
      text-${makeThemeTextColor({ themeMode })}`}
      >
        Limited Products
      </section>
    </>
  );
};

export default Corausel;
