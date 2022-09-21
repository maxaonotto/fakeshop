import React, { useContext } from "react";
import { useTranslation } from "react-i18next";

import { Button, Col, Row } from "react-bootstrap";
import { makeThemeBgColor, ThemeContext } from "../../util/ThemeUtil";
import {
  getListOfProducts,
  getProductCategory,
} from "../../service/getProducts";

const FilterProduct = ({ setList }) => {
  const { t } = useTranslation();
  const { themeMode } = useContext(ThemeContext);
  const handleCategory = (category) => {
    category !== "all"
      ? getProductCategory(category)
          .then((res) => setList(res.data))
          .catch(() => setList([]))
      : getListOfProducts()
          .then((res) => setList(res.data))
          .catch(() => setList([]));
  };

  return (
    <Row
      className={`m-0 p-3 d-flex justify-content-center 
      bg-${makeThemeBgColor({ themeMode })}`}
    >
      <Col
        as={Button}
        variant={themeMode === "light" ? "dark" : "light"}
        className="mx-3 mb-1"
        onClick={() => handleCategory("men's clothing")}
      >
        {t("Category.Men")}
      </Col>
      <Col
        as={Button}
        variant={themeMode === "light" ? "dark" : "light"}
        className="mx-3 mb-1"
        onClick={() => handleCategory("women's clothing")}
      >
        {t("Category.Women")}
      </Col>
      <Col
        as={Button}
        variant={themeMode === "light" ? "dark" : "light"}
        className="mx-3 mb-1"
        onClick={() => handleCategory("jewelery")}
      >
        {t("Category.Jewelery")}
      </Col>
      <Col
        as={Button}
        variant={themeMode === "light" ? "dark" : "light"}
        className="mx-3 mb-1"
        onClick={() => handleCategory("electronics")}
      >
        {t("Category.Electronic")}
      </Col>
      <Col
        as={Button}
        variant={themeMode === "light" ? "dark" : "light"}
        className="mx-3 mb-1"
        onClick={() => handleCategory("all")}
      >
        {t("Category.All")}
      </Col>
    </Row>
  );
};

export default FilterProduct;
