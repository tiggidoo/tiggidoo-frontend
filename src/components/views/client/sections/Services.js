/* 
    This is the sectin Services of Client Homepage. 

*/

import React from "react";
import { Col, Row } from "react-bootstrap";
import { withTranslation } from "react-i18next";


function Services({ t }) {
    return (
        <div className="ClServices">
            
                <h2 className="mb-4 pb-5">
                    {t("Client.Services.title")}
                </h2>
                <Row className="pt-0 pt-xl-4">
                    <Col sm={12} md={6} lg={6} xl={3}>
                        <div className="ClServices__box">
                            <div className="ClServices__boxImage">
                                <img src={"images/icon_security.svg"} alt="" />
                            </div>
                            <div className="DPServices__boxTitle">
                                <h4>{t("Client.Services.serviceTitre1")}</h4>
                            </div>
                            <div className="DPServices__boxDescription">
                            <ul className="check_mark_list">
                                    <li>{t("Client.Services.service1Text1")}</li>
                                    <li>{t("Client.Services.service1Text2")}</li>
                                    <li>{t("Client.Services.service1Text3")}</li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={6} xl={3}>
                        <div className="ClServices__box">
                            <div className="ClServices__boxImage">
                                <img src={"images/icon_simplicity.svg"} alt="" />
                            </div>
                            <div className="DPServices__boxTitle">
                                <h4>{t("Client.Services.serviceTitre2")}</h4>
                            </div>
                            <div className="DPServices__boxDescription">
                                <ul className="check_mark_list">
                                <li>{t("Client.Services.service2Text1")}</li>
                                    <li>{t("Client.Services.service2Text2")}</li>
                                    <li>{t("Client.Services.service2Text3")}</li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={6} xl={3}>
                        <div className="ClServices__box">
                            <div className="ClServices__boxImage">
                                <img src={"images/icon_quality.svg"} alt="" />
                            </div>
                            <div className="DPServices__boxTitle">
                                <h4>{t("Client.Services.serviceTitre3")}</h4>
                            </div>
                            <div className="DPServices__boxDescription">
                                <ul className="check_mark_list">
                                    <li>{t("Client.Services.service3Text1")}</li>
                                    <li>{t("Client.Services.service3Text2")}</li>
                                    <li>{t("Client.Services.service3Text3")}</li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={6} xl={3}>
                        <div className="ClServices__box">
                            <div className="ClServices__boxImage">
                                <img src={"images/icon_flexibility.svg"} alt="" />
                            </div>
                            <div className="DPServices__boxTitle">
                                <h4>{t("Client.Services.serviceTitre4")}</h4>
                            </div>
                            <div className="DPServices__boxDescription">
                                <ul className="check_mark_list">
                                    <li>{t("Client.Services.service4Text1")}</li>
                                    <li>{t("Client.Services.service4Text2")}</li>
                                    <li>{t("Client.Services.service4Text3")}</li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
                
                <div className="ClServices__cta">
                    <a className="btn_green_bg" href="#" target="_blank" rel="noopener noreferrer">{t("Client.Services.serviceBtn")}</a>
                </div>
        </div>
    );
}

export default withTranslation()(Services);
