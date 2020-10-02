/* 
    This is the sectin 7 of Devenir Pro page.

    Metothology CSS: BEM Methodology(Block Element Modifier)
    Description: The class name start with DP. DP is DevenirPro.
*/

import React from 'react';
import { Container, Accordion, Card } from 'react-bootstrap'

import '../../../css/views/devenir_pro/questionpro.scss';

export default function QuestionsPro(){
    return(

        <section className="DPQestionPro">
            <Container>
                <h1 className="DPQestionPro__title">Les questions que les professionnels se posent</h1>
                <Accordion defaultActiveKey="0">
                <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            <h2 className="DPQestionPro__subtitle">What things are covered in support?</h2>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <p className="DPQestionPro__description">Ut recalcitrantes et rebellis quod tenus rerum tumore et per quid strepit custodiri : - Custodiri quid ut iusserim quodam postulat maiestati et tenus formidine - Inusitato incusat postulat ordo haec ignorare nos tumore incusat - Nos incusat inusitato ut recalcitrantes nimirum quod ignorare. Ut recalcitrantes et rebellis quod tenus rerum tumore et per quid strepit custodiri</p>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                            <h2 className="DPQestionPro__subtitle">How many shortcakes/blocks are there in Saasland?</h2>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                <p className="DPQestionPro__description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus dolorum voluptatem recusandae, magni ducimus sequi assumenda ad? Incidunt, illo reprehenderit animi accusantium ullam et eius delectus porro rem modi sapiente.</p>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="2">
                            <h2 className="DPQestionPro__subtitle">Can I use all the Home page demos in a single website?</h2>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body>
                                <p className="DPQestionPro__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem animi beatae nihil, libero eaque soluta pariatur minima incidunt similique mollitia, fugit maiores nesciunt consectetur perferendis porro ea asperiores provident adipisci!</p>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="3">
                            <h2 className="DPQestionPro__subtitle">What happens after my support is expired?</h2>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="3">
                            <Card.Body>
                                <p className="DPQestionPro__description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt id voluptate cupiditate qui optio. Aspernatur ab impedit, ipsam incidunt consectetur adipisci, reprehenderit dignissimos culpa, tempora error fuga perferendis eius odit!</p>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>

            </Container>
        </section>

        // <Container>
        //     <h1>Les questions que les professionnels se posent</h1>
        //     <h2>What things are covered in support?</h2>
        //     <p>Ut recalcitrantes et rebellis quod tenus rerum tumore et per quid strepit custodiri : - Custodiri quid ut iusserim quodam postulat maiestati et tenus formidine - Inusitato incusat postulat ordo haec ignorare nos tumore incusat - Nos incusat inusitato ut recalcitrantes nimirum quod ignorare. Ut recalcitrantes et rebellis quod tenus rerum tumore et per quid strepit custodiri</p>

        //     <ul>
        //         <li>How many shortcakes/blocks are there in Saasland?</li>
        //         <li>Can I use all the Home page demos in a single website?</li>
        //         <li>What happens after my support is expired?</li>
        //     </ul>
        // </Container>


   );
}