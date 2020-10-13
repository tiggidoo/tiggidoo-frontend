/* 
    This is the sectin 7 of Devenir Pro page.

    Metothology CSS: BEM Methodology(Block Element Modifier)
    Description: The class name start with DP. DP is DevenirPro.

*/
import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { withTranslation } from "react-i18next";

import '../../../../css/views/devenir_pro/conditions.scss';

function Conditions({ t }){
    return(
        <section className="DPConditions">
            <Container>
                <div className="DPConditions__title mb-5 pb-5 m-xl-5 p-xl-5 pt-xl-0 mt-xl-0">
                    <h2 className="mb-5 pb-5">Les 4 critères essentiels pour intégrer la plateforme Tiggidoo</h2>
                    <p className="DPConditions__desTitle pt-2 mb-xl-3 pb-xl-3">La plateforme Tiggidoo est un intermédiaire entre des personnes à la recherche d’un service de ménage de qualité et des travailleurs autonomes experts en entretien ménager. Le lien de confiance, le respect et l’engagement envers la qualité sont les valeurs fondamentales de notre entreprise. C’est pourquoi vous devez répondre à quelques critères pour devenir un Todoo et recevoir des demandes de prestation via notre plateforme.</p>
                </div>
                <Row>
                    <Col sm={12} md={6} xl={3}>
                        <div className="DPConditions__box">
                            <div className="DPConditions__boxImagen">
                                <img src={"images/identite.png"} alt="" />
                            </div>    
                            <div className="DPConditions__boxTitle">
                                <h3>Une identité vérifiée</h3>
                            </div>
                            <div className="DPConditions__boxDescription">
                            <p>Pour des raisons de sécurité évidentes, nous procédons à la vérification de l’identité de tous les travailleurs autonomes qui s’inscrivent sur la plateforme Tiggidoo.</p>
                            </div>                            
                        </div> 
                    </Col>
                    <Col sm={12} md={6} xl={3}>
                        <div className="DPConditions__box">
                            <div className="DPConditions__boxImagen">
                                <img src={"images/banque.png"} alt="" />
                            </div>    
                            <div className="DPConditions__boxTitle">
                                <h3>Un compte bancaire valide</h3>
                            </div>
                            <div className="DPConditions__boxDescription">
                            <p>Vous devez posséder un compte bancaire à votre nom pour le versement de vos honoraires suite à la réalisation de vos prestations d’entretien ménager.</p>
                            </div>                            
                        </div> 
                    </Col>

                    <Col sm={12} md={6} xl={3}>
                        <div className="DPConditions__box">
                            <div className="DPConditions__boxImagen">
                                <img src={"images/internet.png"} alt="" />
                            </div>    
                            <div className="DPConditions__boxTitle">
                                <h3>Un accès à Internet</h3>
                            </div>
                            <div className="DPConditions__boxDescription">
                            <p>D’un ordinateur ou d’un cellulaire, une connexion internet est primordiale pour le bon déroulement de vos activités sur la plateforme Tiggidoo.</p>
                            </div>                            
                        </div> 
                    </Col>

                    <Col sm={12} md={6} xl={3}>
                        <div className="DPConditions__box">
                            <div className="DPConditions__boxImagen">
                                <img src={"images/charte-qualite-menage.png"} alt="" />
                            </div>    
                            <div className="DPConditions__boxTitle">
                                <h3>Le respect de notre charte de qualité</h3>
                            </div>
                            <div className="DPConditions__boxDescription">
                            <p>Afin d’offrir un service impeccable à chaque client, vous devez vous engager à respecter nos conditions générales, les termes de chaque prestation et notre charte de qualité.</p>
                            </div>                            
                        </div> 
                    </Col>
                </Row>      
                <div className="DPConditions__button">               
                    <Button variant="outline-secondary" size="lg">DEVENIR PRO</Button>
                </div>
            </Container>
        </section>
   );
}

export default withTranslation()(Conditions);