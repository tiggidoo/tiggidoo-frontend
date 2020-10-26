/* 
    This is the sectin 5 of Devenir Pro page. 

    Metothology CSS: BEM Methodology(Block Element Modifier)
    Description: The class name start with DP. DP is BecomePro.

*/

import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { withTranslation } from "react-i18next";

import "../../../../css/views/devenir_pro/services.scss";

function Services({ t }) {
  return (
    <div className="DPServices">
      <Container>
        <h2 className="DPServices__title mb-4 pb-5 mb-xl-5 pb-xl-5">
          { t("BecomeProfesional.section_5.title") }
        </h2>
        <Row className="pt-0 pt-xl-4">
          <Col sm={12} md={6} lg={4}>
            <div className="DPServices__box">
              <div className="DPServices__boxImagen">
                <img src={"images/Fichier 3.png"} alt="" />
              </div>
              <div className="DPServices__boxTitle">
                <h3>{ t("BecomeProfesional.section_5.step_1.title") }</h3>
              </div>
              <div className="DPServices__boxDescription">
                <p>
                  { t("BecomeProfesional.section_5.step_1.description") }
                </p>
              </div>
            </div>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <div className="DPServices__box">
              <div className="DPServices__boxImagen">
                <img src={"images/entrevue-entretien-menage.png"} alt="" />
              </div>
              <div className="DPServices__boxTitle">
                <h3>{ t("BecomeProfesional.section_5.step_2.title") }</h3>
              </div>
              <div className="DPServices__boxDescription">
                <p>
                  { t("BecomeProfesional.section_5.step_2.description") }
                </p>
              </div>
            </div>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <div className="DPServices__box">
              <div className="DPServices__boxImagen">
                <img src={"images/prestation-menage.png"} alt="" />
              </div>
              <div className="DPServices__boxTitle">
                <h3>{ t("BecomeProfesional.section_5.step_3.title") }</h3>
              </div>
              <div className="DPServices__boxDescription">
                <p>
                  { t("BecomeProfesional.section_5.step_3.description") }
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default withTranslation()(Services);
