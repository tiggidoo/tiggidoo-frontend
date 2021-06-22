import { withTranslation } from "react-i18next"
import { useState } from 'react'

import { Typography, Box } from '@material-ui/core'
import { Col, Row } from "react-bootstrap";



const Validation = ({ t }) => {
    const [value, setValue] = useState(0);

    return (
        <Box className="Validation">

            <p>{t("Client.Validation.intro")}</p>

            <Row>
                <Col md={3} className="Validation_col">
                    <Box className="section__title">
                        <svg className="MuiSvgIcon-root MuiStepIcon-root MuiStepIcon-active" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="12"></circle><text className="MuiStepIcon-text" x="12" y="16" textAnchor="middle">1</text></svg>
                        <Typography variant="h6">{t("Client.Validation.bloc1_title")}</Typography>
                    </Box>

                    <p>{t("Client.Localisation.section1_text2")}</p>
                </Col>

                <Col md={6} className="Validation_col">
                    <Box className="section__title">
                        <svg className="MuiSvgIcon-root MuiStepIcon-root MuiStepIcon-active" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="12"></circle><text className="MuiStepIcon-text" x="12" y="16" textAnchor="middle">2</text></svg>
                        <Typography variant="h6">{t("Client.Validation.bloc2_title")}</Typography>
                    </Box>
                </Col>
                <Col md={3} className="Validation_col">
                <Box className="">
                        <p>{t("Client.Localisation.section1_text2")}</p>
                        <p>{t("Client.Localisation.section1_text3")}</p>
                    </Box>

                </Col>
            </Row>

        </Box>
    )
}

export default withTranslation()(Validation)
