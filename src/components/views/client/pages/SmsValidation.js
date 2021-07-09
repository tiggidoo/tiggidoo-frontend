
import "../scss/app.scss"

import { withTranslation } from "react-i18next"

import Footer from "../../../layout/client/FooterServ"
import HeaderServ from "../../../layout/client/HeaderServ"

import { Col, Row } from "react-bootstrap"
import Button from '@material-ui/core/Button'
import { Typography, Box } from '@material-ui/core'
import CodeInput from "../section-parts/CodeInput"

function SmsValidation({ t }) {
    return (
        <div>
            <HeaderServ />
            <Box className="sms_validation">
                <Typography variant="h2">{t("Client.Sms_validation.title")}</Typography>

                <Typography variant="h3">{t("Client.Sms_validation.phone")} <span>+1 (438)-929 9932</span></Typography>

                <p>{t("Client.Sms_validation.text1")}</p>

                <CodeInput />

                <p>{t("Client.Sms_validation.text3")}</p>
                <p>{t("Client.Sms_validation.text4")}</p>

            </Box>

            <Row className="localisation_footer">
                <p>{t("Client.Location.footer")} <a href="#" className="link">{t("Client.Location.footer_link")} </a></p>
            </Row>

            <Footer />
        </div>
    )
}

export default withTranslation()(SmsValidation)
