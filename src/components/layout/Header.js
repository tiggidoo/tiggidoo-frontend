import React from "react";
import { Helmet } from 'react-helmet';
import { Button, Container, Navbar, Nav } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { logOutAction } from '../../store/actions/authAction';

import { useTranslation } from "react-i18next";

import "./css/navbar.scss";
import { withRouter } from "react-router";



const Header = ({ history }) => {

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
  //console.log(t("SEO.meta.description"));

  const { auth: { isLoggedIn, access_token } } = useSelector(
    state => ({
      auth: state.auth
    })
  )

  const dispatch = useDispatch();
  const logOut = (e) => {
    e.preventDefault();
    dispatch(logOutAction(access_token, history));
  }

  return (
    <div>
      <Helmet>
        <title>{ t("SEO.title") }</title>
        <meta name="description" content= {t("SEO.meta.description")}/>
        <meta name="keywords" content= {t("SEO.meta.keywords")}  />
      </Helmet>

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
                {t("Nav.menu.becomeTodo")}
              </Nav.Link>
            </Nav>

            {(isLoggedIn) ? 
              (
                <Button href="#home" size="lg" className="NavBar__btnLogin" onClick={ e => logOut(e) }>
                  {t("Nav.menu.logout")}
                </Button>
              )
            :
              (
                <Button href="/login" size="lg" className="NavBar__btnLogin">
                  {t("Nav.menu.login")}
                </Button>
              )
            }

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
    </div>
  );
}

export default withRouter(Header);