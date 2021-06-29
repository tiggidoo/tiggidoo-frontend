import { withTranslation } from "react-i18next"
import { useState } from 'react'

import { Typography, Box } from '@material-ui/core'
import { Col, Row } from "react-bootstrap";
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
import { VisibilityIcon } from '../../section-parts/icons/VisibilityIcon';
import { VisibilityOffIcon } from '../../section-parts/icons/VisibilityOffIcon';
import LinearProgress from '@material-ui/core/LinearProgress';



const Validation = ({ t }) => {
    const [state, setState] = useState({
        checkedA: false,
        checkedB: false,
    });

    const handleCheckChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const [values, setValues] = useState({
        password: '',
        conformPassword: '',
        showPassword: false,
        showConfirmPassword: false,
    });

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleClickShowConfirmPassword = () => {
        setValues({ ...values, showConfirmPassword: !values.showConfirmPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const [showInfo, setShowInfo] = useState(false)

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
                    </Box>
                    <Box className="estimation_box">
                        <div className="estimation_header">
                            <h4 className="estimation_title">{t("Client.sideBar.estimation")}</h4>
                            <p className="estimation_price">44,99 $</p>
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
                            <TextField id="lastname" label={t("Client.Validation.lastname")} variant="outlined" />
                            <TextField id="name" label={t("Client.Validation.name")} variant="outlined" />
                            <TextField id="email" label={t("Client.Validation.email")} variant="outlined" />
                            <TextField id="phone" label={t("Client.Validation.phone")} variant="outlined" />

                            <FormControl variant="outlined">
                                <InputLabel htmlFor="standard-adornment-password">{t("Client.Validation.password")} </InputLabel>
                                <OutlinedInput
                                    className="password_container"
                                    id="standard-adornment-password"
                                    type={values.showPassword ? 'text' : 'password'}
                                    value={values.password}
                                    onChange={handleChange('password')}
                                    endAdornment={
                                        <InputAdornment className="visibility_button">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}

                                            >
                                                {values.showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>

                            <FormControl variant="outlined">
                                <InputLabel htmlFor="confirm_password">{t("Client.Validation.confirm_password")} </InputLabel>
                                <OutlinedInput
                                    className="password_container"
                                    id="confirm_password"
                                    type={values.showConfirmPassword ? 'text' : 'password'}
                                    value={values.confirmPassword}
                                    onChange={handleChange('conformPassword')}
                                    endAdornment={
                                        <InputAdornment className="visibility_button">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowConfirmPassword}
                                                onMouseDown={handleMouseDownPassword}
                                            >

                                                {values.showConfirmPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
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
                            <p className="blue__title">{t("Client.Localisation.section1_text2")}</p>
                            <p className="blue__title">{t("Client.Localisation.section1_text3")}</p>
                        </Box>

                        <FormGroup>
                            <FormControlLabel
                                className="mb-5 mt-5"
                                control={<Checkbox checked={state.checkedA} onChange={handleCheckChange} name="checkedA" color="primary" />}
                                label={
                                    <div>
                                        <span>{t("Client.Validation.terms_and_conditions")}</span>
                                        <Link to={'/terms'} className="terms_link">&nbsp;{t("Client.Validation.terms_and_conditions_link")}</Link>
                                    </div>
                                }
                            />

                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={state.checkedB}
                                        onChange={handleChange}
                                        name="checkedB"
                                        color="primary"
                                    />
                                }
                                label="Je confirme que le logement est une résidence personnelle, qui ne fait l’objet d’aucune location via des sites prestataires (Airbnb, Booking, Etc.)"
                            />

                        </FormGroup>
                    </Box>

                    <Button variant="contained" className="validation__submit" >
                        {t("Client.Validation.submit")}
                    </Button>

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
                </Col>
            </Row>

            <div className="services_footer">
                <p>{t("Client.Logement.footer_text")} <a href="http://">{t("Client.Logement.footer_link")}</a></p>
            </div>                         
        </Box>
    )
}

export default withTranslation()(Validation)
