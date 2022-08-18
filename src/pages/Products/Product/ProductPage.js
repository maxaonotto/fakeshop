import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useProductId from "../../../hooks/useProductId.js";
import {
  Context,
  makeThemeBgColor,
  makeThemeTextColor,
} from "../../../util/ThemeUtil.js";

const ProductPage = () => {
  const { t, themeMode } = useContext(Context);
  const [product] = useProductId();

  return (
    <Card
      className={`flex-row bg-${makeThemeBgColor({ themeMode })} 
      text-center py-3 rounded-0`}
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
        <Card.Link as={Link} to="/cart">
          {t("Buy")}
        </Card.Link>
        <Card.Link>{t("Cart.Button")}</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default ProductPage;
