/* 
    This is the sectin 6 of Devenir Pro page.

    Metothology CSS: BEM Methodology(Block Element Modifier)
    Description: The class name start with DP. DP is BecomePro.

*/
import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { withTranslation } from "react-i18next";

import '../../../../css/views/devenir_pro/application.scss';

function SubmitMyApplication({ t }){
    return(
        <section className="DPApplication">
            <Container>
                <h2 className="DPApplication__title mb-3 pb-3">Prêt à augmenter votre revenu?</h2>
                <p className="DPApplication__description mb-5 pb-3">Débutez dès maintenant le processus de recrutement. Vous obtiendrez une réponse en moins de 48h.</p>
                <div className="DPApplication__button">
                    <Button variant="outline-secondary" size="lg">COMMENCER</Button>            
                </div>
            </Container>
        </section>
   );
}

export default withTranslation()(SubmitMyApplication);