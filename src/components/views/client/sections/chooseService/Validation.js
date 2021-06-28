import { withTranslation } from "react-i18next"
import { useState } from 'react'

import { Typography, Box } from '@material-ui/core'
import { Col, Row } from "react-bootstrap";



const Validation = ({ t }) => {
    const [value, setValue] = useState(0);

    return (
        <Box className="Validation">

            <p>{t("Client.Validation.intro")}</p>

            <Row className="Validation_row">
                <Col md={3} className="Validation_col">
                    <Box className="section__title">
                        <svg className="MuiSvgIcon-root MuiStepIcon-root MuiStepIcon-active" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="12"></circle><text className="MuiStepIcon-text" x="12" y="16" textAnchor="middle">1</text></svg>
                        <Typography variant="h6">{t("Client.Validation.bloc1_title")}</Typography>
                    </Box>

                    <Box className="validation_recap">
                        <p className="blue__title">{t("Client.Localisation.section1_text2")}</p>

                        <h5 className="recap_title">{t("Client.Validation.bloc1_texte2")}</h5>
                        <ul className="recap_list">
                            <li>Maison entre 510 et 750 pied carré</li>
                            <li>2 chambres</li>
                            <li>1 salon</li>
                            <li>1 salle d’eau</li>
                            <li>1 douche </li>
                            <li>1 baignoire</li>
                            <li>Chats(s)</li>
                            <li>Chien(s)</li>
                        </ul>

                        <h5 className="recap_title">{t("Client.Validation.bloc1_texte3")}</h5>
                        <ul className="recap_list">
                            <li>Maison entre 510 et 750 pied carré</li>
                            <li>2 chambres</li>
                        </ul>

                        <h5 className="recap_title">{t("Client.Validation.bloc1_texte4")}</h5>
                        <ul className="recap_list">
                            <li>Maison entre 510 et 750 pied carré</li>
                            <li>2 chambres</li>
                        </ul>
                    </Box>
                </Col>

                <Col md={5} className="Validation_col">
                    <Box className="section__title">
                        <svg className="MuiSvgIcon-root MuiStepIcon-root MuiStepIcon-active" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="12"></circle><text className="MuiStepIcon-text" x="12" y="16" textAnchor="middle">2</text></svg>
                        <Typography variant="h6">{t("Client.Validation.bloc2_title")}</Typography>

                        <Box className="information_box">
                            
                        </Box>
                    </Box>
                </Col>

                <Col md={3} className="Validation_col">
                    <Box className="section__title">
                        <p className="blue__title">{t("Client.Localisation.section1_text2")}</p>
                        <p className="blue__title">{t("Client.Localisation.section1_text3")}</p>
                    </Box>
                </Col>
            </Row>

        </Box>
    )
}

export default withTranslation()(Validation)
