/* 
    This is the sectin Experts of Client Homepage. 

*/
import { Col, Row } from "react-bootstrap";
import { withTranslation } from "react-i18next";


function Experts({ t }) {
    return (
        <div className="Clexperts">
            <Row className="pt-0 pt-xl-4">
                <Col sm={12} md={6} lg={6}>
                    <div className="">
                        <h2>
                            {t("Client.Experts.title")}
                            &nbsp;<span>TIGGID</span><span className="green_text">Oo</span>&nbsp;?
                        </h2>

                        <div className="">
                            <p>{t("Client.Experts.text1")}</p>

                            <p>
                                <span>TIGGID</span><span className="green_text">Oo</span>&nbsp;
                                {t("Client.Experts.text2")}
                            </p>

                            <p>{t("Client.Experts.text3")}</p>
                        </div>

                        <div className="ClServices__cta">
                            <a className="btn_green_bg" href="#" target="_blank" rel="noopener noreferrer">{t("Client.Experts.cta")}</a>
                        </div>
                    </div>
                </Col>
                <Col sm={12} md={6} lg={6}>
                    <img src={"images/cl_home_experts.png"} alt="Nos experts" />
                </Col>

            </Row>
        </div>
    );
}

export default withTranslation()(Experts);
