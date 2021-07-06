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

const HousingBenefitMenu = ({ t }) => {
    const history = useHistory();
    const location = useLocation();
    const store = useStore();
    const dispatch = useDispatch();

    if (location.pathname === '/benefit' && !store.getState().estimation.housingSuccess) {
        history.push('housing');
    }

    const validateHousingStep = () => {
        const errors = {};
        const settings = store.getState().estimation.settings;

        if (settings.houseworkPersonalization.dog === '') {
            errors.dog = 'Can\'t be empty';
        }

        if (settings.houseworkPersonalization.cat === '') {
            errors.cat = 'Can\'t be empty';
        }

        if (settings.houseworkFrequencyId === '') {
            errors.houseworkFrequencyId = 'Can\'t be empty';
        }

        if (Object.keys(errors).length !== 0) estimationHousingValidationError(errors)(dispatch);
        else estimationHousingValidationSuccess()(dispatch);

        return errors;
    };

    const validateBenefitStep = () => {
        const errors = {};
        const settings = store.getState().estimation.settings;

        if (Object.keys(settings.houseworkWeekTime).length === 0) {
            errors.days = 'You must select minimum 1 day';
        }

        for (const day in settings.houseworkWeekTime) {
            if (settings.houseworkWeekTime[day] === '') {
                errors.hours = 'Can\'t be empty';
            }
        }

        if (!settings.startDate) {
            errors.date = 'Can\'t be empty';
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

        if (Object.keys(errors).length !== 0) {
            console.log('Errors found!');
            console.log(errors);
            return;
        }

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
                        <Demande />
                        <Balance />

                        <Button variant="contained" className="sidebar__submit" onClick={goToNextStep}>
                            {t("Client.sideBar.demande_submit")}
                        </Button>
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
