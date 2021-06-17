import { withTranslation } from "react-i18next"
import { useState } from 'react'

import { Typography, Box, BottomNavigationAction, BottomNavigation } from '@material-ui/core'
import OptionsCard from "../../section-parts/OptionsCard";
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';

const Benefit = ({ t }) => {
    const [value, setValue] = useState(0);
    const [state, setState] = useState({
        dim: false,
        lun: false,
        mar: false,
        mer: false,
        jeu: true,
        ven: false,
        sam: true,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const [date, setTime] = useState({
        day_one: '',
        day_two: '',
    });

    const handleChangeSelect = (event) => {
        const name = event.target.name;
        setTime({
            ...date,
            [name]: event.target.value,
        });
    };

    const [selectedDate, setSelectedDate] = useState(new Date('2021-08-18T21:11:54'));

    const handleDateChangeDate = (date) => {
        setSelectedDate(date);
    };

    const [isActive, setActive] = useState(false);

    const handleClickOption = () => {
        setActive(!isActive);
        console.log("clicked")
    }

    return (
        <Box className="HousingType">
            <Typography variant="h3" className="HousingType__title">{t("Client.Benefit.title1")}</Typography>

            <BottomNavigation
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}

                showLabels
                className="active beneift__freq"
            >
                <BottomNavigationAction className="beneift__button" label={t("Client.Benefit.section1_title1")} />

                <BottomNavigationAction className="beneift__button" label={t("Client.Benefit.section1_title2")} />

                <BottomNavigationAction className="beneift__button" label={t("Client.Benefit.section1_title3")} />

            </BottomNavigation>
            <span className={`beneift__button-subtitle ${value === 0 ? "active" : ""}`}> {t("Client.Benefit.section1_subtitle1")}  </span>
            <span className={`beneift__button-subtitle ${value === 1 ? "active" : ""}`}> {t("Client.Benefit.section1_subtitle2")}  </span>
            <span className={`beneift__button-subtitle ${value === 2 ? "active" : ""}`}> {t("Client.Benefit.section1_subtitle3")}  </span>

            <Box className="options_box">
                <Typography variant="h3" className="HousingType__title">{t("Client.Benefit.title2")}</Typography>

                <p>{t("Client.Benefit.section2_desc")}</p>

                <div className="options_list">
                    <OptionsCard hasCounter="true" />
                    <OptionsCard title={t("Client.Benefit.section2_option2")} iconSrc="images/icon_spray.svg" description={t("Client.Benefit.section2_option2_desc")} hasCounter="true" onClick={handleClickOption}/>
                    <OptionsCard title={t("Client.Benefit.section2_option3")} iconSrc="images/icon_fridge.svg" description={t("Client.Benefit.section2_option3_desc")} hasCounter="true" />
                    <OptionsCard title={t("Client.Benefit.section2_option4")} iconSrc="images/icon_bed.svg" description={t("Client.Benefit.section2_option4_desc")} />
                    <OptionsCard title={t("Client.Benefit.section2_option5")} iconSrc="images/icon_eco_spray.svg" description={t("Client.Benefit.section2_option5_desc")} />
                    <OptionsCard title={t("Client.Benefit.section2_option6")} iconSrc="images/icon_spray.svg" description={t("Client.Benefit.section2_option6_desc")} />
                </div>
            </Box>

            <Box className="date_box">
                <Typography variant="h3" className="HousingType__title">{t("Client.Benefit.title3")}</Typography>

                <p>{t("Client.Benefit.section3_desc")}</p>

                <Box className="date_box__container">
                    <Box className="days__container">
                        <Box className="section__title">
                            <svg className="MuiSvgIcon-root MuiStepIcon-root MuiStepIcon-active" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="12"></circle><text className="MuiStepIcon-text" x="12" y="16" textAnchor="middle">1</text></svg>
                            <Typography variant="h6">{t("Client.Benefit.section3_option1")}</Typography>
                        </Box>

                        <Box>
                            <FormGroup>
                                <FormControlLabel
                                    control={<Checkbox checked={state.dim} onChange={handleChange} name="dim" color="primary" />}
                                    label={t("Client.Days.dim")}
                                    labelPlacement="start"
                                />
                                <FormControlLabel
                                    control={<Checkbox checked={state.lun} onChange={handleChange} name="lun" color="primary" />}
                                    label={t("Client.Days.lun")}
                                    labelPlacement="start"
                                />
                                <FormControlLabel
                                    control={<Checkbox checked={state.mar} onChange={handleChange} name="mar" color="primary" />}
                                    label={t("Client.Days.mar")}
                                    labelPlacement="start"
                                />
                                <FormControlLabel
                                    control={<Checkbox checked={state.mer} onChange={handleChange} name="mer" color="primary" />}
                                    label={t("Client.Days.mer")}
                                    labelPlacement="start"
                                />
                                <FormControlLabel
                                    control={<Checkbox checked={state.jeu} onChange={handleChange} name="jeu" color="primary" />}
                                    label={t("Client.Days.jeu")}
                                    labelPlacement="start"
                                />
                                <FormControlLabel
                                    control={<Checkbox checked={state.ven} onChange={handleChange} name="ven" color="primary" />}
                                    label={t("Client.Days.ven")}
                                    labelPlacement="start"
                                />
                                <FormControlLabel
                                    control={<Checkbox checked={state.sam} onChange={handleChange} name="sam" color="primary" />}
                                    label={t("Client.Days.sam")}
                                    labelPlacement="start"
                                />
                            </FormGroup>
                        </Box>
                    </Box>

                    <Box className="hours__container">
                        <Box className="section__title">
                            <svg className="MuiSvgIcon-root MuiStepIcon-root MuiStepIcon-active" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="12"></circle><text className="MuiStepIcon-text" x="12" y="16" textAnchor="middle">2</text></svg>
                            <Typography variant="h6">{t("Client.Benefit.section3_option2")}</Typography>
                        </Box>

                        <FormControl required>
                            <InputLabel id="date_one">Les jeudis</InputLabel>
                            <Select
                                labelId="date_one"
                                id="date_one"
                                value={date.date_one}
                                onChange={handleChangeSelect}
                            >
                                <option value={10}>{t("Client.Time.morning")}</option>
                                <option value={20}>{t("Client.Time.afternoon")}</option>
                                <option value={30}>{t("Client.Time.any")}</option>
                            </Select>
                            </FormControl>
                            <FormControl required>
                            <InputLabel id="date_two">Les samedis </InputLabel>
                            <Select
                                labelId="date_two"
                                id="date_two"
                                value={date.date_two}
                                onChange={handleChangeSelect}
                            >
                                <option value={10}>{t("Client.Time.morning")}</option>
                                <option value={20}>{t("Client.Time.afternoon")}</option>
                                <option value={30}>{t("Client.Time.any")}</option>
                            </Select>
                        </FormControl>
                    </Box>

                    <Box className="firstdate__container">
                        <Box className="section__title">
                            <svg className="MuiSvgIcon-root MuiStepIcon-root MuiStepIcon-active" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="12"></circle><text className="MuiStepIcon-text" x="12" y="16" textAnchor="middle">3</text></svg>
                            <Typography variant="h6">{t("Client.Benefit.section3_option3")}</Typography>
                        </Box>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                disableToolbar
                                variant="inline"
                                format="MM/dd/yyyy"
                                margin="normal"
                                id="date-picker-inline"
                                label={t("Client.Time.a-partir-du")}
                                value={selectedDate}
                                onChange={handleDateChangeDate}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />

                        </MuiPickersUtilsProvider>
                    </Box>
                </Box>
            </Box>


        </Box>
    )
}

export default withTranslation()(Benefit)
