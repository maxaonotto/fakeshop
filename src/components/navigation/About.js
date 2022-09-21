import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import {
  makeThemeBgColor,
  makeThemeTextColor,
  ThemeContext,
} from "../../util/ThemeUtil";

const About = () => {
  const { t } = useTranslation();
  const { themeMode } = useContext(ThemeContext);
  return (
    <section
      className={`section 
          bg-${makeThemeBgColor({ themeMode })}
          `}
    >
      <div className="container">
        <div
          className={`content-section 
          bg-${makeThemeBgColor({ themeMode })}
          text-${makeThemeTextColor({ themeMode })}`}
        >
          <div>
            <h1
              className={`title
          text-${makeThemeTextColor({ themeMode })}`}
            >
              {t("Navbar.About")}
            </h1>
          </div>
          <div className="content">
            <h3
              className={`title
          text-${makeThemeTextColor({ themeMode })}`}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="d-flex">
              <a
                href="https://fakestoreapi.com"
                target="_blank"
                rel="noreferrer"
              >
                <Button variant={themeMode === "light" ? "dark" : "light"}>
                  {t("ReadMore")}
                </Button>
              </a>
              <div className="social mx-2">
                <a
                  href="https://github.com/keikaavousi/fake-store-api"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    color={themeMode === "light" ? "black" : "white"}
                    className="p-1 cursor-pointer"
                    size="xl"
                    icon={faGithub}
                  />
                </a>
                <a
                  href="https://fakestoreapi.com/docs"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    color={themeMode === "light" ? "black" : "white"}
                    className="p-1 cursor-pointer"
                    size="xl"
                    icon={faBook}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            alt="img"
            src="https://user-images.githubusercontent.com/64998244/117210504-616eaf00-adbd-11eb-8dc6-8b13bdee45bb.png"
            className="py-1"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
