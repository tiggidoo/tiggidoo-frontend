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
                <h2 className="DPApplication__title mb-3 pb-3">{ t("BecomeProfesional.section_6.title") }</h2>
                {/* <p className="DPApplication__description mb-0 pb-0">{ t("BecomeProfesional.section_6.description") }</p> */}
                <p className="DPApplication__description mb-5 pb-3">{ t("BecomeProfesional.section_6.description") }</p>
                <div className="DPApplication__button">
                    <Button variant="outline-secondary" size="lg">{ t("BecomeProfesional.section_6.button") }</Button>            
                </div>
            </Container>
        </section>
   );
}

export default withTranslation()(SubmitMyApplication);