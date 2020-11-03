/* 
    This is the sectin 7 of Devenir Pro page.

    Metothology CSS: BEM Methodology(Block Element Modifier)
    Description: The class name start with DP. DP is BecomePro.

*/
import React from "react";
import { Link } from "react-router-dom";
import { Button, Col, Container, Row } from "react-bootstrap";
import { withTranslation } from "react-i18next";

import "../../../../css/views/devenir_pro/conditions.scss";

function Conditions({ t }) {
  return (
    <section className="DPConditions">
      <Container>
        <div className="DPConditions__title mb-5 pb-5 m-xl-5 p-xl-5 pt-xl-0 mt-xl-0">
          <h2 className="mb-5 pb-5">
            { t("BecomeProfesional.section_7.title") }
          </h2>
          <p className="DPConditions__desTitle pt-2 mb-xl-3 pb-xl-3">
            { t("BecomeProfesional.section_7.paragraph_1") }
          </p>
        </div>
        <Row>
          <Col sm={12} md={6} xl={3}>
            <div className="DPConditions__box">
              <div className="DPConditions__boxImagen">
                <img
                  src={"images/identite.png"}
                  alt=""
                  className="DPConditions__boxImagen__imagen_1"
                />
              </div>
              <div className="DPConditions__boxTitle">
                <h3>{ t("BecomeProfesional.section_7.step_1.title") }</h3>
              </div>
              <div className="DPConditions__boxDescription">
                <p>
                  { t("BecomeProfesional.section_7.step_1.description") }
                </p>
              </div>
            </div>
          </Col>
          <Col sm={12} md={6} xl={3}>
            <div className="DPConditions__box">
              <div className="DPConditions__boxImagen">
                <img
                  src={"images/banque.png"}
                  alt=""
                  className="DPConditions__boxImagen__imagen_2"
                />
              </div>
              <div className="DPConditions__boxTitle">
                <h3>{ t("BecomeProfesional.section_7.step_2.title") }</h3>
              </div>
              <div className="DPConditions__boxDescription">
                <p>
                  { t("BecomeProfesional.section_7.step_2.description") }
                </p>
              </div>
            </div>
          </Col>

          <Col sm={12} md={6} xl={3}>
            <div className="DPConditions__box">
              <div className="DPConditions__boxImagen">
                <img
                  src={"images/internet.png"}
                  alt=""
                  className="DPConditions__boxImagen__imagen_3"
                />
              </div>
              <div className="DPConditions__boxTitle">
                <h3>{ t("BecomeProfesional.section_7.step_3.title") }</h3>
              </div>
              <div className="DPConditions__boxDescription">
                <p>
                  { t("BecomeProfesional.section_7.step_3.description") }
                </p>
              </div>
            </div>
          </Col>

          <Col sm={12} md={6} xl={3}>
            <div className="DPConditions__box">
              <div className="DPConditions__boxImagen">
                <img
                  src={"images/charte-qualite-menage.png"}
                  alt=""
                  className="DPConditions__boxImagen__imagen_4"
                />
              </div>
              <div className="DPConditions__boxTitle">
                <h3>{ t("BecomeProfesional.section_7.step_4.title") }</h3>
              </div>
              <div className="DPConditions__boxDescription">
                <p>
                  { t("BecomeProfesional.section_7.step_4.description") }
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <div className="DPConditions__button">
          <Link to="/proform">
            <Button variant="outline-secondary" size="lg">
              { t("BecomeProfesional.section_7.button") }
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}

export default withTranslation()(Conditions);
