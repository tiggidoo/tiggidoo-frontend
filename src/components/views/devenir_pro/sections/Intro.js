/*  
    This is the section 1 of Devenir Pro page. 

    Metothology CSS: BEM Methodology(Block Element Modifier)
    Description: The class name start with DP. DP is BecomePro.
*/

import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { withTranslation } from "react-i18next";

import "../../../../css/views/devenir_pro/intro.scss";

function Intro({ t }) {
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
            {/* 
            <h1 className="DPIntro__title pb-xl-5 mb-xl-5">
              {t("BecomeProfesional.section_1.title")}
            </h1>
 */}
          </Col>
          <Col md={6} lg={5}>
            <div className="DPIntro__box d-flex flex-column h-100 mt-5">
              <h1 className="DPIntro__title mb-5 pb-xl-5 ">
                {t("BecomeProfesional.section_1.title")}
              </h1>
              <div className="DPIntro_paragraph">
                <p className="DPIntro__text mb-4 pb-xl-4">
                  {t("BecomeProfesional.section_1.paragraph_1")}
                </p>
                <p className="DPIntro__text mb-4 pb-xl-4">
                  {t("BecomeProfesional.section_1.paragraph_2")}
                </p>
                <p className="DPIntro__text mb-4 pb-xl-5 mb-xl-5">
                  {t("BecomeProfesional.section_1.paragraph_3")}
                </p>
              </div>
              <div className="DPIntro__button mt-5 pt-2 mt-md-0 pt-md-0 ">
                <Button variant="outline-secondary" size="lg">
                  {t("BecomeProfesional.section_1.button")}
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

export default withTranslation()(Intro);
