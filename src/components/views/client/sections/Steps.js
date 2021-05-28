/* 
    This is the sectin Steps of Client Homepage. 

*/

import React from "react";
import { Col, Row } from "react-bootstrap";
import { withTranslation } from "react-i18next";


function Steps({ t }) {
    return (
        <div className="ClSteps">
            <div className="ClSteps__wraper">
                <div className="ClSteps__intro">
                    <h2 className="ClSteps__title mb-4 pb-5">
                        {t("Client.Steps.title")}
                    </h2>

                    <div className="ClSteps__description text-center pl-3 pr-3">
                        <p>
                            <span>TIGGID</span><span className="green_text">Oo</span>&nbsp;
                        {t("Client.Steps.description1")}
                        </p>

                        <p>{t("Client.Steps.description2")}</p>
                    </div>
                </div>
                <Row className="ClSteps__container">
                    <Col sm={12} md={6} lg={6}>
                        <div className="ClSteps__box">
                            <div className="step_indicator">
                                <span className="step_indicator__circle_one"></span>
                                <span className="step_indicator__circle_two"></span>
                                01
                                </div>
                            <h3>{t("Client.Steps.step1Title")}</h3>
                            <p className="mb-5">{t("Client.Steps.step1Description")}</p>
                            <a className="btn_round" href="#">{t("Client.Steps.step1Link")}</a>
                        </div>
                    </Col>

                    <Col sm={12} md={6} lg={6}>
                        <div className="ClSteps__box">
                            <img src={"../images/cl_step_1.svg"} alt="step one" />
                        </div>
                    </Col>

                    <Col sm={12} md={6} lg={6}>
                        <div className="ClSteps__box">
                            <img src={"../images/cl_step_2.svg"} alt="step two" />
                        </div>
                    </Col>

                    <Col sm={12} md={6} lg={6}>
                        <div className="ClSteps__box">
                            <div className="step_indicator">
                                <span className="step_indicator__circle_one"></span>
                                <span className="step_indicator__circle_two"></span>
                                02
                            </div>
                            <h3>{t("Client.Steps.step2Title")}</h3>
                            <p className="mb-5">{t("Client.Steps.step2Description")}</p>
                            <a className="btn_round" href="#">{t("Client.Steps.step2Link")}</a>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={6}>
                        <div className="ClSteps__box">
                            <div className="step_indicator">
                                <span className="step_indicator__circle_one"></span>
                                <span className="step_indicator__circle_two"></span>
                                03
                            </div>
                            <h3>{t("Client.Steps.step3Title")}</h3>
                            <p className="mb-5">{t("Client.Steps.step3Description")}</p>
                            <a className="btn_round" href="#">{t("Client.Steps.step3Link")}</a>
                        </div>
                    </Col>

                    <Col sm={12} md={6} lg={6}>
                        <div className="ClSteps__box">
                            <img src={"../images/cl_step_3.png"} alt="step three" />
                        </div>
                    </Col>

                    <Col sm={12} md={6} lg={6}>
                        <div className="ClSteps__box">
                            <img src={"../images/cl_step_4.svg"} alt="step four" />
                        </div>
                    </Col>

                    <Col sm={12} md={6} lg={6}>
                        <div className="ClSteps__box">
                            <div className="step_indicator">
                                <span className="step_indicator__circle_one"></span>
                                <span className="step_indicator__circle_two"></span>
                                04
                            </div>
                            <h3>{t("Client.Steps.step4Title")}</h3>
                            <p className="mb-5">{t("Client.Steps.step4Description")}</p>
                            <a className="btn_round" href="#">{t("Client.Steps.step4Link")}</a>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default withTranslation()(Steps);
