/* 
    This is the sectin 5 of Devenir Pro page. 

    Metothology CSS: BEM Methodology(Block Element Modifier)
    Description: The class name start with DP. DP is DevenirPro.

*/

import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import "../../../css/views/devenir_pro/services.scss";

export default function SomeMinutes(){
    return(
        <section className="DPServices">
            <Container>
                <h1 className="DPServices__title">Proposez vos services comme aide de ménage avec Tiggidoo</h1>
                <Row>
                    <Col sm={12} md={6} lg={4}>
                        <div className="box">
                            <div className="box__imagen">
                                <img src={"images/Fichier 3.png"} alt="" />
                            </div>    
                            <div className="box__title">
                                <h3>Répondez à quelques questions</h3>
                            </div>
                            <div className="box__description">
                                <p className="card_description">Complétez le formulaire d’inscription en ligne. Simple et rapide, il permet à l’équipe Tiggidoo de faire une pré-sélection des futurs Todoo.</p>
                            </div>                            
                        </div> 
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                        <div className="box">
                            <div className="box__imagen">
                                <img src={"images/entrevue-entretien-menage.png"} alt="" />
                            </div>    
                            <div className="box__title">
                                <h3>Participez à une entrevue à distance</h3>
                            </div>
                            <div className="box__description">
                                <p className="card_description">À ce stade ci, une entrevue par vidéoconférence de quelques minutes nous permet de bien préciser les attentes d’un côté comme de l’autre. Nous validons aussi toutes vos informations et répondons à vos questions.</p>
                            </div>                            
                        </div> 
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                        <div className="box">
                            <div className="box__imagen">
                                <img src={"images/prestation-menage.png"} alt="" />
                            </div>    
                            <div className="box__title">
                                <h3>Rejoignez enfin la gang des Todoo</h3>
                            </div>
                            <div className="box__description">
                                <p className="card_description">Votre profil est mis en ligne aussitôt que votre inscription est complète. Vous recevez désormais chaque notification par courriel dès qu’une offre de prestation correspond à vos critères de sélection.</p>
                            </div>                            
                        </div> 
                    </Col>
                </Row>
                
            </Container>
        </section>   
   );
}

