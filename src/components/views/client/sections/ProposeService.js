
/* 
    This is the sectin Experts of Client Homepage. 

*/
import { Link } from 'react-router-dom'

import { Col, Row } from "react-bootstrap";
import { withTranslation } from "react-i18next";


function ProposeService({ t }) {
    return (
        <div className="ClProposeService">
            <Row>
                <Col sm={12} md={12} lg={7} className="ClProposeService__column">
                    <h2>{t("Client.ProposeServices.title")}</h2>

                    <p>
                        {t("Client.ProposeServices.text1")}&nbsp;
                        <span>TIGGID</span><span className="green_text">Oo</span>&nbsp;
                        {t("Client.ProposeServices.text2")}
                    </p>

                    <div className="ClProposeService__cta text-center">
                     <Link to="/" className="btn_blue_bg">{t("Client.ProposeServices.cta")}</Link>
                    </div>
                    
                </Col>

                <Col sm={12} md={12} lg={5}>
                    <img src={"../images/proposeServices.png"} alt="Propose Services" />
                </Col>
            </Row>
        </div>
    );
}

export default withTranslation()(ProposeService);
