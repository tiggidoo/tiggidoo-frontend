import React, { Component } from 'react'
//import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
//import TextField from "@material-ui/core/TextField";
import { Box, Checkbox, FormControlLabel, NativeSelect, RadioGroup, Radio, TextField } from "@material-ui/core";
import InputBase from '@material-ui/core/InputBase';
import ButtonBlue from '../../../share/buttons/ButtonBlue';
import ButtonIcon from '../../../share/buttons/ButtonIcon';
import { withStyles } from "@material-ui/core/styles";
import Input from '../../../share/inputs/Input';
import InputPhone from '../../../share/inputs/InputPhone';
//import customeDate from '../../../share/date/customeDate';

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
        const formErrors = values.formErrors;
        const formErrorsNoValidaton = values.formErrorsNoValidaton;
        return (
            <React.Fragment>
                <Box mb={5}>
                    <Typography variant="h1">{t("ProForm.FormPersonalBackground.title")}</Typography>
                </Box>

                <Box mb={6}>
                    <Box mb={1}><Typography variant="h5">{t("ProForm.FormPersonalBackground.groupCheckBox_1.title")}</Typography></Box>

                    <RadioGroup row aria-label="gender" name="experience" value={values.experience} onChange={handleChange}>
                        <FormControlLabel labelPlacement="end" value="1" control={<Radio color="primary" />} label={t("ProForm.FormPersonalBackground.groupCheckBox_1.checkBoxLabel1")} />
                        <FormControlLabel labelPlacement="end" value="0" control={<Radio color="primary" />} label={t("ProForm.FormPersonalBackground.groupCheckBox_1.checkBoxLabel2")} />
                    </RadioGroup>
                </Box>

                <Box>
                    <Typography variant="h5">{t("ProForm.FormPersonalBackground.referencesTitle")}</Typography>
                    <Box className={classes.customizedText}>{t("ProForm.FormPersonalBackground.referencesSubTitle")}</Box>
                    {/* <Typography variant="h5">{t("ProForm.FormPersonalBackground.referencesSubTitle")}</Typography> */}

                    <Box mt={2} mb={1}><Typography variant="h5">{t("ProForm.FormPersonalBackground.firstContactTitle")}</Typography></Box>
                    <Box className={classes.reference}>
                        <Box className={classes.boxReferences}>
                            <Input
                                error={(formErrors.step2.referFirstName1.length > 0 && values.validate === 1) ? formErrors.step2.referFirstName1 : ""}
                                id="referFirstName1" label={t("ProForm.FormPersonalBackground.firstNameLabel")} size="small" onChange={handleChange} defaultValue={values.referFirstName1} />

                            {(formErrors.step2.referFirstName1.length > 0 && values.validate === 1) && (
                                <span className={classes.errorMessage}>{formErrors.step2.referFirstName1}</span>
                            )}

                        </Box>
                        <Box className={classes.boxReferences}>
                            <Input
                                error={(formErrors.step2.referLastName1.length > 0 && values.validate === 1) ? formErrors.step2.referLastName1 : ""}
                                id="referLastName1" label={t("ProForm.FormPersonalBackground.lastNamelabel")} size="small" onChange={handleChange} defaultValue={values.referLastName1} />

                            {(formErrors.step2.referLastName1.length > 0 && values.validate === 1) && (
                                <span className={classes.errorMessage}>{formErrors.step2.referLastName1}</span>
                            )}

                        </Box>
                        <Box className={classes.boxReferences}>
                            <Input
                                error={(formErrors.step2.referEmail1.length > 0 && values.validate === 1) ? formErrors.step2.referEmail1 : ""}
                                id="referEmail1" label={t("ProForm.FormPersonalBackground.email")} size="small" onChange={handleChange} defaultValue={values.referEmail1} />

                            {(formErrors.step2.referEmail1.length > 0 && values.validate === 1) && (
                                <span className={classes.errorMessage}>{formErrors.step2.referEmail1}</span>
                            )}

                        </Box>
                        <Box className={classes.boxReferences}>
                            <InputPhone
                                error={(formErrors.step2.referTelephone1.length > 0 && values.validate === 1) ? formErrors.step2.referTelephone1 : ""}
                                id="referTelephone1" label={t("ProForm.FormPersonalBackground.cellPhone")} size="small" onChange={handleChange} defaultValue={values.referTelephone1} />

                            {(formErrors.step2.referTelephone1.length > 0 && values.validate === 1) && (
                                <span className={classes.errorMessage}>{formErrors.step2.referTelephone1}</span>
                            )}

                        </Box>
                        <Box className={classes.boxReferences}>
                            <Input
                                error={(formErrors.step2.referCompany1.length > 0 && values.validate === 1) ? formErrors.step2.referCompany1 : ""}
                                id="referCompany1" label={t("ProForm.FormPersonalBackground.company")} size="small" onChange={handleChange} defaultValue={values.referCompany1} />

                            {(formErrors.step2.referCompany1.length > 0 && values.validate === 1) && (
                                <span className={classes.errorMessage}>{formErrors.step2.referCompany1}</span>
                            )}

                        </Box>
                        <Box className={classes.boxReferences}>
                            <Input
                                error={(formErrors.step2.referPosition1.length > 0 && values.validate === 1) ? formErrors.step2.referPosition1 : ""}
                                id="referPosition1" label={t("ProForm.FormPersonalBackground.jobName")} size="small" onChange={handleChange} defaultValue={values.referPosition1} />

                            {(formErrors.step2.referPosition1.length > 0 && values.validate === 1) && (
                                <span className={classes.errorMessage}>{formErrors.step2.referPosition1}</span>
                            )}

                        </Box>
                        <Box className={classes.boxReferences}>
                            <TextField
                                id="referDepartureDate1"
                                name="referDepartureDate1"
                                label="Date de depart"
                                type="date"
                                format={'YYYY-MM-DD'}
                                defaultValue={values.referDepartureDate1}
                                onChange={handleChange}
                                variant="outlined"
                                size="small"
                                className={(formErrors.step2.referDepartureDate1.length > 0 && values.validate === 1) ? classes.errors : ""}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />

                            {(formErrors.step2.referDepartureDate1.length > 0 && values.validate === 1) && (
                                <span className={classes.errorMessage}>{formErrors.step2.referDepartureDate1}</span>
                            )}
                        </Box>


                    </Box>

                    <Box mb={1}><Typography variant="h5">{t("ProForm.FormPersonalBackground.secondContactTitle")}</Typography></Box>
                    <Box className={classes.reference}>
                        <Box className={classes.boxReferences}>
                            <Input error="" id="referFirstName2" label={t("ProForm.FormPersonalBackground.firstNameLabel")} size="small" onChange={handleChange} defaultValue={values.referFirstName2} />

                        </Box>
                        <Box className={classes.boxReferences}>
                            <Input error="" id="referLastName2" label={t("ProForm.FormPersonalBackground.lastNamelabel")} size="small" onChange={handleChange} defaultValue={values.referLastName2} />
                        </Box>
                        <Box className={classes.boxReferences}>
                            <Input error={formErrorsNoValidaton.step2.referEmail2.length === 0 ? "" : formErrorsNoValidaton.step2.referEmail2} id="referEmail2" label={t("ProForm.FormPersonalBackground.email")} size="small" onChange={handleChange} defaultValue={values.referEmail2} />
                            {formErrorsNoValidaton.step2.referEmail2.length > 0 && (
                                <span className={classes.errorMessage}>{formErrorsNoValidaton.step2.referEmail2}</span>
                            )}
                        </Box>
                        <Box className={classes.boxReferences}>
                            <InputPhone error={formErrorsNoValidaton.step2.referTelephone2.length === 0 ? "" : formErrorsNoValidaton.step2.referTelephone2} id="referTelephone2" label={t("ProForm.FormPersonalBackground.cellPhone")} size="small" onChange={handleChange} defaultValue={values.referTelephone2} />
                            {formErrorsNoValidaton.step2.referTelephone2.length > 0 && (
                                <span className={classes.errorMessage}>{formErrorsNoValidaton.step2.referTelephone2}</span>
                            )}
                        </Box>
                        <Box className={classes.boxReferences}>
                            <Input error="" id="referCompany2" label={t("ProForm.FormPersonalBackground.company")} size="small" onChange={handleChange} defaultValue={values.referCompany2} />
                        </Box>
                        <Box className={classes.boxReferences}>
                            <Input error="" id="referPosition2" label={t("ProForm.FormPersonalBackground.jobName")} size="small" onChange={handleChange} defaultValue={values.referPosition2} />
                        </Box>
                        <Box className={classes.boxReferences}>

                            {/* <Input error="" id="referDepartureDate2" label={t("ProForm.FormPersonalBackground.finishDate")} size="small" onChange={handleChange} defaultValue={values.referDepartureDate2} /> */}

                            <TextField
                                id="referDepartureDate2"
                                name="referDepartureDate2"
                                label="Date de depart"
                                type="date"
                                defaultValue={values.referDepartureDate1}
                                onChange={handleChange}
                                variant="outlined"
                                format="d MMM yyyy"
                                size="small"
                                className={classes.withOutErrors}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Box>
                    </Box>

                    <Box>
                        <Box my={6}><Typography variant="h5">{t("ProForm.FormPersonalBackground.groupCheckBox_2.title")}</Typography></Box>
                        <FormControlLabel
                            control={<Checkbox onClick={handleChange} name="workRegurary" color="primary" checked={values.workRegurary} className={classes.root} />}
                            label={t("ProForm.FormPersonalBackground.groupCheckBox_2.checkBoxLabel1")}
                        />
                        <FormControlLabel
                            control={<Checkbox onClick={handleChange} name="workExtra" color="primary" checked={values.workExtra} className={classes.root} />}
                            label={t("ProForm.FormPersonalBackground.groupCheckBox_2.checkBoxLabel2")}
                        />

                        <FormControlLabel
                            control={<Checkbox onClick={handleChange} name="extraIncome" color="primary" checked={values.extraIncome} className={classes.root} />}
                            label={t("ProForm.FormPersonalBackground.groupCheckBox_2.checkBoxLabel3")}
                        />
                        <FormControlLabel
                            control={<Checkbox onClick={handleChange} name="visibility" color="primary" checked={values.visibility} className={classes.root} />}
                            label={t("ProForm.FormPersonalBackground.groupCheckBox_2.checkBoxLabel4")}
                        />
                        <FormControlLabel
                            control={<Checkbox onClick={handleChange} name="concept" color="primary" checked={values.concept} />}
                            label={t("ProForm.FormPersonalBackground.groupCheckBox_2.checkBoxLabel5")}
                        />

                        {(formErrors.step2.integrationPlatform.length > 0 && values.validate === 1) && (
                            <span className={classes.errorMessage}>{formErrors.step2.integrationPlatform}</span>
                        )}


                    </Box>

                    <Box mt={5} mb={1}><Typography variant="h5">{t("ProForm.FormPersonalBackground.knowUsLabel")}</Typography></Box>
                    <Box mr={2}>
                        <NativeSelect
                            id="how_know_us"
                            name="how_know_us"
                            value={values.how_know_us}
                            onChange={handleChange}
                            input={<BootstrapInput />}
                        >
                            <option value={0}></option>
                            <option value={1}>Le Journal</option>
                            <option value={2}>La Radio</option>
                            <option value={3}>La télé</option>
                            <option value={4}>Youtube</option>
                        </NativeSelect>

                        {(formErrors.step2.how_know_us.length > 0 && values.validate === 1) && (
                            <span className={classes.errorMessage}>{formErrors.step2.how_know_us}</span>
                        )}
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
    root: {
        border: '1px',
        color: '#2880fb',
        '& svg': {
            fontSize: '3.3rem'
        }
    },
    errors: {
        maxWidth: '517px',
        width: '100%',
        // paddingRight: '15px',
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'red',
            }
        },
    },
    withOutErrors: {
        maxWidth: '517px',
        width: '100%',
        // paddingRight: '15px',
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#c4c4c4',
            }
        },
    },
    groupLabelInput: {
        height: "75px",
        marginBottom: '56px',
    },
    inputWidth: {
        maxWidth: '160px',
        width: '100%',
        marginRight: '23px',
        marginBottom: '0px'
    },
    groupButtons: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        textAlign: 'center',
    },
    errorMessage: {
        color: '#dc3545',
        paddingTop: '5px',
        fontSize: '14px'
    },
    boxReferences: {
        display: 'flex',
        flexWrap: 'wrap',
        flexFlow: 'row',
        maxWidth: '200px',
        width: '100%'
    },
    reference: {
        display: 'flex'
    },
    customizedText: {
        fontSize: '17px'
    }
});

export default compose(withStyles(styles), withTranslation())(FormPersonalBackground);
