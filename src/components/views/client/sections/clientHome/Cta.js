
/* 
    This is the sectin Experts of Client Homepage. 

*/
import { Col, Row } from "react-bootstrap"
import { withTranslation } from "react-i18next"

import InputPostCode from "../../section-parts/InputPostCode"

import { Typography, Box } from '@material-ui/core'


function Cta({ t }) {
    return (
        <Box className="Clcta">
            <Row className="main_wrapper">
                <Col sm={12} md={12} lg={6}>
                    <Typography variant="h2">{t("Client.Cta.title")}</Typography>
                </Col>

                <Col sm={12} md={12} lg={6}>
                    <InputPostCode ClassColor="btn_blue_bg" />
                </Col>
            </Row>
        </Box>
    );
}

export default withTranslation()(Cta);
