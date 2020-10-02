/*  
    This is the section 3 of Devenir Pro page. 

    Metothology CSS: BEM Methodology(Block Element Modifier)
    Description: The class name start with DP. DP is DevenirPro.
*/

import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import '../../../css/views/devenir_pro/howitworks.scss';

export default function HowItWorks(){
    return(
        <section className="DPWork">
            <Container>
                <div className="DPWork__textarea">
                    <h1 className="DPWork__title">Comment ça fonctionne?</h1>
                    <h4 className="DPWork__text">C’est vous le patron! Vous décidez où et quand vous travaillez.</h4>
                    <h4 className="DPWork__text">Bingo! Votre profil est sélectionné par votre futur client :</h4>
                </div>
                <Row>
                    <Col md={6} lg={true}>
                        <div className="DPWork__steps">
                            <div className = "DPWork__steps__circle">1</div>
                            <p className = "DPWork__steps__text">Soyez immédiatement prévenu par courriel lorsqu’une nouvelle offre est arrivée sur votre compte pro</p>
                        </div>
                    </Col>
                    <Col md={6} lg={true}>
                        <div className="DPWork__steps">
                            <div className = "DPWork__steps__circle">2</div>
                            <p className = "DPWork__steps__text">Visualisez l’offre client que vous êtes libre d’accepter ou de refuser</p>
                        </div>
                    </Col>
                    <Col md={6} lg={true}>
                        <div className="DPWork__steps">
                            <div className = "DPWork__steps__circle">3</div>
                            <p className = "DPWork__steps__text">Effectuez un ménage de qualité, obtenez un avis positif sur votre profil</p>
                        </div>
                    </Col>
                    <Col md={6} lg={true}>
                        <div className="DPWork__steps">
                            <div className = "DPWork__steps__circle">4</div>
                            <p className = "DPWork__steps__text">Obtenez vos honoraires rapidement et de façon sécurisée.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

    );
}