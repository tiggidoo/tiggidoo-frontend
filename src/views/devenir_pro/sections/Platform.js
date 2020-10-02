/* 
    This is the section 2 of Devenir Pro page. 

    Metothology CSS: BEM Methodology(Block Element Modifier)
    Description: The class name start with DP. DP is DevenirPro.
*/

import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import check from '../../../images/icon_check.png';
import ButtonWhite from '../../../components/ButtonWhite';

import '../../../css/views/devenir_pro/platform.scss';

export default function Platform(){
    return(
        <section className="DPPlatform">
            <Container>
                <Row>
                    <Col md={6} lg={true}>
                        <div className="DPPlatform__imgTime">
                            <img src={"images/menage.svg"} alt="" />
                        </div>
                    </Col>          
                    <Col md={6} lg={true}>
                        <h1 className="DPPlatform__title">Une plateforme qui améliore votre organisation au quotidien</h1>
                        <ul class="DPPlatform__text DPPlatform__text--change">
                            <li><img src={check} alt="" /><h3>Inscription gratuite sans engagement</h3></li>
                            <li><img src={check} alt="" /><h3>Création simple et facile de votre compte prot</h3></li>
                            <li><img src={check} alt="" /><h3>Gestion de votre calendrier et horairet</h3></li>
                            <li><img src={check} alt="" /><h3>Facturation automatisée et centraliséet</h3></li>
                            <li><img src={check} alt="" /><h3>Soutien technique de l’équipe Tiggidoot</h3></li>
                        </ul>
                        <div className="DPPlatform__button">
                                <ButtonWhite />
                        </div>
                        {/* <Button variant="outline-secondary" size="lg">Je m’inscris</Button> */}
                    </Col>          
                </Row>
            </Container>
        </section>
    );
}