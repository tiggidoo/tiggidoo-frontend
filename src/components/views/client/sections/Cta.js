
/* 
    This is the sectin Experts of Client Homepage. 

*/
import { Col, Row } from "react-bootstrap";
import { withTranslation } from "react-i18next";
import InputPostCode from "../section-parts/InputPostCode";


function Cta({ t }) {
    return (
        <div className="Clcta">
            <Row className="main_wrapper">
            
            <Col sm={12} md={12} lg={6}> 
                <h2>{t("Client.Cta.title")}</h2>
            </Col>

            <Col sm={12} md={12} lg={6}> 
                <InputPostCode ClassColor="btn_blue_bg" />
            </Col>

            </Row>
        </div>
    );
}

export default withTranslation()(Cta);
