
import "../scss/app.scss"

import { withTranslation } from "react-i18next"

import Footer from "../../../layout/client/FooterServ"
import HeaderServ from "../../../layout/client/HeaderServ"

import { Col, Row } from "react-bootstrap"
import Button from '@material-ui/core/Button'
import { Typography, Box } from '@material-ui/core'


function ThankYouPage({ t }) {
    return (
        <div>
            <HeaderServ />
            <Row className="Localisation thankyoupage">
                <Col lg={6} md={12} className="text-center">
                    <img
                        src={"../images/icon_finished.png"}
                        alt=""
                        className="finished_icon"
                    />

                    <Typography variant="h2" className="mb-5">{t("Client.ThankyouPage.bloc1_text1")} <span className="blue_text">Maxim</span></Typography>
                    <Typography variant="h2" className="mb-3">{t("Client.ThankyouPage.bloc1_text2")}</Typography>
                    <Typography variant="h3" className="blue_text">{t("Client.ThankyouPage.bloc1_text3")}</Typography>

                    <Button className="btn_green_bg">{t("Client.ThankyouPage.bloc1_text4")}</Button>
                </Col>

                <Col lg={6} md={12} className="">
                    <Typography variant="h1" className="">{t("Client.ThankyouPage.bloc2_text1")}</Typography>

                    <Box className="mt-4">
                        <Box className="finalsteps">
                            <svg className="MuiSvgIcon-root MuiStepIcon-root MuiStepIcon-active" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="12"></circle><text className="MuiStepIcon-text" x="12" y="16" textAnchor="middle">1</text></svg>
                            <p>{t("Client.ThankyouPage.bloc2_text2")}</p>
                        </Box>

                        <Box className="finalsteps">
                            <svg className="MuiSvgIcon-root MuiStepIcon-root MuiStepIcon-active" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="12"></circle><text className="MuiStepIcon-text" x="12" y="16" textAnchor="middle">2</text></svg>
                            <p>{t("Client.ThankyouPage.bloc2_text3")}</p>
                        </Box>

                        <Box className="finalsteps">
                            <svg className="MuiSvgIcon-root MuiStepIcon-root MuiStepIcon-active" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="12"></circle><text className="MuiStepIcon-text" x="12" y="16" textAnchor="middle">3</text></svg>
                            <p>{t("Client.ThankyouPage.bloc2_text4")}</p>
                        </Box>
                    </Box>
                </Col>
            </Row>

            <Row className="localisation_footer">
                <p>{t("Client.Location.footer")} <a href="#" className="link">{t("Client.Location.footer_link")} </a></p>
            </Row>
            
            <Footer />
        </div>
    )
}

export default withTranslation()(ThankYouPage)
