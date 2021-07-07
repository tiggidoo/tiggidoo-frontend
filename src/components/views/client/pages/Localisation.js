
import '../scss/app.scss';

import { withTranslation } from 'react-i18next';
import { Col, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import Footer from '../../../layout/client/FooterServ';
import HeaderServ from '../../../layout/client/HeaderServ';

import Button from '@material-ui/core/Button';
import { Typography, Box } from '@material-ui/core';

import Form from '../form/Form';

function Localisation({ t }) {
    const history = useHistory();

    const { errors, values, handleChange, handleSubmit } = Form({
        initValues: { postCode: '' },
        validator: (values) => {
            let errors = {};

            const postCode = values.postCode.trim();

            if (!postCode || postCode === '') {
                errors.postCode = 'Post code is required';
            }

            if (postCode && postCode !== '' && !(new RegExp(/^[a-zA-Z-0-9]{6,6}$/, 'g')).test(postCode)) {
                errors.postCode = 'Invalid post code';
            }

            return errors;
        },
        onSubmit: ({ values, setErrors }) => {
            // TODO: Send the postal code to know if this area is served

            history.push('housing');
        },
    });

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
                        <span className="Localisation_seperator__befor"></span>
                        <p className="Localisation_seperator">
                            {t("Client.Localisation.ou")}
                        </p>
                        <span className="Localisation_seperator__after"></span>
                    </Box>
                </Col>

                <Col md={5} className="">
                    <Typography variant="h3" className="">{t("Client.Localisation.section2_title")}</Typography>

                    <p>{t("Client.Localisation.section2_text1")}</p>

                    <Box className="Localisation_subtext">
                        <p> <a href="#">{t("Client.Localisation.section2_text2")}</a></p>
                    </Box>

                    <Button className="btn_green_bg connect_link">
                        {t("Client.Localisation.section2_btn")}
                    </Button>
                </Col>
            </Row>
            <Row className="localisation_footer">
                <p>{t("Client.Localisation.footer")} <a href="#" className="link">{t("Client.Localisation.footer_link")} </a></p>
            </Row>
            <Footer />
        </div>
    );
};

export default withTranslation()(Localisation);
