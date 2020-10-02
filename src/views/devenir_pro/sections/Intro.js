/*  
    This is the section 1 of Devenir Pro page. 

    Metothology CSS: BEM Methodology(Block Element Modifier)
    Description: The class name start with DP. DP is DevenirPro.
*/

import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ButtonWhite from '../../../components/ButtonWhite';

import "../../../css/views/devenir_pro/intro.scss";

export default function Intro(){
    return(
        <section className="DPIntro">
            <Container>
                <Row>
                    <Col md={6} lg={5}>
                        <div class="DPIntro__box">
                            <h1 className="DPIntro__title">Tiggidoo connecte les professionnels du ménage résidentiel et leurs futurs clients</h1>
                            <p className="DPIntro__text">Sans frais, sans engagement et sans complication, la plateforme Tiggidoo vous permet de recevoir des offres d’emploi et de les gérer comme bon vous semble.</p>
                            
                            <p className="DPIntro__text">Profitez en plus d’outils de gestion intégrés à votre compte pro conçus spécialement pour vous faciliter la tâche.</p>
                            <p className="DPIntro__text">Tiggidoo est la solution idéale pour tous les travailleurs autonomes en entretien ménager qui souhaitent augmenter leurs revenus.</p>
                            
                            <div className="DPIntro__button">
                                <ButtonWhite />
                            </div>
                        </div>
                    </Col>          
                    <Col md={6} lg={7}>
                        <img src={"images/emploi-entretien-menage.svg"} alt="" className="DPIntro__imgMenage"/>
                    </Col>          
                </Row>
            </Container>
        </section>
    );
}