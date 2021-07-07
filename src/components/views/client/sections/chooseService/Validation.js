import { withTranslation } from 'react-i18next';
import { useHistory, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';

import { useStore } from 'react-redux';

import { Typography, Box } from '@material-ui/core'
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import LinearProgress from '@material-ui/core/LinearProgress';

import { VisibilityIcon } from '../../section-parts/icons/VisibilityIcon';
import { VisibilityOffIcon } from '../../section-parts/icons/VisibilityOffIcon';

const Validation = ({ t }) => {
    const history = useHistory();
    const location = useLocation();
    const store = useStore();

    if (location.pathname === '/validation' && !store.getState().estimation.benefitSuccess) history.push('housing');

    const [personalData, setPersonalData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
    });
    const [conditionAcceptation, setConditionAcceptation] = useState({ cgu: false, personalHouse: false });
    const [displayPasswords, setDisplayPasswords] = useState({ password: false, confirmPassword: false });
    const [showInfo, setShowInfo] = useState(false);
    const [errors, setErrors] = useState({});

    const handlePersonalDataChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setPersonalData({ ...personalData, [name]: value });
    };

    const handleConditionAcceptationChange = (name) => {
        setConditionAcceptation({ ...conditionAcceptation, [name]: !conditionAcceptation[name] });
    };

    const handleDisplayPasswordClick = (event, name) => {
        event.preventDefault();
        setDisplayPasswords({ ...displayPasswords, [name]: !displayPasswords[name] });
    };

    const dataValidation = () => {
        const errors = {};

        const firstname = personalData.firstname.trim();
        const lastname = personalData.lastname.trim();
        const email = personalData.email.trim().replace(/\s/g, '');
        const phone = personalData.phone.trim().replace(/\D/g, '');
        const password = personalData.password;
        const confirmPassword = personalData.confirmPassword;

        if (firstname === '') errors.firstname = true;
        if (lastname === '') errors.lastname = true;
        if (email === '') errors.email = true;
        if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) errors.email = true;
        if (phone === '') errors.phone = true;
        if (phone.length !== 10) errors.phone = true;
        if (password === '') errors.password = true;
        if (confirmPassword === '') errors.confirmPassword = true;
        if (password !== confirmPassword) errors.password = errors.confirmPassword = true;
    
        if (!conditionAcceptation.cgu) errors.cgu = true;
        if (!conditionAcceptation.personalHouse) errors.personalHouse = true;

        setErrors(errors);

        return errors;
    };

    const submit = () => {
        const errors = dataValidation();

        if (Object.keys(errors).length !== 0) {
            return;
        }

        const requestBody = { ...store.getState().estimation.settings, ...personalData };

        // TODO: Send request
        

        history.push('thankyou');
    };

    const displaySpecificities = () => {
        const specificities = store.getState().estimation.settings.housingSpecificity;

        let elements = [];

        for (const specificity in specificities) {
            elements.push(<li key={specificity}>{specificities[specificity]} {t(`Client.Logement.housingSpecificity_${specificity}`)}</li>);
        }

        return elements;
    };

    const displayOptions = () => {
        const options = store.getState().estimation.settings.houseworkPersonalization;

        let elements = [];

        for (const option in options) {
            if (typeof options[option] === 'number') {
                elements.push(<li key={option}>{options[option]} {t(`Client.Logement.houseworkPersonalization_${option}`)}</li>);
            } else {
                elements.push(<li key={option}>{t(`Client.Logement.houseworkPersonalization_${option}`)}</li>);
            }
        }

        return elements;
    };

    const displayFormula = () => {
        const houseworkFrequencyId = store.getState().estimation.settings.houseworkFrequencyId;
        // const houseworkWeekTime = store.getState().estimation.settings.houseworkWeekTime;
        const startDate = store.getState().estimation.settings.startDate;

        let elements = [];

        elements.push(<li key="1">{t(`Client.Validation.frequency_selected_${houseworkFrequencyId}`)}</li>);

        // if (Object.keys(houseworkWeekTime).length === 1) {
        //     elements.push(<li key="2">{t('Client.Validation.day_selected', { [Object.keys(houseworkWeekTime)[0]]: Object.values(houseworkWeekTime)[0] })}</li>);
        // } else {
        //     elements.push(<li key="2">{t('Client.Validation.days_selected', { [Object.keys(houseworkWeekTime)[0]]: Object.values(houseworkWeekTime)[0], [Object.keys(houseworkWeekTime)[1]]: Object.values(houseworkWeekTime)[1] })}</li>);
        // }
        
        elements.push(<li key="3">{t('Client.Validation.date_selected', { date: startDate })}</li>);

        return elements;
    };

    return (
        <Box className="Validation">
            <p>{t("Client.Validation.intro")}</p>

            <Row className="Validation_row">
                <Col xl={3} md={12} className="Validation_firstCol">
                    <Box className="Validation_col">
                        <Box className="section__title">
                            <svg className="MuiSvgIcon-root MuiStepIcon-root MuiStepIcon-active" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="12"></circle><text className="MuiStepIcon-text" x="12" y="16" textAnchor="middle">1</text></svg>
                            <Typography variant="h6">{t("Client.Validation.bloc1_title")}</Typography>
                        </Box>

                        <Box className="validation_recap">
                            <p className="blue__title">{t("Client.Location.section1_text2")}</p>

                            <h5 className="recap_title">{t("Client.Validation.bloc1_texte2")}</h5>

                            <ul className="recap_list">
                                {displaySpecificities()}
                            </ul>

                            <h5 className="recap_title">{t("Client.Validation.bloc1_texte3")}</h5>

                            <ul className="recap_list">
                                {displayFormula()}
                            </ul>

                            <h5 className="recap_title">{t("Client.Validation.bloc1_texte4")}</h5>

                            <ul className="recap_list">
                                {displayOptions()}
                            </ul>
                        </Box>
                    </Box>

                    <Box className="estimation_box">
                        <div className="estimation_header">
                            <h4 className="estimation_title">{t("Client.sideBar.estimation")}</h4>
                            <p className="estimation_price">{store.getState().estimation.calculation.totalPrice} $</p>
                        </div>

                        <Button onClick={() => setShowInfo(!showInfo)} className="estimation__info_button">
                            {showInfo ? (
                                <p>{t("Client.sideBar.close_info")}</p>
                            ) : (
                                <p>{t("Client.sideBar.open_info")}</p>
                            )}
                        </Button>

                        {showInfo &&
                            <p className="estimation_info">
                                {t("Client.sideBar.info_text")}
                            </p>
                        }
                    </Box>
                </Col>

                <Col xl={5} md={12} className="Validation_col">
                    <Box className="section__title">
                        <svg className="MuiSvgIcon-root MuiStepIcon-root MuiStepIcon-active" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="12"></circle><text className="MuiStepIcon-text" x="12" y="16" textAnchor="middle">2</text></svg>
                        <Typography variant="h6">{t("Client.Validation.bloc2_title")}</Typography>
                    </Box>

                    <Box className="information_box">
                        <form className="information_form" noValidate >
                            <TextField
                                name="firstname"
                                value={personalData.firstname}
                                onChange={handlePersonalDataChange}
                                label={t("Client.Validation.lastname")}
                                variant="outlined"
                                error={errors?.firstname ? true : false}
                            />
                            <TextField
                                name="lastname"
                                value={personalData.lastname}
                                onChange={handlePersonalDataChange}
                                label={t("Client.Validation.name")}
                                variant="outlined"
                                error={errors?.lastname ? true : false}
                            />
                            <TextField
                                name="email"
                                value={personalData.email}
                                onChange={handlePersonalDataChange}
                                type="email"
                                label={t("Client.Validation.email")}
                                variant="outlined"
                                error={errors?.email ? true : false}
                            />
                            <TextField
                                name="phone"
                                value={personalData.phone}
                                onChange={handlePersonalDataChange}
                                type="phone"
                                label={t("Client.Validation.phone")}
                                variant="outlined"
                                error={errors?.phone ? true : false}
                            />

                            <FormControl variant="outlined">
                                <InputLabel htmlFor="standard-adornment-password">{t("Client.Validation.password")}</InputLabel>

                                <OutlinedInput
                                    className="password_container"
                                    id="standard-adornment-password"
                                    type={displayPasswords.password ? 'text' : 'password'}
                                    name="password"
                                    value={personalData.password}
                                    onChange={handlePersonalDataChange}
                                    error={errors?.password ? true : false}
                                    endAdornment={
                                        <InputAdornment className="visibility_button">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onMouseDown={(event) => handleDisplayPasswordClick(event, 'password')}
                                            >
                                                {displayPasswords.password ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>

                            <FormControl variant="outlined">
                                <InputLabel htmlFor="confirm_password">{t("Client.Validation.confirm_password")}</InputLabel>

                                <OutlinedInput
                                    className="password_container"
                                    id="confirm_password"
                                    name="confirmPassword"
                                    type={displayPasswords.confirmPassword ? 'text' : 'password'}
                                    value={personalData.confirmPassword}
                                    onChange={handlePersonalDataChange}
                                    error={errors?.confirmPassword ? true : false}
                                    endAdornment={
                                        <InputAdornment className="visibility_button">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onMouseDown={(event) => handleDisplayPasswordClick(event, 'confirmPassword')}
                                            >
                                                {displayPasswords.confirmPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                        </form>

                        <LinearProgress className="mt-5 progress" variant="determinate" value={50} />
                    </Box>
                </Col>

                <Col xl={3} md={12} className="Validation_col">
                    <Box className="Validation_col">
                        <Box className="mb-5">
                            <p className="blue__title">{t("Client.Location.section1_text2")}</p>
                            <p className="blue__title">{t("Client.Location.section1_text3")}</p>
                        </Box>

                        <FormGroup>
                            <FormControlLabel
                                className={`mb-5 mt-5 ${errors.cgu ? "error" : ""}`}
                                control={
                                    <Checkbox
                                        checked={conditionAcceptation.cgu}
                                        onChange={() => handleConditionAcceptationChange('cgu')}
                                        color="primary"
                                    />
                                }
                                label={
                                    <div>
                                        <span>{t("Client.Validation.terms_and_conditions")}&nbsp;</span>
                                        <Link to={'/terms'} className="terms_link">{t("Client.Validation.terms_and_conditions_link")}</Link>
                                    </div>
                                }
                            />

                            <FormControlLabel
                                className={`${errors.personalHouse ? "error" : ""}`}
                                control={
                                    <Checkbox
                                        checked={conditionAcceptation.personalHouse}
                                        onChange={() => handleConditionAcceptationChange('personalHouse')}
                                        color="primary"
                                    />
                                }
                                label={t("Client.Validation.confirm_housing")}
                            />
                        </FormGroup>
                    </Box>

                    <Button variant="contained" className="validation__submit" onClick={submit}>
                        {t("Client.Validation.submit")}
                    </Button>

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
                </Col>
            </Row>

            <div className="services_footer">
                <p>{t("Client.Logement.footer_text")} <a href="http://">{t("Client.Logement.footer_link")}</a></p>
            </div>                         
        </Box>
    )
};

export default withTranslation()(Validation);
