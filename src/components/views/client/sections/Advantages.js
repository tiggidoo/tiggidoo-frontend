
/* 
    This is the sectin Experts of Client Homepage. 

*/
import { Col, Row } from "react-bootstrap"
import { withTranslation } from "react-i18next"

import { Typography, Box } from '@material-ui/core'


function Advantages({ t }) {
    return (
        <Box className="Cladvantages">
            <Typography variant="h2">
                {t("Client.Advantages.title")}
            </Typography>

            <Row className="main_wrapper">
                <Col sm={6} md={6} lg={6} xl={3}>
                    <Box className="Cladvantages__row">
                        <img src={"images/icon_personel.svg"} alt="Nos experts" />
                        <p>{t("Client.Advantages.text1")}</p>
                    </Box>
                </Col>

                <Col sm={6} md={6} lg={6} xl={3}>
                    <Box className="Cladvantages__row">
                        <img src={"images/icon_prestation.svg"} alt="Nos experts" />
                        <p>{t("Client.Advantages.text2")}</p>
                    </Box>
                </Col>

                <Col sm={6} md={6} lg={6} xl={3}>
                    <Box className="Cladvantages__row">
                        <img src={"images/icon_tarifs.svg"} alt="Nos experts" />
                        <p>{t("Client.Advantages.text2")}</p>
                    </Box>
                </Col>

                <Col sm={6} md={6} lg={6} xl={3}>
                    <Box className="Cladvantages__row">
                        <img src={"images/icon_assistance.svg"} alt="Nos experts" />
                        <p>{t("Client.Advantages.text4")}</p>
                    </Box>
                </Col>
            </Row>
        </Box>
    );
}

export default withTranslation()(Advantages);
