/* This is the sectin 4 of Devenir Pro page. 
   Here we have a slider with some people who become in a professional
*/

import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export default function BecomePro(){
    return(
       <section>
         <Container>
            <h1>Sliders</h1>
            <Row>
               <Col md={6} lg={true}>
                  Slider
               </Col>
               <Col md={6} lg={true}>
                  Slider
               </Col>
               <Col md={6} lg={true}>
                  Slider
               </Col>
               <Col md={6} lg={true}>
                  Slider
               </Col>
            </Row>
         </Container>
      </section>
   );
}