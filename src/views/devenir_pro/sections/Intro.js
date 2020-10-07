/*  
    This is the section 1 of Devenir Pro page. 

    Metothology CSS: BEM Methodology(Block Element Modifier)
    Description: The class name start with DP. DP is DevenirPro.
*/

import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

import "../../../css/views/devenir_pro/intro.scss";

export default function Intro() {
  return (
    <section className="DPIntro">
      <Container>
        <Row>
          <Col md={12}>
            <img
              src={"images/emploi-entretien-menage.svg"}
              alt=""
              className="DPIntro__imgMenage d-sm-block d-md-none mt-5 mb-5"
            />            
            <h1 className="DPIntro__title pb-xl-5 mb-xl-5">
              Tiggidoo connecte les professionnels du ménage résidentiel et leurs futurs clients
            </h1>
          </Col>
          <Col md={6} lg={5}>
            <div className="DPIntro__box d-flex flex-column h-100 mt-5">
              {/* <h1 className="DPIntro__title d-lg-block ">Tiggidoo connecte les professionnels du ménage résidentiel et leurs futurs clients</h1> */}
              <div className="DPIntro_paragraph">
                <p className="DPIntro__text mb-4 pb-xl-4">
                  Sans frais, sans engagement et sans complication, la
                  plateforme Tiggidoo vous permet de recevoir des offres
                  d’emploi et de les gérer comme bon vous semble.
                </p>
                <p className="DPIntro__text mb-4 pb-xl-4">
                  Profitez en plus d’outils de gestion intégrés à votre compte
                  pro conçus spécialement pour vous faciliter la tâche.
                </p>
                <p className="DPIntro__text mb-4 pb-xl-5 mb-xl-5">
                  Tiggidoo est la solution idéale pour tous les travailleurs
                  autonomes en entretien ménager qui souhaitent augmenter leurs
                  revenus.
                </p>
              </div>
              <div className="DPIntro__button mt-5 pt-2 mt-md-0 pt-md-0 ">
                <Button variant="outline-secondary" size="lg">
                  Devenez un Todoo
                </Button>
              </div>
            </div>
          </Col>
          <Col md={6} lg={6}>
            <img
              src={"images/emploi-entretien-menage.svg"}
              alt=""
              className="DPIntro__imgMenage d-none d-md-block mt-md-5"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
