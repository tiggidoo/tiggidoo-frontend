import React from "react";
import { Button, Container, Navbar, Nav } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import "../../css/components/layout/navbar.scss";



export default function Header() {

  const { t, i18n } = useTranslation();
  function changeLanguage(lang) {
    //When the user click on the button to change the language, this function is reached and the language is changed.
    i18n.changeLanguage(lang);
  }
  
  const lang = i18n.language;
  let langLabel = "En";
  if(lang === 'en'){
    langLabel = "Fr";
  }
  return (
    <Navbar bg="light" expand="xl" className="NavBar">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={"images/logo_tiggidoo.svg"}
            className="NavBar__logo"
            alt=""
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse className="justify-content-end">
          <Nav className="mr-auto NavBar__menu">
            <Nav.Link style={{fontSize: '20px'}} href="#home" className="NavBar__menu__item">
              Services
            </Nav.Link>
            <Nav.Link style={{fontSize: '20px'}} href="/" className="NavBar__menu__item">
              Devenir ToDoo
            </Nav.Link>
          </Nav>

          <Button href="#home" size="lg" className="NavBar__btnLogin">
            {t("Nav.menu.login")}
          </Button>

          <Nav className="NavBar__language">
              <Nav.Link
                href="#home"
                className="NavBar__language__item"
                onClick={() => changeLanguage(langLabel.toLowerCase())}
              >
                {langLabel}
              </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
