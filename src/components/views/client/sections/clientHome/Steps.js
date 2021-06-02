/* 
    This is the sectin Steps of Client Homepage. 

*/
import { Col, Row } from "react-bootstrap";
import { withTranslation } from "react-i18next";

import { Typography, Box } from '@material-ui/core'

import { Link } from 'react-router-dom'


function Steps({ t }) {
    return (
        <Box className="ClSteps">
            <Box className="ClSteps__wraper">
                <Box className="ClSteps__intro">
                    <Typography variant="h2" className="ClSteps__title mb-4 pb-5">
                        {t("Client.Steps.title")}
                    </Typography>

                    <Box className="ClSteps__description text-center pl-3 pr-3">
                        <p>
                            <span>TIGGID</span><span className="green_text">Oo</span>&nbsp;
                            {t("Client.Steps.description1")}
                        </p>

                        <p>{t("Client.Steps.description2")}</p>
                    </Box>
                </Box>
                <Row className="ClSteps__container">
                    <Col sm={12} md={6} lg={6}>
                        <Box className="ClSteps__box">
                            <Box className="font-weight-bold step_indicator">
                                <span className="step_indicator__circle_one"></span>
                                <span className="step_indicator__circle_two"></span>
                                01
                            </Box>

                            <Typography variant="h3">{t("Client.Steps.step1Title")}</Typography>
                            <p className="mb-5">{t("Client.Steps.step1Description")}</p>
                            <Link className="btn_round" to="/">{t("Client.Steps.step1Link")}</Link>
                        </Box>
                    </Col>

                    <Col sm={12} md={6} lg={6}>
                        <Box className="ClSteps__box">
                            <img src={"../images/cl_step_1.svg"} alt="step one" />
                        </Box>
                    </Col>

                    <Col sm={12} md={6} lg={6}>
                        <Box className="ClSteps__box">
                            <img src={"../images/cl_step_2.svg"} alt="step two" />
                        </Box>
                    </Col>

                    <Col sm={12} md={6} lg={6}>
                        <Box className="ClSteps__box">
                            <Box className="font-weight-bold step_indicator">
                                <span className="step_indicator__circle_one"></span>
                                <span className="step_indicator__circle_two"></span>
                                02
                            </Box>

                            <Typography variant="h3">{t("Client.Steps.step2Title")}</Typography>
                            <p className="mb-5">{t("Client.Steps.step2Description")}</p>
                            <Link className="btn_round" to="/">{t("Client.Steps.step2Link")}</Link>
                        </Box>
                    </Col>
                    
                    <Col sm={12} md={6} lg={6}>
                        <Box className="ClSteps__box">
                            <Box className="font-weight-bold step_indicator">
                                <span className="step_indicator__circle_one"></span>
                                <span className="step_indicator__circle_two"></span>
                                03
                            </Box>

                            <Typography variant="h3">{t("Client.Steps.step3Title")}</Typography>
                            <p className="mb-5">{t("Client.Steps.step3Description")}</p>
                            <Link className="btn_round" to="/">{t("Client.Steps.step3Link")}</Link>
                        </Box>
                    </Col>

                    <Col sm={12} md={6} lg={6}>
                        <Box className="ClSteps__box">
                            <img src={"../images/cl_step_3.png"} alt="step three" />
                        </Box>
                    </Col>

                    <Col sm={12} md={6} lg={6}>
                        <Box className="ClSteps__box">
                            <img src={"../images/cl_step_4.svg"} alt="step four" />
                        </Box>
                    </Col>

                    <Col sm={12} md={6} lg={6}>
                        <Box className="ClSteps__box">
                            <Box className="font-weight-bold step_indicator">
                                <span className="step_indicator__circle_one"></span>
                                <span className="step_indicator__circle_two"></span>
                                04
                            </Box>

                            <Typography variant="h3">{t("Client.Steps.step4Title")}</Typography>
                            <p className="mb-5">{t("Client.Steps.step4Description")}</p>
                            <Link className="btn_round" to="/">{t("Client.Steps.step4Link")}</Link>
                        </Box>
                    </Col>
                </Row>
            </Box>
        </Box>
    );
}

export default withTranslation()(Steps);
