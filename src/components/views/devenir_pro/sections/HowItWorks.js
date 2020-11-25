/*  
    This is the section 3 of Devenir Pro page. 

    Metothology CSS: BEM Methodology(Block Element Modifier)
    Description: The class name start with DP. DP is BecomePro.
*/

import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { withTranslation } from "react-i18next";

import "../css/howitworks.scss";

function HowItWorks({ t }) {
  return (
    <section className="DPWork">
      <Container>
        <div className="DPWork__textarea mb-5 pb-4 mb-xl-5 pb-xl-5">
          <h2 className="DPWork__title mb-4">
            {t("BecomeProfesional.section_3.title")}
          </h2>
          <p className="DPWork__text mb-0">
            {t("BecomeProfesional.section_3.description_1")}
          </p>
          <p>
            {t("BecomeProfesional.section_3.description_2")}
          </p>
        </div>
        <Row className="pt-0 pt-xl-5">
          <Col md={6} lg={true}>
            <div className="DPWork__steps">
              <div className="DPWork__steps__circle">1</div>
              <p className="DPWork__steps__text mb-5 pb-4 m-xl-0 p-xl-0">
                {t("BecomeProfesional.section_3.step_1")}
              </p>
            </div>
          </Col>
          <Col md={6} lg={true}>
            <div className="DPWork__steps">
              <div className="DPWork__steps__circle">2</div>
              <p className="DPWork__steps__text mb-5 pb-4 m-xl-0 p-xl-0">
                {t("BecomeProfesional.section_3.step_2")}
              </p>
            </div>
          </Col>
          <Col md={6} lg={true}>
            <div className="DPWork__steps">
              <div className="DPWork__steps__circle">3</div>
              <p className="DPWork__steps__text mb-5 pb-4 m-xl-0 p-xl-0">
                {t("BecomeProfesional.section_3.step_3")}
              </p>
            </div>
          </Col>
          <Col md={6} lg={true}>
            <div className="DPWork__steps">
              <div className="DPWork__steps__circle">4</div>
              <p className="DPWork__steps__text">
                {t("BecomeProfesional.section_3.step_4")}
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default withTranslation()(HowItWorks);
