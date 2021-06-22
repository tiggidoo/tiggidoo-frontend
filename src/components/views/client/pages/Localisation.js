
import "../scss/app.scss";

import { withTranslation } from "react-i18next"

import Footer from "../../../layout/client/FooterServ";
import HeaderServ from "../../../layout/client/HeaderServ";

import { Col, Row } from "react-bootstrap";
import { Link } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import { Typography, Box } from '@material-ui/core'
import usePostCode from '../functions/usePostCode'
import validate from '../functions/validateInfo'

function Localisation({ t }) {
    const { handleChange, values, handleSubmit, errors } = usePostCode(validate)

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

                    <Box className="post_code__form">
                        <form action="" onSubmit={handleSubmit}>
                            <Box className="post_code__input_container">
                                <input id="postCode" type='text' name="postCode" placeholder={t("Client.Hero.postCodeLabel")} value={values.postCode} onChange={handleChange}></input>
                            </Box>

                            <input type='submit' value={t("Client.Localisation.section1_btn")} className="btn_green_bg" ></input>

                            {errors.postCode && <p className='error'>{errors.postCode}</p>}
                        </form>
                    </Box>
                </Col>

                <Col md={2} className="Localisation_seperator__container">
                    <Box>
                        <span></span>
                        <p className="Localisation_seperator">
                            {t("Client.Localisation.ou")}
                        </p>
                    </Box>
                </Col>

                <Col md={5} className="">
                    <Typography variant="h3" className="">{t("Client.Localisation.section2_title")}</Typography>

                    <p>{t("Client.Localisation.section2_text1")}</p>


                    <Box className="Localisation_subtext">
                        <p> <a href="#">{t("Client.Localisation.section2_text2")}</a></p>
                    </Box>

                    <Button className="btn_green_bg">
                        {t("Client.Localisation.section2_btn")}
                    </Button>
                </Col>
            </Row>
            <Row className="localisation_footer">
                <p>{t("Client.Localisation.footer")} <a href="#" className="link">{t("Client.Localisation.footer_link")} </a></p>
            </Row>
            <Footer />
        </div>
    )
}

export default withTranslation()(Localisation)
