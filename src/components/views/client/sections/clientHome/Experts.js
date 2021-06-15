/* 
    This is the sectin Experts of Client Homepage. 

*/
import { Col, Row } from "react-bootstrap"
import { withTranslation } from "react-i18next"

import { Typography, Box } from '@material-ui/core'

import { Link } from 'react-router-dom'


function Experts({ t }) {
    return (
        <Box className="Clexperts">
            <Row className="main_wrapper">
                <Col sm={12} md={12} lg={6}>
                    <Box className="">
                        <Typography variant="h2">
                            {t("Client.Experts.title")}&nbsp;
                            <span>TOD</span>
                            <span className="green_text">Oo</span>&nbsp;?
                        </Typography>

                        <img src={"images/cl_home_experts.png"} alt="Nos experts" className="d-md-block d-lg-none mb-5"/>

                        <Box className="">
                            <p>{t("Client.Experts.text1")}</p>

                            <p>
                                <span>TIGGID</span>
                                <span className="green_text">Oo</span>&nbsp;
                                {t("Client.Experts.text2")}
                            </p>

                            <p>{t("Client.Experts.text3")}</p>
                        </Box>

                        <Box className="ClServices__cta">
                            <Link className="btn_green_bg" to="/" target="_blank" rel="noopener noreferrer">{t("Client.Experts.cta")}</Link>
                        </Box>
                    </Box>
                </Col>

                <Col sm={12} md={12} lg={6}>
                    <img src={"images/cl_home_experts.png"} alt="Nos experts" className="ClHero__img d-none d-lg-block" />
                </Col>
            </Row>
        </Box>
    );
}

export default withTranslation()(Experts);
