/* This is the sectin 5 of Devenir Pro page. */

import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

import "../../../css/views/devenir_pro/services.scss";


export default function Services(){
    return(
        <section className="DPServices">
            <Container>
                <h1>Proposez vos services comme aide de ménage avec Tiggidoo</h1>
                <Row>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src='images/Fichier 3.png' />
                            <Card.Body>
                                <Card.Title>
                                    <h3>Répondez à quelques questions</h3>
                                </Card.Title>
                                <Card.Text>
                                    <p>Complétez le formulaire d’inscription en ligne. Simple et rapide, il permet à l’équipe Tiggidoo de faire une pré-sélection des futurs Todoo.</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>

                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src='images/entrevue-entretien-menage.png' />
                            <Card.Body>
                                <Card.Title>
                                    <h3>Participez à une entrevue à distance</h3>
                                </Card.Title>
                                <Card.Text>
                                    <p>À ce stade ci, une entrevue par vidéoconférence de quelques minutes nous permet de bien préciser les attentes d’un côté comme de l’autre. Nous validons aussi toutes vos informations et répondons à vos questions.</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src='images/prestation-menage.png' />
                            <Card.Body>
                                <Card.Title>
                                    <h3>Rejoignez enfin la gang des Todoo</h3>
                                </Card.Title>
                                <Card.Text>
                                    <p>Votre profil est mis en ligne aussitôt que votre inscription est complète. Vous recevez désormais chaque notification par courriel dès qu’une offre de prestation correspond à vos critères de sélection.</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>   
    );
}


<Row>
<Col>
    <div className="cardd">
        <div className="card_img">
            <img src={"images/Fichier 3.png"} alt="" />
        </div>
        <div className="card_text_area">
            <h3 className="card_title">Répondez à quelques questions</h3>
            <p className="card_description">Complétez le formulaire d’inscription en ligne. Simple et rapide, il permet à l’équipe Tiggidoo de faire une pré-sélection des futurs Todoo.</p>
        </div>
    </div>
</Col>
<Col>
    <div className="cardd">
        <div className="card_img">
            <img src={"images/entrevue-entretien-menage.png"} alt="" />
        </div>
        <div className="card_text_area">
            <h3 className="card_title">Participez à une entrevue à distance</h3>
            <p className="card_description">À ce stade ci, une entrevue par vidéoconférence de quelques minutes nous permet de bien préciser les attentes d’un côté comme de l’autre. Nous validons aussi toutes vos informations et répondons à vos questions.</p>
        </div>
    </div>
</Col>
<Col>
    <div className="cardd">
        <div className="card_img">
            <img src={"images/prestation-menage.png"} alt="" />
        </div>
        <div className="card_text_area">
            <h3 className="card_title">Rejoignez enfin la gang des Todoo</h3>
            <p className="card_description">Votre profil est mis en ligne aussitôt que votre inscription est complète. Vous recevez désormais chaque notification par courriel dès qu’une offre de prestation correspond à vos critères de sélection.</p>
        </div>
    </div>
</Col>
</Row>
