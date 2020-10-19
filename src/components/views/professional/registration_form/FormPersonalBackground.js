import React, { Component } from 'react'
//import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { Box, Checkbox, FormControlLabel, NativeSelect, RadioGroup, Radio } from "@material-ui/core";
import InputBase from '@material-ui/core/InputBase';
import ButtonBlue from '../../../share/buttons/ButtonBlue';
import ButtonIcon from '../../../share/buttons/ButtonIcon';
import { withStyles } from "@material-ui/core/styles";

//import { makeStyles } from '@material-ui/core/styles';
import { withTranslation } from "react-i18next";
//REDUX FUNCTIONS
import { compose } from "redux";

class FormPersonalBackground extends Component {

    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { t } = this.props;
        const { classes } = this.props;
        const { values, handleChange } = this.props;
        return (
            <React.Fragment>
                <Box mb={5}>
                    <Typography variant="h1">{t("ProForm.FormPersonalBackground.title")}</Typography>
                </Box>

                <Box mb={6}>
                    <Box mb={1}>{t("ProForm.FormPersonalBackground.groupCheckBox_1.title")}</Box>

                    <RadioGroup row aria-label="gender" name="experience" value={values.experience} onChange={handleChange}>
                        <FormControlLabel labelPlacement = "end" value="1" control={<Radio color="primary" />} label={t("ProForm.FormPersonalBackground.groupCheckBox_1.checkBoxLabel1")} />
                        <FormControlLabel labelPlacement = "end" value="0" control={<Radio color="primary" />} label={t("ProForm.FormPersonalBackground.groupCheckBox_1.checkBoxLabel2")} />
                    </RadioGroup>
                </Box>

                <Box>
                    <Typography variant="h3">{t("ProForm.FormPersonalBackground.referencesTitle")}</Typography>
                    <Typography variant="h4">{t("ProForm.FormPersonalBackground.referencesSubTitle")}</Typography>

                    <Box mt={2} mb={1}>{t("ProForm.FormPersonalBackground.firstContactTitle")}</Box>
                    <Box>
                        <TextField
                            id="referFirstName1"
                            name="referFirstName1"
                            placeholder={t("ProForm.FormPersonalBackground.firstNameLabel")}
                            autoComplete="given-name"
                            variant="outlined"
                            size="small"
                            onChange={handleChange}
                            defaultValue={values.referFirstName1}
                            className={classes.inputWidth}
                        />
                        <TextField
                            id="referLastName1"
                            name="referLastName1"
                            placeholder={t("ProForm.FormPersonalBackground.lastNamelabel")}
                            autoComplete="given-name"
                            variant="outlined"
                            size="small"
                            onChange={handleChange}
                            defaultValue={values.referLastName1}
                            className={classes.inputWidth}
                        />
                        <TextField
                            id="referEmail1"
                            name="referEmail1"
                            placeholder={t("ProForm.FormPersonalBackground.email")}
                            autoComplete="given-name"
                            variant="outlined"
                            size="small"
                            onChange={handleChange}
                            defaultValue={values.referEmail1}
                            className={classes.inputWidth}
                        />
                        <TextField
                            id="referTelephone1"
                            name="referTelephone1"
                            placeholder={t("ProForm.FormPersonalBackground.cellPhone")}
                            autoComplete="given-name"
                            variant="outlined"
                            size="small"
                            onChange={handleChange}
                            defaultValue={values.referTelephone1}
                            className={classes.inputWidth}
                        />
                        <TextField
                            id="referCompany1"
                            name="referCompany1"
                            placeholder={t("ProForm.FormPersonalBackground.company")}
                            autoComplete="given-name"
                            variant="outlined"
                            size="small"
                            onChange={handleChange}
                            defaultValue={values.referCompany1}
                            className={classes.inputWidth}
                        />
                        <TextField
                            id="referPosition1"
                            name="referPosition1"
                            placeholder={t("ProForm.FormPersonalBackground.jobName")}
                            autoComplete="given-name"
                            variant="outlined"
                            size="small"
                            onChange={handleChange}
                            defaultValue={values.referPosition1}
                            className={classes.inputWidth}
                        />
                        <TextField
                            id="referDepartureDate1"
                            name="referDepartureDate1"
                            placeholder={t("ProForm.FormPersonalBackground.finishDate")}
                            autoComplete="given-name"
                            variant="outlined"
                            size="small"
                            onChange={handleChange}
                            defaultValue={values.referDepartureDate1}
                            className={classes.inputWidth}
                        />
                    </Box>

                    <Box mb={1}>{t("ProForm.FormPersonalBackground.secondContactTitle")}</Box>
                    <Box mb={7}>
                        <TextField
                            id="referFirstName2"
                            name="referFirstName2"
                            placeholder={t("ProForm.FormPersonalBackground.firstNameLabel")}
                            autoComplete="given-name"
                            variant="outlined"
                            size="small"
                            onChange={handleChange}
                            defaultValue={values.referFirstName2}
                            className={classes.inputWidth}
                        />
                        <TextField
                            id="referLastName2"
                            name="referLastName2"
                            placeholder={t("ProForm.FormPersonalBackground.lastNamelabel")}
                            autoComplete="given-name"
                            variant="outlined"
                            size="small"
                            onChange={handleChange}
                            defaultValue={values.referLastName2}
                            className={classes.inputWidth}
                        />
                        <TextField
                            id="referEmail2"
                            name="referEmail2"
                            placeholder={t("ProForm.FormPersonalBackground.email")}
                            autoComplete="given-name"
                            variant="outlined"
                            size="small"
                            onChange={handleChange}
                            defaultValue={values.referEmail2}
                            className={classes.inputWidth}
                        />
                        <TextField
                            id="referTelephone2"
                            name="referTelephone2"
                            placeholder={t("ProForm.FormPersonalBackground.cellPhone")}
                            autoComplete="given-name"
                            variant="outlined"
                            size="small"
                            onChange={handleChange}
                            defaultValue={values.referTelephone2}
                            className={classes.inputWidth}
                        />
                        <TextField
                            id="referCompany2"
                            name="referCompany2"
                            placeholder={t("ProForm.FormPersonalBackground.company")}
                            autoComplete="given-name"
                            variant="outlined"
                            size="small"
                            onChange={handleChange}
                            defaultValue={values.referCompany2}
                            className={classes.inputWidth}
                        />
                        <TextField
                            id="referPosition2"
                            name="referPosition2"
                            placeholder={t("ProForm.FormPersonalBackground.jobName")}
                            autoComplete="given-name"
                            variant="outlined"
                            size="small"
                            onChange={handleChange}
                            defaultValue={values.referPosition2}
                            className={classes.inputWidth}
                        />
                        <TextField
                            id="referDepartureDate2"
                            name="referDepartureDate2"
                            placeholder={t("ProForm.FormPersonalBackground.finishDate")}
                            autoComplete="given-name"
                            variant="outlined"
                            size="small"
                            onChange={handleChange}
                            defaultValue={values.referDepartureDate2}
                            className={classes.inputWidth}
                        />
                    </Box>

                    <Box>
                        <Box mb={6}>{t("ProForm.FormPersonalBackground.groupCheckBox_2.title")}</Box>
                        <FormControlLabel 
                            control={ <Checkbox onChange={handleChange} name="workRegurary" color="primary" checked={ values.workRegurary } /> }
                            label={t("ProForm.FormPersonalBackground.groupCheckBox_2.checkBoxLabel1")}
                        />
                        <FormControlLabel 
                            control={ <Checkbox onChange={handleChange} name="workExtra" color="primary" checked={ values.workExtra }  /> }
                            label={t("ProForm.FormPersonalBackground.groupCheckBox_2.checkBoxLabel2")}
                        />

                        <FormControlLabel 
                            control={ <Checkbox onChange={handleChange} name="extraIncome" color="primary" checked={ values.extraIncome }  /> }
                            label={t("ProForm.FormPersonalBackground.groupCheckBox_2.checkBoxLabel3")}
                        />
                        <FormControlLabel 
                            control={ <Checkbox onChange={handleChange} name="visibility" color="primary" checked={ values.visibility }  /> }
                            label={t("ProForm.FormPersonalBackground.groupCheckBox_2.checkBoxLabel4")}
                        />
                        <FormControlLabel 
                            control={ <Checkbox onChange={handleChange} name="concept" color="primary" checked={ values.concept }  /> }
                            label={t("ProForm.FormPersonalBackground.groupCheckBox_2.checkBoxLabel5")}
                        />
                    </Box>

                    <Box mt={5} mb={1}>{t("ProForm.FormPersonalBackground.knowUsLabel")}</Box>

                    <Box mr={2}>
                        <NativeSelect
                            id="birthMonth"
                            name="birthMonth"
                            //value={values.birthMonth}
                            //onChange={handleChange}
                            input={<BootstrapInput />}
                        >
                            <option value={1}>January</option>
                            <option value={2}>February</option>
                            <option value={3}>March</option>
                            <option value={4}>April</option>
                            <option value={5}>Mars</option>
                            <option value={6}>Juin</option>
                            <option value={7}>July</option>
                            <option value={8}>Auguest</option>
                            <option value={9}>Septembre</option>
                            <option value={10}>October</option>
                            <option value={11}>Novembre</option>
                            <option value={12}>December</option>
                        </NativeSelect>
                    </Box>
                </Box>


                <Box mt={3} className={classes.groupButtons}>
                    <Box>
                        <ButtonIcon onClick={this.back} label="BACK" />
                    </Box>
                    <Box>
                        <ButtonBlue onClick={this.continue} label="CONTINUE" />
                    </Box>
                </Box>



            </React.Fragment>
        )
    }
}
const BootstrapInput = withStyles((theme) => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}))(InputBase);

const styles = (theme) => ({
    groupLabelInput: {
        height: "75px",
        marginBottom: '56px',
    },
    inputWidth: {
        maxWidth: '160px',
        width: '100%',
        marginRight: '23px',
        marginBottom: '24px'
    },
    groupButtons: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        textAlign: 'center',
    }
});

export default compose(withStyles(styles), withTranslation())(FormPersonalBackground);
