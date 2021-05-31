
/* 
    This is the sectin Experts of Client Homepage. 

*/

import React from "react";
import { Col, Row } from "react-bootstrap";
import { withTranslation } from "react-i18next";


function Advantages({ t }) {
    return (
        <div className="Cladvantages">
            <h2>
                {t("Client.Advantages.title")}
            </h2>
            <Row className="pt-0 pt-xl-4">

                <Col sm={6} md={6} lg={6} xl={3}>
                    <div className="Cladvantages__row">
                        <img src={"images/icon_personel.svg"} alt="Nos experts" />
                        <p>{t("Client.Advantages.text1")}</p>
                    </div>
                </Col>

                <Col sm={6} md={6} lg={6} xl={3}>
                    <div className="Cladvantages__row">
                        <img src={"images/icon_prestation.svg"} alt="Nos experts" />
                        <p>{t("Client.Advantages.text2")}</p>
                    </div>
                </Col>

                <Col sm={6} md={6} lg={6} xl={3}>
                    <div className="Cladvantages__row">
                        <img src={"images/icon_prestation.svg"} alt="Nos experts" />
                        <p>{t("Client.Advantages.text2")}</p>
                    </div>
                </Col>

                <Col sm={6} md={6} lg={6} xl={3}>
                    <div className="Cladvantages__row">
                        <img src={"images/icon_assistance.svg"} alt="Nos experts" />
                        <p>{t("Client.Advantages.text4")}</p>
                    </div>
                </Col>

            </Row>
        </div>
    );
}

export default withTranslation()(Advantages);
