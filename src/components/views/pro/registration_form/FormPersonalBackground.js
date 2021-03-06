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
//import InputPhone from '../../../../share/inputs/InputPhone';
//import customeDate from '../../../share/date/customeDate';

//import { makeStyles } from '@material-ui/core/styles';
import { withTranslation } from "react-i18next";
//REDUX FUNCTIONS
import { compose } from "redux";
import InputCustomPhone from '../../../share/inputs/InputCustomPhone';
import MultipleSelect from '../../../share/inputs/MultipleSelect';



class FormPersonalBackground extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    buildOptions(obj) {
        var arr = [];
        for(const value in obj){
            arr.push(<option key={value} value={value}>{obj[value]}</option>)
        }
        return arr;
    }

    render() {
        const { t } = this.props;
        const { classes } = this.props;
        const { values, handleChange, handleChangePhone } = this.props;
        const formErrors = values.formErrors;
        //const formErrorsNoValidaton = values.formErrorsNoValidaton;
        
        return (
            <React.Fragment>
                <Box mb={5}>
                    <Typography variant="h1">{t("ProForm.FormPersonalBackground.title")}</Typography>
                </Box>

                <Box mb={6}>
                    <Box className={classes.serviceArea}>
                        <Box>
                            <Box mb={1}><Typography variant="h5">{t("ProForm.FormPersonalBackground.groupCheckBox_1.title")}</Typography></Box>
                            <RadioGroup row aria-label="gender" name="experience" value={values.experience} onChange={handleChange}>
                                <FormControlLabel labelPlacement="end" value="1" control={<Radio color="primary" />} label={t("ProForm.FormPersonalBackground.groupCheckBox_1.checkBoxLabel1")} />
                                <FormControlLabel labelPlacement="end" value="0" control={<Radio color="primary" />} label={t("ProForm.FormPersonalBackground.groupCheckBox_1.checkBoxLabel2")} />
                            </RadioGroup>
                        </Box>
 
                        <Box mt={3}>
                            <MultipleSelect 
                                id="servicesChosen" 
                                label={t("ProForm.FormPersonalDetails.services")}
                                handleChange = { handleChange } 
                                servicesList={ values.servicesList } 
                                servicesChosen = { values.servicesChosen}
                            />

                            {(formErrors.step2.servicesChosen.length > 0 && values.validate === 1) && (
                                <span className={classes.errorMessage}>{formErrors.step2.servicesChosen}</span>
                            )}
                        </Box>
                    </Box>
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
                                id="referFirstName1" 
                                placeholder={t("ProForm.FormPersonalBackground.firstNameLabel")} 
                                size="small" 
                                onBlur={handleChange} 
                                variant="outlined" 
                                defaultValue={values.referFirstName1} 
                            />
{/* 
                            {(formErrors.step2.referFirstName1.length > 0 && values.validate === 1) && (
                                <span className={classes.errorMessage}>{t("ProForm.validations.refer")}</span>
                            )}
 */}
                        </Box>
                        <Box className={classes.boxReferences}>
                            <Input
                                id="referLastName1" 
                                placeholder={t("ProForm.FormPersonalBackground.lastNamelabel")} 
                                size="small" 
                                onBlur={handleChange} 
                                variant="outlined" 
                                defaultValue={values.referLastName1} 
                                error={(formErrors.step2.referLastName1.length > 0 && values.validate === 1) ? t("ProForm.validations.refer") : ""}
                            />
{/* 
                            {(formErrors.step2.referLastName1.length > 0 && values.validate === 1) && (
                                <span className={classes.errorMessage}>{t("ProForm.validations.refer")}</span>
                            )}
 */}
                        </Box>
                        <Box className={classes.boxReferences}>
                            <Input
                                id="referEmail1" 
                                placeholder={t("ProForm.FormPersonalBackground.email")} 
                                size="small" 
                                onBlur={handleChange} 
                                variant="outlined" 
                                defaultValue={values.referEmail1} 
                                error={(formErrors.step2.referEmail1.length > 0 && values.validate === 1) ? t("ProForm.validations.email") : ""}
                            />
{/* 
                            {(formErrors.step2.referEmail1.length > 0 && values.validate === 1) && (
                                <span className={classes.errorMessage}>{t("ProForm.validations.email")}</span>
                            )}
 */}
                        </Box>
                        <Box className={classes.boxReferences}>

                            <InputCustomPhone
                                name = 'referTelephone1'
                                country={ values.countryShortName.length === 0 ? 'ca' : values.countryShortName.toLowerCase()}
                                value={values.referTelephone1}              
                                disableCountryCode={false}
                                disableDropdown={false}
                                //onlyCountries={['ca', 'us', 'fr', 'es', 'ch', 'be']}
                                enableSearch={true}
                                regions={['north-america', 'europe']}
                                onChange={ handleChangePhone }
                                error={(formErrors.step2.referTelephone1.length > 0 && values.validate === 1) ? t("ProForm.validations.telephoneFilds") : ""}
                            /> 

                        </Box>
                        <Box className={classes.boxReferences}>
                            <Input
                                id="referCompany1" 
                                placeholder={t("ProForm.FormPersonalBackground.company")} 
                                size="small" 
                                onBlur={handleChange} 
                                variant="outlined" 
                                defaultValue={values.referCompany1} 
                                error={(formErrors.step2.referCompany1.length > 0 && values.validate === 1) ? t("ProForm.validations.refer") : ""}
                            />

                        </Box>
                        <Box className={classes.boxReferences}>
                            <Input
                                id="referPosition1" 
                                placeholder={t("ProForm.FormPersonalBackground.jobName")} 
                                size="small" 
                                onBlur={handleChange} 
                                variant="outlined" 
                                defaultValue={values.referPosition1} 
                                error={(formErrors.step2.referPosition1.length > 0 && values.validate === 1) ? t("ProForm.validations.refer") : ""}
                            />

                        </Box>
                        <Box className={classes.boxReferences}>
                            <TextField
                                id="referDepartureDate1"
                                name="referDepartureDate1"
                                label="Date de depart"
                                type="date"
                                format={'YYYY-MM-DD'}
                                defaultValue={values.referDepartureDate1}
                                onBlur={handleChange}
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
                            <Input 
                                error="" 
                                id="referFirstName2" 
                                placeholder={t("ProForm.FormPersonalBackground.firstNameLabel")} 
                                size="small" 
                                onBlur={handleChange}
                                variant="outlined"
                                defaultValue={values.referFirstName2} 
                            />

                        </Box>
                        <Box className={classes.boxReferences}>
                            <Input 
                                error="" 
                                id="referLastName2" 
                                placeholder={t("ProForm.FormPersonalBackground.lastNamelabel")} 
                                size="small" 
                                onBlur={handleChange}
                                variant="outlined"
                                defaultValue={values.referLastName2} 
                            />
                        </Box>
                        <Box className={classes.boxReferences}>
                            <Input 
                                //error={formErrorsNoValidaton.step2.referEmail2.length === 0 ? "" : formErrorsNoValidaton.step2.referEmail2} 
                                error=''
                                id="referEmail2" 
                                placeholder={t("ProForm.FormPersonalBackground.email")} 
                                size="small" 
                                onBlur={handleChange}
                                variant="outlined"
                                defaultValue={values.referEmail2} 
                            />
                        </Box>
                        <Box className={classes.boxReferences}>
                            <InputCustomPhone
                                name = 'referTelephone2'
                                country={ values.countryShortName.length === 0 ? 'ca' : values.countryShortName.toLowerCase()}
                                value={values.referTelephone2}              
                                disableCountryCode={false}
                                disableDropdown={false}
                                //onlyCountries={['ca', 'us', 'fr', 'es', 'ch', 'be']}
                                enableSearch={true}
                                regions={['north-america', 'europe']}
                                onChange={ handleChangePhone }
                                //error={formErrorsNoValidaton.step2.referTelephone2.length === 0 ? "" : t("ProForm.validations.telephoneFilds")}
                                error=''
                            />                                             
                        </Box>
                        <Box className={classes.boxReferences}>
                            <Input 
                                error="" 
                                id="referCompany2" 
                                placeholder={t("ProForm.FormPersonalBackground.company")} 
                                size="small" 
                                onBlur={handleChange}
                                variant="outlined"
                                defaultValue={values.referCompany2} 
                            />
                        </Box>
                        <Box className={classes.boxReferences}>
                            <Input 
                                error="" 
                                id="referPosition2" 
                                placeholder={t("ProForm.FormPersonalBackground.jobName")} 
                                size="small" 
                                onBlur={handleChange}
                                variant="outlined"
                                defaultValue={values.referPosition2} 
                            />
                        </Box>
                        <Box className={classes.boxReferences}>

                            {/* <Input error="" id="referDepartureDate2" label={t("ProForm.FormPersonalBackground.finishDate")} size="small" onChange={handleChange} defaultValue={values.referDepartureDate2} /> */}

                            <TextField
                                id="referDepartureDate2"
                                name="referDepartureDate2"
                                label="Date de depart"
                                type="date"
                                defaultValue={values.referDepartureDate1}
                                onBlur={handleChange}
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
                        <Box className={classes.groupCheckBoxes}>
                            <Box className={classes.classCheckBox}>
                                <FormControlLabel
                                    control={<Checkbox onClick={handleChange} name="workRegurary" color="primary" checked={values.workRegurary} className={classes.root} />}
                                    label={t("ProForm.FormPersonalBackground.groupCheckBox_2.checkBoxLabel1")}
                                />
                            </Box>
                            <Box className={classes.classCheckBox}>
                                <FormControlLabel
                                    control={<Checkbox onClick={handleChange} name="workExtra" color="primary" checked={values.workExtra} className={classes.root} />}
                                    label={t("ProForm.FormPersonalBackground.groupCheckBox_2.checkBoxLabel2")}
                                />
                            </Box>
                            <Box className={classes.classCheckBox}>
                                <FormControlLabel
                                    control={<Checkbox onClick={handleChange} name="visibility" color="primary" checked={values.visibility} className={classes.root} />}
                                    label={t("ProForm.FormPersonalBackground.groupCheckBox_2.checkBoxLabel4")}
                                />
                            </Box>
                            <Box className={classes.classCheckBox}>
                                <FormControlLabel
                                    control={<Checkbox onClick={handleChange} name="concept" color="primary" checked={values.concept} className={classes.root} />}
                                    label={t("ProForm.FormPersonalBackground.groupCheckBox_2.checkBoxLabel5")}
                                />
                            </Box>
                            <Box className={classes.classCheckBox}>
                                <FormControlLabel
                                    control={<Checkbox onClick={handleChange} name="extraIncome" color="primary" checked={values.extraIncome} className={classes.root} />}
                                    label={t("ProForm.FormPersonalBackground.groupCheckBox_2.checkBoxLabel3")}
                                />
                            </Box>
                        </Box>
                        {(formErrors.step2.integrationPlatform.length > 0 && values.validate === 1) && (
                            <span className={classes.errorMessage}>{t("ProForm.validations.integrationPlatform")}</span>
                        )}
                    </Box>

                    <Box mt={5} mb={1}><Typography variant="h5">{t("ProForm.FormPersonalBackground.knowUsLabel")}</Typography></Box>
                    <Box mr={2} className={classes.howToKnowUs}>
                        <NativeSelect
                            id="how_know_us"
                            name="how_know_us"
                            value={values.how_know_us}
                            onChange={handleChange}
                            input={<BootstrapInput />}
                        >
                            { this.buildOptions(values.how_know_us_list) }

                        </NativeSelect>

                        {(formErrors.step2.how_know_us.length > 0 && values.validate === 1) && (
                            <span className={classes.errorMessage}>{formErrors.step2.how_know_us}</span>
                        )}
                    </Box>
                </Box>


                <Box mt={3} className={classes.groupButtons}>
                    <Box>
                        <ButtonIcon onClick={this.back} label={ t("ProForm.FormPersonalBackground.buttonBack") } />
                    </Box>
                    <Box>
                        <ButtonBlue onClick={this.continue}  label={ t("ProForm.FormPersonalBackground.buttonNext") } />
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
        padding: '10.5px 26px 10.5px 12px',
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
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)'
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
        '@media (max-width:768px)': { 
            justifyContent: 'center',
        }
    },
    errorMessage: {
        color: '#dc3545',
        paddingTop: '5px',
        fontSize: '14px'
    },
    boxReferences: {
        display: 'flex',
        flexFlow: 'column',
        justifyContent: "space-between",
        maxWidth: '190px',
        width: '100%',
        marginRight: '15px',
        marginBottom: '15px',
        '@media (max-width:768px)': { 
            maxWidth: '768px',
            width: '100%',
            marginRight: '0',
            marginBottom: '30px',
            '& .MuiFormControl-root':{
                maxWidth: '768px'
            }
        }
    },
    reference: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    customizedText: {
        fontSize: '17px'
    },
    groupCheckBoxes: {
        display: "flex",
        flexWrap: "wrap"
    },
    classCheckBox: {
        width: "291px",
        '& > .MuiFormControlLabel-root':{
            marginLeft: '0',
            marginRight: '0'
        },
        '@media (max-width:1200px)': { 
            '& span':{
                fontSize: '16px'
            }
        }
    },
    howToKnowUs: {
        width: '270px',
        display: 'flex',
        flexDirection: 'column',
        '& .MuiInputBase-root':{
            boxShadow: '-1px 4px 6px 3px #80808047',
            borderRadius: '4px'
        },
        '& .Mui-focused': {
            //backgroundColor: '#2880fb'
        },
        '& svg.MuiNativeSelect-icon': {
            color: theme.palette.primary.main,
        }

    },
    serviceArea: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        '@media (max-width:992px)': { 
            flexDirection: 'column',
        }
    }
});

export default compose(withStyles(styles), withTranslation())(FormPersonalBackground);
