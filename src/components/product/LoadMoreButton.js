import React, { useContext } from "react";
import { Button, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { makeThemeBgColor, ThemeContext } from "../../util/ThemeUtil";

const LoadMoreButton = ({ setLoadMore }) => {
  const { t } = useTranslation();
  const { themeMode } = useContext(ThemeContext);
  const handleMore = () => setLoadMore((current) => current + 6);

  return (
    <Row
      className={`m-0 d-flex justify-content-center
      bg-${makeThemeBgColor({ themeMode })}
    `}
    >
      <Button
        className="w-25"
        variant={themeMode === "light" ? "dark" : "light"}
        onClick={handleMore}
      >
        {t("LoadMore")}
      </Button>
    </Row>
  );
};

export default LoadMoreButton;
