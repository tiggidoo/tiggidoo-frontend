/* 
    This is the sectin 6 of Devenir Pro page.

    Metothology CSS: BEM Methodology(Block Element Modifier)
    Description: The class name start with DP. DP is DevenirPro.

*/
import React from 'react';
import { Button, Container } from 'react-bootstrap';

import '../../../css/views/devenir_pro/application.scss';

export default function SubmitMyApplication(){
    return(
        <section className="DPApplication">
            <Container>
                <h2 className="DPApplication__title">Prêt à augmenter votre revenu?</h2>
                <p className="DPApplication__description">Débutez dès maintenant le processus de recrutement. Vous obtiendrez une réponse en moins de 48h.</p>
                <div className="DPApplication__button">
                    <Button variant="outline-secondary" size="lg">COMMENCER</Button>            
                </div>
            </Container>
        </section>
   );
}