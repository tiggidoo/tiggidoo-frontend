/*  
    This is the section 3 of Devenir Pro page. 

    Metothology CSS: BEM Methodology(Block Element Modifier)
    Description: The class name start with DP. DP is BecomePro.
*/

import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { withTranslation } from "react-i18next";

import "../../../../css/views/devenir_pro/howitworks.scss";

function HowItWorks({ t }) {
  return (
    <section className="DPWork">
      <Container>
        <div className="DPWork__textarea mb-5 pb-4 mb-xl-5 pb-xl-5">
          <h2 className="DPWork__title mb-4">Comment ça fonctionne?</h2>
          <p className="DPWork__text">
            C’est vous le patron! Vous décidez où et quand vous travaillez.
            Bingo! Votre profil est sélectionné par votre futur client :
          </p>
        </div>
        <Row className="pt-0 pt-xl-5">
          <Col md={6} lg={true}>
            <div className="DPWork__steps">
              <div className="DPWork__steps__circle">1</div>
              <p className="DPWork__steps__text mb-5 pb-4 m-xl-0 p-xl-0">
                Soyez immédiatement prévenu par courriel lorsqu’une nouvelle
                offre est arrivée sur votre compte pro
              </p>
            </div>
          </Col>
          <Col md={6} lg={true}>
            <div className="DPWork__steps">
              <div className="DPWork__steps__circle">2</div>
              <p className="DPWork__steps__text mb-5 pb-4 m-xl-0 p-xl-0">
                Visualisez l’offre client que vous êtes libre d’accepter ou de
                refuser
              </p>
            </div>
          </Col>
          <Col md={6} lg={true}>
            <div className="DPWork__steps">
              <div className="DPWork__steps__circle">3</div>
              <p className="DPWork__steps__text mb-5 pb-4 m-xl-0 p-xl-0">
                Effectuez un ménage de qualité, obtenez un avis positif sur
                votre profil
              </p>
            </div>
          </Col>
          <Col md={6} lg={true}>
            <div className="DPWork__steps">
              <div className="DPWork__steps__circle">4</div>
              <p className="DPWork__steps__text">
                Obtenez vos honoraires rapidement et de façon sécurisée.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default withTranslation()(HowItWorks);
