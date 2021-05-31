
/* 
    This is the sectin Experts of Client Homepage. 

*/

import React from "react";
import { Col, Row } from "react-bootstrap";
import { withTranslation } from "react-i18next";
import InputPostCode from "../section-parts/InputPostCode";


function Cta({ t }) {
    return (
        <div className="Clcta">
            <Row className="pt-0 pt-xl-4">
            
            <Col sm={12} md={12} lg={6}> 
                <h2>{t("Client.Experts.title")}</h2>
            </Col>

            <Col sm={12} md={12} lg={6}> 
                <InputPostCode ClassColor="btn_blue_bg" />
            </Col>

            </Row>
        </div>
    );
}

export default withTranslation()(Cta);
