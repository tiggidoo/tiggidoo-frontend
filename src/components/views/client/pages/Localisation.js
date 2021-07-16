
import '../scss/app.scss';

import { withTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import { useDispatch, useStore } from 'react-redux';
import { estimationLocationUpdate } from '../../../../store/actions/estimationAction';

import Footer from '../../../layout/client/FooterServ';
import HeaderServ from '../../../layout/client/HeaderServ';

import Button from '@material-ui/core/Button';
import { Typography, Box } from '@material-ui/core';

import Form from '../form/Form';

function Localisation({ t }) {
    const store = useStore();
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const { errors, values, handleChange, handleSubmit } = Form({
        initValues: { postCode: '' },
        validator: (values) => {
            let errors = {};

            const postCode = values.postCode.trim().replace(/[^0-9A-Z]/g, '');

            if (!postCode || postCode === '') errors.postCode = t("Client.Error.postcode_required");
            if (postCode && postCode !== '' && !(new RegExp(/^([A-Za-z]{1})([0-9]{1})([A-Za-z]{1})([0-9]{1})([A-Za-z]{1})([0-9]{1})$/, 'g')).test(postCode)) errors.postCode = t("Client.Error.postcode_invalid_format");

            return errors;
        },
        onSubmit: ({ values, setErrors }) => {
            // TODO: Make request to validate post code

            const requestBody = {
                ...store.getState().estimation.settings,
                address: {
                    city: 'Montreal',
                    province: 'QC',
                    country: 'Canada',
                    postcode: values.postCode,
                    lat: '32.231245',
                    lng: '12.562348'
                },
            };

            estimationLocationUpdate(requestBody)(dispatch);

            history.push('housing');
        },
    });

    return (
        <div>
            <HeaderServ />
            <Row className="Localisation">
                <Col md={5}>
                    <Typography variant="h3">{t("Client.Location.section1_title")}</Typography>

                    <p>{t("Client.Location.section1_text1")}</p>

                    <Box className="Localisation_subtext">
                        <p>{t("Client.Location.section1_text2")}</p>
                        <p>{t("Client.Location.section1_text3")}</p>
                    </Box>

                    <Box className="post_code__form">
                        <form action="" onSubmit={handleSubmit}>
                            <Box className="post_code__input_container">
                                <input id="postCode" type='text' name="postCode" placeholder={t("Client.Hero.postCodeLabel")} value={values.postCode} onChange={handleChange}></input>
                            </Box>

                            <input type='submit' value={t("Client.Location.section1_btn")} className="btn_green_bg" ></input>

                            {errors.postCode && <p className='error'>{errors.postCode}</p>}
                        </form>
                    </Box>
                </Col>

                <Col md={2} className="Localisation_seperator__container">
                    <Box>
                        <span className="Localisation_seperator__befor"></span>
                        <p className="Localisation_seperator">
                            {t("Client.Location.ou")}
                        </p>
                        <span className="Localisation_seperator__after"></span>
                    </Box>
                </Col>

                <Col md={5}>
                    <Typography variant="h3">{t("Client.Location.section2_title")}</Typography>

                    <p>{t("Client.Location.section2_text1")}</p>

                    <Box className="Localisation_subtext">
                        <p> <a href="#">{t("Client.Location.section2_text2")}</a></p>
                    </Box>

                    <Button className="btn_green_bg connect_link">
                        {t("Client.Location.section2_btn")}
                    </Button>
                </Col>
            </Row>

            <Row className="localisation_footer">
                <p>{t("Client.Location.footer")} <a href="#" className="link">{t("Client.Location.footer_link")} </a></p>
            </Row>

            <Footer />
        </div>
    );
};

export default withTranslation()(Localisation);
