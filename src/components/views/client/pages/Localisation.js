
import "../scss/app.scss";

import { withTranslation } from "react-i18next"

import Footer from "../../../layout/client/FooterServ";
import HeaderServ from "../../../layout/client/HeaderServ";

import { Col, Row } from "react-bootstrap";
import { Link } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import { Typography, Box } from '@material-ui/core'
import InputPostCode from "../section-parts/InputPostCode";


function Localisation({ t }) {
    return (
        <div>
            <HeaderServ />
            <Row className="Localisation">
                <Col md={5}>
                    <Typography variant="h3" className="">{t("Client.Localisation.section1_title")}</Typography>

                    <p>{t("Client.Localisation.section1_text1")}</p>

                    <Box className="Localisation_subtext">
                        <p>{t("Client.Localisation.section1_text2")}</p>
                        <p>{t("Client.Localisation.section1_text3")}</p>
                    </Box>
                    <InputPostCode />
                    {/* <Button variant="contained" className="btn_green_bg">
                        {t("Client.Localisation.section1_btn")}
                    </Button> */}
                </Col>

                <Col md={2} className="Localisation_seperator__container">
                    <Box>
                    <span></span>
                    <p className="Localisation_seperator">
                        {t("Client.Localisation.ou")}
                    </p>
                    </Box>
                </Col>

                <Col md={5}>
                    <Typography variant="h3" className="">{t("Client.Localisation.section2_title")}</Typography>

                    <p>{t("Client.Localisation.section2_text1")}</p>

                    <Button className="btn_green_bg">
                        {t("Client.Localisation.section2_btn")}
                    </Button>
                </Col>
            </Row>
            <Footer />
        </div>
    )
}

export default withTranslation()(Localisation)
