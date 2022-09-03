import React, { useContext } from "react";
import { Row, Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { selectCartAmount } from "../../redux/selectors/index.js";

import EmptyCart from "../../components/cart/EmptyCart.js";
import ProductsInCart from "../../components/cart/ProductsInCart.js";
import {
  makeThemeBgColor,
  makeThemeTextColor,
  ThemeContext,
} from "../../util/ThemeUtil.js";

const CartPage = () => {
  const { t } = useTranslation();
  const { themeMode } = useContext(ThemeContext);
  const cartAmount = useSelector(selectCartAmount);

  return (
    <Container fluid>
      <Row
        className={`px-3 fw-bold fs-2 bg-${makeThemeBgColor({ themeMode })} 
        text-${makeThemeTextColor({ themeMode })}`}
      >
        {t("Navbar.Cart")}
      </Row>
      {cartAmount === 0 ? <EmptyCart /> : <ProductsInCart />}
    </Container>
  );
};

export default CartPage;
