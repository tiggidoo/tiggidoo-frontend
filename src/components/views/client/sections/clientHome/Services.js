/* 
    This is the sectin Services of Client Homepage. 

*/
import { Col, Row } from "react-bootstrap"
import { Typography, Box } from '@material-ui/core'
import { withTranslation } from "react-i18next"
import { Link } from 'react-router-dom'


function Services({ t }) {
    return (
        <Box className="ClServices">
            <Typography variant="h2" className="mb-4 pb-5">
                {t("Client.Services.title")}
            </Typography>

            <Row>
                <Col sm={12} md={6} lg={6} xl={3}>
                    <Box className="ClServices__box">
                        <Box className="ClServices__boxImage">
                            <img src={"images/icon_security.svg"} alt="" />
                        </Box>

                        <Box className="ClServices__boxTitle">
                            <Typography variant="h4" >{t("Client.Services.serviceTitre1")}</Typography>
                        </Box>

                        <Box className="DPServices__boxDescription">
                            <ul className="check_mark_list">
                                <li>{t("Client.Services.service1Text1")}</li>
                                <li>{t("Client.Services.service1Text2")}</li>
                                <li>{t("Client.Services.service1Text3")}</li>
                            </ul>
                        </Box>
                    </Box>
                </Col>

                <Col sm={12} md={6} lg={6} xl={3}>
                    <Box className="ClServices__box">
                        <Box className="ClServices__boxImage">
                            <img src={"images/icon_simplicity.svg"} alt="" />
                        </Box>

                        <Box className="ClServices__boxTitle">
                            <Typography variant="h4">
                                {t("Client.Services.serviceTitre2")}
                            </Typography>

                        </Box>

                        <Box className="DPServices__boxDescription">
                            <ul className="check_mark_list">
                                <li>{t("Client.Services.service2Text1")}</li>
                                <li>{t("Client.Services.service2Text2")}</li>
                                <li>{t("Client.Services.service2Text3")}</li>
                            </ul>
                        </Box>
                    </Box>
                </Col>

                <Col sm={12} md={6} lg={6} xl={3}>
                    <Box className="ClServices__box">
                        <Box className="ClServices__boxImage">
                            <img src={"images/icon_quality.svg"} alt="" />
                        </Box>

                        <Box className="ClServices__boxTitle">
                            <Typography variant="h4">{t("Client.Services.serviceTitre3")}</Typography>
                        </Box>

                        <Box className="DPServices__boxDescription">
                            <ul className="check_mark_list">
                                <li>{t("Client.Services.service3Text1")}</li>
                                <li>{t("Client.Services.service3Text2")}</li>
                                <li>{t("Client.Services.service3Text3")}</li>
                            </ul>
                        </Box>
                    </Box>
                </Col>

                <Col sm={12} md={6} lg={6} xl={3}>
                    <Box className="ClServices__box">
                        <Box className="ClServices__boxImage">
                            <img src={"images/icon_flexibility.svg"} alt="" />
                        </Box>

                        <Box className="ClServices__boxTitle">
                            <Typography variant="h4">{t("Client.Services.serviceTitre4")}</Typography>
                        </Box>

                        <Box className="DPServices__boxDescription">
                            <ul className="check_mark_list">
                                <li>{t("Client.Services.service4Text1")}</li>
                                <li>{t("Client.Services.service4Text2")}</li>
                                <li>{t("Client.Services.service4Text3")}</li>
                            </ul>
                        </Box>
                    </Box>
                </Col>
            </Row>

            <Box className="ClServices__cta">
                <Link to="/" className="btn_green_bg">{t("Client.Services.serviceBtn")}</Link>
            </Box>
        </Box>
    );
}

export default withTranslation()(Services);
