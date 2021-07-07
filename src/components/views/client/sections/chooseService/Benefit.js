import { withTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

import { useDispatch, useStore } from 'react-redux';
import { estimationBenefitUpdate, fetchEstimation } from '../../../../../store/actions/estimationAction';

import { Typography, Box, BottomNavigationAction, BottomNavigation } from '@material-ui/core';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';

import DateFnsUtils from '@date-io/date-fns';

import OptionsCard from '../../section-parts/OptionsCard';

const Benefit = ({ t }) => {
    const store = useStore();
    const dispatch = useDispatch();

    const [frequency, setFrequency] = useState(0);
    const [days, setDays] = useState({ su: false, mo: false, tu: false, we: false, th: true, fr: false, sa: true, selected: 2 });
    const [hours, setHours] = useState({ th: '', sa: '' });
    const [date, setDate] = useState(store.getState().estimation.settings.startDate ?? generateCurrentDateToString());
    const [errors, setErrors] = useState({});

    useEffect(() => {
        const houseworkFrequencyId = store.getState().estimation.settings.houseworkFrequencyId;
        const houseworkWeekTime = store.getState().estimation.settings.houseworkWeekTime;

        if (houseworkFrequencyId) setFrequency(houseworkFrequencyId - 1);

        if (houseworkWeekTime && Object.keys(houseworkWeekTime).length !== 0) {
            let houseworkWeekTimeDays = { [Object.keys(houseworkWeekTime)[0]]: true };

            if (Object.keys(houseworkWeekTime).length === 2) houseworkWeekTimeDays[Object.keys(houseworkWeekTime)[1]] = true;

            setDays({ ...days, ...{ th: false, sa: false, selected: Object.keys(houseworkWeekTime).length}, ...houseworkWeekTimeDays});
            setHours(houseworkWeekTime);
        }

        store.subscribe(() => {
            setErrors(store.getState().estimation.benefitErrorsList);
        });

        const requestBody = {
            ...store.getState().estimation.settings,
            houseworkWeekTime: houseworkWeekTime ?? hours,
            startDate: date,
        };

        estimationBenefitUpdate(requestBody)(dispatch);
    }, []);

    function generateCurrentDateToString() {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth() < 10 ? `0${currentDate.getMonth()}` : currentDate.getMonth();
        const day = currentDate.getDate() < 10 ? `0${currentDate.getDate()}` : currentDate.getDate();

        return `${year}-${month}-${day}`;
    }

    const handleFrequencyChange = (event, value) => {
        const requestBody = {
            ...store.getState().estimation.settings,
            houseworkFrequencyId: value + 1,
        };

        estimationBenefitUpdate(requestBody)(dispatch);
        fetchEstimation(requestBody)(dispatch);
        setFrequency(value);
    };

    const handleDayChange = (event, value) => {
        const name = event.target.name;
        const requestBody = store.getState().estimation.settings;

        let selectedDays = 0;

        if (days.selected === 2 && days[name] === false) {
            return;
        }

        if (days[name]) {
            selectedDays = days.selected - 1;
            delete requestBody.houseworkWeekTime[name];
        } else {
            selectedDays = days.selected + 1;
            requestBody.houseworkWeekTime[name] = '';
        }

        setDays({ ...days, [name]: value, selected: selectedDays });
        setHours(requestBody.houseworkWeekTime ?? {});
        estimationBenefitUpdate(requestBody)(dispatch);
    };

    const handleHourChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        const requestBody = {
            ...store.getState().estimation.settings,
            houseworkWeekTime: { ...store.getState().estimation.settings.houseworkWeekTime, [name]: value },
        };

        setHours({ ...hours, [name]: value });
        estimationBenefitUpdate(requestBody)(dispatch);
    };

    const handleDateChange = (event, value) => {
        if (value.includes('_')) {
            setDate(date);
            return;
        }

        const segmentedDate = value.split('/');
        const requestBody = {
            ...store.getState().estimation.settings,
            startDate: `${segmentedDate[2]}-${segmentedDate[0]}-${segmentedDate[1]}`,
        };

        setDate(value);
        estimationBenefitUpdate(requestBody)(dispatch);
    };

    const displayHoursFromDays = () => {
        let toDisplay = [];

        for (const day in days) {
            if (days[day] && day !== 'selected') {
                toDisplay.push(
                    <FormControl key={day} required error={errors?.hours ? true : false}>
                        <InputLabel id={day}>Les {day}</InputLabel>

                        <Select
                            labelId={day}
                            value={hours[day] ?? '' }
                            onChange={handleHourChange}
                            name={day}
                        >
                            <option value="" />
                            <option value={1}>{t("Client.Time.morning")}</option>
                            <option value={2}>{t("Client.Time.afternoon")}</option>
                            <option value={3}>{t("Client.Time.any")}</option>
                        </Select>
                    </FormControl>
                );
            }
        }

        return toDisplay;
    };

    return (
        <Box className="HousingType">
            <Typography variant="h3" className="HousingType__title">{t("Client.Benefit.title1")}</Typography>

            <BottomNavigation
                value={frequency}
                onChange={handleFrequencyChange}
                showLabels
                className="active beneift__freq"
            >
                <BottomNavigationAction className="beneift__button" label={t("Client.Benefit.section1_title1")} />
                <BottomNavigationAction className="beneift__button" label={t("Client.Benefit.section1_title2")} />
                <BottomNavigationAction className="beneift__button" label={t("Client.Benefit.section1_title3")} />
            </BottomNavigation>

            <span className={`beneift__button-subtitle ${frequency === 0 ? "active" : ""}`}>{t("Client.Benefit.section1_subtitle1")}</span>
            <span className={`beneift__button-subtitle ${frequency === 1 ? "active" : ""}`}>{t("Client.Benefit.section1_subtitle2")}</span>
            <span className={`beneift__button-subtitle ${frequency === 2 ? "active" : ""}`}>{t("Client.Benefit.section1_subtitle3")}</span>

            <Box className="options_box">
                <Typography variant="h3" className="HousingType__title">{t("Client.Benefit.title2")}</Typography>

                <p>{t("Client.Benefit.section2_desc")}</p>

                <div className="options_list">
                    <OptionsCard name="oven" title={t("Client.Benefit.section2_option1")} iconSrc="images/icon_oven.svg" description={t("Client.Benefit.section2_option1_desc")} hasCounter="true" />
                    <OptionsCard name="fridge" title={t("Client.Benefit.section2_option2")} iconSrc="images/icon_fridge.svg" description={t("Client.Benefit.section2_option2_desc")} hasCounter="true" />
                    <OptionsCard name="bed" title={t("Client.Benefit.section2_option3")} iconSrc="images/icon_bed.svg" description={t("Client.Benefit.section2_option3_desc")} hasCounter="true" />
                    <OptionsCard name="vacuum" title={t("Client.Benefit.section2_option4")} iconSrc="images/icon_vacuum.svg" description={t("Client.Benefit.section2_option4_desc")} />
                    <OptionsCard name="product_ecological" title={t("Client.Benefit.section2_option5")} iconSrc="images/icon_eco_spray.svg" description={t("Client.Benefit.section2_option5_desc")} />
                    <OptionsCard name="product_standard" title={t("Client.Benefit.section2_option6")} iconSrc="images/icon_spray.svg" description={t("Client.Benefit.section2_option6_desc")} />
                </div>
            </Box>

            <Box className="date_box">
                <Typography variant="h3" className="HousingType__title">{t("Client.Benefit.title3")}</Typography>

                <p>{t("Client.Benefit.section3_desc")}</p>

                <Box className="date_box__container">
                    <Box className="days__container">
                        <Box className="section__title">
                            <svg className="MuiSvgIcon-root MuiStepIcon-root MuiStepIcon-active" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="12"></circle><text className="MuiStepIcon-text" x="12" y="16" textAnchor="middle">1</text></svg>
                            <Typography className={`${errors.days ? "error" : ""}`} variant="h6">{t("Client.Benefit.section3_option1")}</Typography>
                        </Box>

                        <Box>
                            <FormGroup>
                                <FormControlLabel
                                    control={<Checkbox checked={days.su} onChange={handleDayChange} name="su" color="primary" />}
                                    label={t("Client.Days.dim")}
                                    labelPlacement="start"
                                />
                                <FormControlLabel
                                    control={<Checkbox checked={days.mo} onChange={handleDayChange} name="mo" color="primary" />}
                                    label={t("Client.Days.lun")}
                                    labelPlacement="start"
                                />
                                <FormControlLabel
                                    control={<Checkbox checked={days.tu} onChange={handleDayChange} name="tu" color="primary" />}
                                    label={t("Client.Days.mar")}
                                    labelPlacement="start"
                                />
                                <FormControlLabel
                                    control={<Checkbox checked={days.we} onChange={handleDayChange} name="we" color="primary" />}
                                    label={t("Client.Days.mer")}
                                    labelPlacement="start"
                                />
                                <FormControlLabel
                                    control={<Checkbox checked={days.th} onChange={handleDayChange} name="th" color="primary" />}
                                    label={t("Client.Days.jeu")}
                                    labelPlacement="start"
                                />
                                <FormControlLabel
                                    control={<Checkbox checked={days.fr} onChange={handleDayChange} name="fr" color="primary" />}
                                    label={t("Client.Days.ven")}
                                    labelPlacement="start"
                                />
                                <FormControlLabel
                                    control={<Checkbox checked={days.sa} onChange={handleDayChange} name="sa" color="primary" />}
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

                        {displayHoursFromDays()}

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
                                value={date}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                                error={errors?.date ? true : false}
                            />
                        </MuiPickersUtilsProvider>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default withTranslation()(Benefit);
