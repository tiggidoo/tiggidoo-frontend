import { withTranslation } from "react-i18next"
import { useState } from 'react'

import { Typography, Box, BottomNavigationAction, BottomNavigation } from '@material-ui/core'
import OptionsCard from "../../section-parts/OptionsCard";
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';

const Benefit = ({ t }) => {
    const [value, setValue] = useState(0);
    const [state, setState] = useState({
        dim: true,
        lun: true,
        mar: true,
        mer: true,
        jeu: true,
        vend: true,
        sam: true,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const [age, setAge] = useState('');

    const handleChangeSelect = (event) => {
        setAge(event.target.value);
    };

    const [selectedDate, setSelectedDate] = useState(new Date('2021-08-18T21:11:54'));

    const handleDateChangeDate = (date) => {
        setSelectedDate(date);
    };

    return (
        <Box className="HousingType">
            <Typography variant="h3" className="HousingType__title">{t("Client.Benefit.title1")}</Typography>

            <BottomNavigation
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                    console.log(value)
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
                    <OptionsCard title={t("Client.Benefit.section2_option2")} iconSrc="images/icon_spray.svg" description={t("Client.Benefit.section2_option2_desc")} hasCounter="true" />
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
                            <svg class="MuiSvgIcon-root MuiStepIcon-root MuiStepIcon-active" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="12"></circle><text class="MuiStepIcon-text" x="12" y="16" text-anchor="middle">1</text></svg>
                            <Typography variant="h6">{t("Client.Benefit.section3_option1")}</Typography>
                        </Box>

                        <Box>
                            <FormGroup>
                                <FormControlLabel
                                    control={<Checkbox checked={state.dim} onChange={handleChange} name="dim" color="primary" />}
                                    label="Dim"
                                    labelPlacement="start"
                                />
                                <FormControlLabel
                                    control={<Checkbox checked={state.lun} onChange={handleChange} name="lun" color="primary" />}
                                    label="Lun"
                                    labelPlacement="start"
                                />
                                <FormControlLabel
                                    control={<Checkbox checked={state.mar} onChange={handleChange} name="mar" color="primary" />}
                                    label="Mar"
                                    labelPlacement="start"
                                />
                                <FormControlLabel
                                    control={<Checkbox checked={state.mer} onChange={handleChange} name="mer" color="primary" />}
                                    label="Mer"
                                    labelPlacement="start"
                                />
                                <FormControlLabel
                                    control={<Checkbox checked={state.jeu} onChange={handleChange} name="jeu" color="primary" />}
                                    label="Jeu"
                                    labelPlacement="start"
                                />
                                <FormControlLabel
                                    control={<Checkbox checked={state.vend} onChange={handleChange} name="vend" color="primary" />}
                                    label="vend"
                                    labelPlacement="start"
                                />
                                <FormControlLabel
                                    control={<Checkbox checked={state.sam} onChange={handleChange} name="sam" color="primary" />}
                                    label="Sam"
                                    labelPlacement="start"
                                />
                            </FormGroup>
                        </Box>
                    </Box>

                    <Box className="hours__container">
                        <Box className="section__title">
                            <svg class="MuiSvgIcon-root MuiStepIcon-root MuiStepIcon-active" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="12"></circle><text class="MuiStepIcon-text" x="12" y="16" text-anchor="middle">2</text></svg>
                            <Typography variant="h6">{t("Client.Benefit.section3_option2")}</Typography>
                        </Box>

                        <FormControl>
                            <InputLabel id="date_one">Age</InputLabel>
                            <Select
                                labelId="date_one"
                                id="date_one"
                                value={age}
                                onChange={handleChangeSelect}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>

                            <InputLabel id="date_two">Age</InputLabel>
                            <Select
                                labelId="date_two"
                                id="date_two"
                                value={age}
                                onChange={handleChangeSelect}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>

                    <Box className="firstdate__container">
                        <Box className="section__title">
                            <svg class="MuiSvgIcon-root MuiStepIcon-root MuiStepIcon-active" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="12"></circle><text class="MuiStepIcon-text" x="12" y="16" text-anchor="middle">3</text></svg>
                            <Typography variant="h6">{t("Client.Benefit.section3_option3")}</Typography>
                        </Box>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                disableToolbar
                                variant="inline"
                                format="MM/dd/yyyy"
                                margin="normal"
                                id="date-picker-inline"
                                label="Date picker inline"
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
