import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  ThemeContext,
  makeThemeBgColor,
  makeThemeTextColor,
} from "../../../util/ThemeUtil.js";
import useProductId from "../../../hooks/useProductId.js";
import { useTranslation } from "react-i18next";
import { addToCart } from "../../../redux/reducer/cartReducer.js";
import { useDispatch } from "react-redux";

const ProductPage = () => {
  const { themeMode } = useContext(ThemeContext);
  const [product] = useProductId();
  const { t } = useTranslation();
  const dispatch = useDispatch();

  return (
    <Card
      key={product.id}
      className={`flex-row bg-${makeThemeBgColor({ themeMode })} 
      text-center py-3 rounded-0 m-2`}
      style={{ height: "80vh" }}
    >
      <Card.Img
        variant="left"
        width="500px"
        height="500px"
        src={product.image}
        className="mx-5 my-3"
      />
      <Card.Body
        className={`md-6 px-5 text-${makeThemeTextColor({ themeMode })}`}
      >
        <Card.Text className="text-uppercase">{product.category}</Card.Text>
        <Card.Title className="text-uppercase my-5">{product.title}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text className="lead fw-bolder m-5">
          {t("Rating")} {product.rating && product.rating.rate}
          <FontAwesomeIcon className="fs-5 px-1" icon={faStar} />
        </Card.Text>
        <Card.Text className="fw-bold fs-5 my-4">$ {product.price}</Card.Text>
        <Button
          className={`text-${makeThemeBgColor({ themeMode })} 
          bg-${makeThemeTextColor({ themeMode })} border-0`}
          onClick={() => dispatch(addToCart(product))}
        >
          {t("Cart.Button")}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductPage;
