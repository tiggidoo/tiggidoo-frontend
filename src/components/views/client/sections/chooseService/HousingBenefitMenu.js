import { withTranslation } from 'react-i18next';
import { useHistory, useLocation } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';

import { useDispatch, useStore } from 'react-redux';
import { estimationBenefitValidationError, estimationBenefitValidationSuccess, estimationHousingValidationError, estimationHousingValidationSuccess } from '../../../../../store/actions/estimationAction';

import { Box } from '@material-ui/core';
import { Link } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import HousingType from '../../sections/chooseService/HousingType';

import Demande from '../../section-parts/Demande';
import Balance from '../../section-parts/Balance';
import Benefit from '../../sections/chooseService/Benefit';
import { useState, useEffect } from 'react';

const HousingBenefitMenu = ({ t }) => {
    const history = useHistory();
    const location = useLocation();
    const store = useStore();
    const dispatch = useDispatch();

    const [errors, setErrors] = useState({});

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    if (location.pathname === '/housing' && !store.getState().estimation.settings.address) {
        history.push('localisation');
        return <></>;
    }

    if (location.pathname === '/benefit' && !store.getState().estimation.housingSuccess) {
        history.push('housing');
        return <></>;
    };

    const validateHousingStep = () => {
        const errors = {};
        const settings = store.getState().estimation.settings;

        if (settings.houseworkPersonalization.dog === '') errors.dog = true;
        if (settings.houseworkPersonalization.cat === '') errors.cat = true;
        if (settings.housingSizeId === '') errors.housingSizeId = true;

        if (Object.keys(errors).length !== 0) estimationHousingValidationError(errors)(dispatch);
        else estimationHousingValidationSuccess()(dispatch);

        return errors;
    };

    const validateBenefitStep = () => {
        const errors = {};
        const settings = store.getState().estimation.settings;

        if (settings.houseworkWeekTime && settings.houseworkWeekTime.length === 0) errors.days = true;
        if (!settings.startDate || settings.startDate.includes('_')) errors.date = true;
        if (!settings.houseworkPersonalization.product_ecological && !settings.houseworkPersonalization.product_standard && !settings.suppliesAcceptation) errors.suppliesAcceptation = true;

        for (const day in settings.houseworkWeekTime) {
            if (settings.houseworkWeekTime[day]['period'] === '') errors.hours = true;
        }

        if (Object.keys(errors).length !== 0) estimationBenefitValidationError(errors)(dispatch);
        else estimationBenefitValidationSuccess()(dispatch);

        return errors;
    };

    const validateCurrentStep = () => {
        if (location.pathname === '/housing') return validateHousingStep();
        if (location.pathname === '/benefit') return validateBenefitStep();

        return {};
    };

    const changeStep = () => {
        if (location.pathname === '/housing') history.push('benefit');
        if (location.pathname === '/benefit') history.push('validation');
    };


    const goToNextStep = () => {
        const errors = validateCurrentStep();

        setErrors(errors);

        if (Object.keys(errors).length !== 0) return;

        changeStep();
    };

    const goBack = (e) => {
        e.preventDefault();
        history.goBack();
    };

    return (
        <Box>
            <Row className="choose_service">
                <Col xl={9} lg={12} md={12} sm={12}>
                    {location.pathname === '/housing' &&
                        <HousingType />
                    }

                    {location.pathname === '/benefit' &&
                        <Benefit />
                    }
                </Col>

                <Col xl={3} lg={12} md={12} sm={12}>
                    <div className="sidebar">
                        <div className="sidebar_inner">
                            <Demande />
                            <Balance />

                            <Button variant="contained" className="sidebar__submit" onClick={goToNextStep}>
                                {t("Client.sideBar.demande_submit")}
                            </Button>
                        </div>
                        {Object.keys(errors).length !== 0 &&
                            <Box className="error_box">
                                <span>
                                    <img
                                        src={"../images/icon_error.png"}
                                        alt=""
                                        className="error_icon"
                                    />
                                </span>

                                <span className="error_message">{t("Client.Validation.error_message")}</span>
                            </Box>
                        }
                    </div>


                </Col>
            </Row>

            <div className="services_footer">
                <Link href="#" className="services_backlink" onClick={goBack}>
                    {t("Client.Logement.back")}
                </Link>
                <p>{t("Client.Logement.footer_text")} <a href="http://">{t("Client.Logement.footer_link")}</a></p>
            </div>
        </Box>
    );
};

export default withTranslation()(HousingBenefitMenu);
