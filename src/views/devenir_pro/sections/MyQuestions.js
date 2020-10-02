/* This is the sectin 8 of Devenir Pro page. */

import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

import '../../../css/views/devenir_pro/myquestions.scss';

export default function MyQuestions(){
    return(
        <section className="DPMyQuestions">
            <Container>
                <Row>
                    <Col lg={5}>
                        <h1 className="DPMyQuestions__title">Un service 100% humain</h1>
                    </Col>
                    <Col lg="7">
                        <p className="DPMyQuestions__descripton">Vous avez besoin de quelques informations supplémentaires? N’hésitez surtout pas à nous poser vos questions, un humain vous répond avec rapidité et bonne humeur.</p>
                        <div  className="DPMyQuestions__button">
                            <Button variant="outline-secondary" size="lg">Contactez-nous</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
   );
}