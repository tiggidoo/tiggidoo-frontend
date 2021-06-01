
/* 
    This is the sectin Experts of Client Homepage. 

*/
import { Link } from 'react-router-dom'

import { Col, Row } from "react-bootstrap"
import { withTranslation } from "react-i18next"

import { Typography, Box } from '@material-ui/core'


function ProposeService({ t }) {
    return (
        <Box className="ClProposeService">
            <Box className="main_wrapper">
                <Row >
                    <Col sm={12} md={12} lg={7} className="ClProposeService__column">
                        <Typography variant="h2">{t("Client.ProposeServices.title")}</Typography>

                        <p>
                            {t("Client.ProposeServices.text1")}&nbsp;
                            <span>TIGGID</span>
                            <span className="green_text">Oo</span>&nbsp;
                            {t("Client.ProposeServices.text2")}
                        </p>

                        <Box className="ClProposeService__cta text-center">
                            <Link to="/" className="btn_blue_bg">{t("Client.ProposeServices.cta")}</Link>
                        </Box>

                    </Col>

                    <Col sm={12} md={12} lg={5}>
                        <img src={"../images/proposeServices.png"} alt="Propose Services" />
                    </Col>
                </Row>
            </Box>
        </Box>
    );
}

export default withTranslation()(ProposeService);
