/* 
    This is the section 2 of Devenir Pro page. 

    Metothology CSS: BEM Methodology(Block Element Modifier)
    Description: The class name start with DP. DP is BecomePro.
*/

import React from 'react';
import { Link } from "react-router-dom";
import { Button, Col, Container, Row } from 'react-bootstrap';
import check from '../../../../images/icon_check.png';
import { withTranslation } from "react-i18next";

import '../../../../css/views/devenir_pro/platform.scss';

function Platform({ t }){
    return(
        <section className="DPPlatform">
            <Container>
                <Row>
                    <Col md={6} lg={true}>
                        <div className="DPPlatform__imgTime d-none d-md-block">
                            <img src={"images/menage.svg"} alt="" />
                        </div>
                    </Col>          
                    <Col md={6} lg={true}>
                        <h2 className="DPPlatform__title mb-5 pb-4 pt-xl-5 mt-xl-4 ml-xl-5 pl-xl-5">
                            {t("BecomeProfesional.section_2.title")}
                        </h2>

                        <ul className="DPPlatform__text DPPlatform__text--change mt-2 pt-xl-5 mt-xl-4 ml-xl-5 pl-xl-5">
                            <li><img src={check} alt="" /><p>{t("BecomeProfesional.section_2.li1")}</p></li>
                            <li><img src={check} alt="" /><p>{t("BecomeProfesional.section_2.li2")}</p></li>
                            <li><img src={check} alt="" /><p>{t("BecomeProfesional.section_2.li3")}</p></li>
                            <li><img src={check} alt="" /><p>{t("BecomeProfesional.section_2.li4")}</p></li>
                            <li><img src={check} alt="" /><p>{t("BecomeProfesional.section_2.li5")}</p></li>
                        </ul>
                        <div className="DPPlatform__button mt-5 pt-2">
                            <Link to="/proform">
                                <Button variant="outline-secondary" size="lg">{t("BecomeProfesional.section_2.button")}</Button>
                            </Link>
                        </div>
                    </Col>          
                </Row>
            </Container>
        </section>
    );
}

export default withTranslation()(Platform);