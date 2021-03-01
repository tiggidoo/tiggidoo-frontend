/* This is the sectin 8 of Devenir Pro page. */

import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { withTranslation } from "react-i18next";

import '../css/myquestions.scss';

function MyQuestions({ t }){
    return(
        <section className="DPMyQuestions">
            <Container>
                <Row>
                    <Col lg={5}>
                        <h2 className="DPMyQuestions__title mb-5">
                            {t("BecomeProfesional.section_8.title")}
                        </h2>
                    </Col>
                    <Col lg="7">
                        <p className="DPMyQuestions__descripton  mb-5 pb-1">
                            {t("BecomeProfesional.section_8.description")}
                        </p>
                        <div  className="DPMyQuestions__button">
                            <Button variant="outline-secondary" size="lg">{t("BecomeProfesional.section_8.button")}</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
   );
}

export default withTranslation()(MyQuestions);