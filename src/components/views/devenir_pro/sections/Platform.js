/* 
    This is the section 2 of Devenir Pro page. 

    Metothology CSS: BEM Methodology(Block Element Modifier)
    Description: The class name start with DP. DP is DevenirPro.
*/

import React from 'react';
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
                        <h2 className="DPPlatform__title mb-5 pb-4">Une plateforme qui améliore votre organisation au quotidien</h2>

                        <ul className="DPPlatform__text DPPlatform__text--change mt-2">
                            <li><img src={check} alt="" /><p>Inscription gratuite sans engagement</p></li>
                            <li><img src={check} alt="" /><p>Création simple et facile de votre compte prot</p></li>
                            <li><img src={check} alt="" /><p>Gestion de votre calendrier et horairet</p></li>
                            <li><img src={check} alt="" /><p>Facturation automatisée et centraliséet</p></li>
                            <li><img src={check} alt="" /><p>Soutien technique de l’équipe Tiggidoot</p></li>
                        </ul>
                        <div className="DPPlatform__button mt-5 pt-2">
                            <Button variant="outline-secondary" size="lg">Devenez un Todoo</Button>
                        </div>
                        {/* <Button variant="outline-secondary" size="lg">Je m’inscris</Button> */}
                    </Col>          
                </Row>
            </Container>
        </section>
    );
}

export default withTranslation()(Platform);