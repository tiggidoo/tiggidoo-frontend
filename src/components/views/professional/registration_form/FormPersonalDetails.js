import React, { Component } from 'react'
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
//import TextField from "@material-ui/core/TextField";
import { Box, Checkbox, FormControlLabel, NativeSelect, RadioGroup, Radio } from "@material-ui/core";
import InputBase from '@material-ui/core/InputBase';
import ButtonBlue from '../../../share/buttons/ButtonBlue';
import Input from '../../../share/inputs/Input';
import InputPhone from '../../../share/inputs/InputPhone';

//import { makeStyles } from '@material-ui/core/styles';
import { withTranslation } from "react-i18next";

//STYLES
import { withStyles } from "@material-ui/core/styles";
//REDUX FUNCTIONS
import { compose } from "redux";
//import { FileX } from 'react-bootstrap-icons';

const styles = (theme) => ({
    groupLabelInput: {
        marginBottom: '56px',
    },
    errorMessage: {
        color: '#dc3545',
        paddingTop: '5px'
    },
    sectionImg: {
        display: 'flex',
        justifyContent: 'flex-end',
        '& > img':{
            maxWidth: '303px',
            width: '100%',
            marginTop: '-140px'
        }
    }
});
  
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
    }
}))(InputBase);

class FormPersonalDetails extends Component {

    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    buildOptions(startOrYear, endOrMonth, type) {

        if(type === 'day'){
            switch (endOrMonth) {
                case '1':
                case '3':
                case '5':
                case '7':
                case '8':
                case '10':
                case '12':
                    endOrMonth = 31;
                    break;
                case '4':
                case '6':
                case '9':
                case '11':
                    endOrMonth = 30;
                    break;
                default:
                    if(startOrYear % 4 === 0){
                        endOrMonth = 29;
                    }else{
                        endOrMonth = 28;
                    }
                        
                    break;
            }
            startOrYear = 1;
        }

        var arr = [];

        for (let i = startOrYear; i <= endOrMonth; i++) {
            arr.push(<option key={i} value={i}>{i}</option>)
        }

        return arr; 
    }

    render() {
        const { t } = this.props;
        const { classes } = this.props;
        const { values, handleChange } = this.props;
        const formErrors = values.formErrors;

        return (

            <React.Fragment>
                <Box mb={2}>
                    <Typography variant="h1">{t("ProForm.FormPersonalDetails.title")}</Typography>
                </Box>
                <Box mb={8}>
                    <Typography variant="h4">{t("ProForm.FormPersonalDetails.description1")}</Typography>
                    <Typography variant="h4">{t("ProForm.FormPersonalDetails.description2")}</Typography>
                </Box>

                <Grid container >
                    <Grid item xs={12} md={6}>
                        <Box className={classes.groupLabelInput}>
                            <Box mb={1}>
                                <Typography variant="h5">{t("ProForm.FormPersonalDetails.firstNameLabel")}</Typography>
                            </Box>
                            <Input 
                                error={formErrors.step1.firstName.length === 0 ? "" : formErrors.step1.firstName} 
                                id="firstName" label={t("ProForm.FormPersonalDetails.firstNameLabel")} size="small" onChange={handleChange} defaultValue={values.firstName} />
                            
                            {formErrors.step1.firstName.length > 0 && (
                                <span className={classes.errorMessage}>{formErrors.step1.firstName}</span>
                            )}
                            
                        </Box>

                        <Box className={classes.groupLabelInput}>
                            <Box mb={1}><Typography variant="h5">{t("ProForm.FormPersonalDetails.lastNameLabel")}</Typography></Box>
                            <Input  
                                error={formErrors.step1.lastName.length === 0 ? "" : formErrors.step1.lastName}  
                                id="lastName" label={t("ProForm.FormPersonalDetails.lastNameInput")} size="small" onChange={handleChange} defaultValue={values.lastName} />
                                {formErrors.step1.lastName.length > 0 && (
                                    <span className={classes.errorMessage}>{formErrors.step1.lastName}</span>
                                )}
                        </Box>

                        <Box className={classes.groupLabelInput}>
                            <Box mb={1}><Typography variant="h5">{t("ProForm.FormPersonalDetails.birthDayLabel")}</Typography></Box>
                            <Box display="flex">
                                <Box mr={2}>

                                    <NativeSelect
                                        id="birthYear"
                                        name="birthYear"
                                        value={values.birthYear}
                                        onChange={handleChange}
                                        input={<BootstrapInput />}
                                    >
                                        { this.buildOptions(1930, 2020, 'year') }
                                    </NativeSelect>
                                </Box>

                                <Box mr={2}>
                                    <NativeSelect
                                        id="birthMonth"
                                        name="birthMonth"
                                        value={values.birthMonth}
                                        onChange={handleChange}
                                        input={<BootstrapInput />}
                                    >
                                        <option value={1}>January</option>
                                        <option value={2}>February</option>
                                        <option value={3}>March</option>
                                        <option value={4}>April</option>
                                        <option value={5}>May</option>
                                        <option value={6}>June</option>
                                        <option value={7}>July</option>
                                        <option value={8}>August</option>
                                        <option value={9}>September</option>
                                        <option value={10}>October</option>
                                        <option value={11}>November</option>
                                        <option value={12}>December</option>
                                    </NativeSelect>
                                </Box>

                                <Box mr={2}>
                                    <NativeSelect
                                        id="birthDay"
                                        name="birthDay"
                                        value={values.birthDay}
                                        onChange={handleChange}
                                        input={<BootstrapInput />}
                                    >
{/* 
                                        {((values.birthMonth.length > 0 && values.birthYear.length > 0 ) &&(
                                            <option value=""></option>
                                        )}
 */}

                                         { this.buildOptions(values.birthYear, values.birthMonth, 'day') } 

                                    </NativeSelect>
                                </Box>
                            </Box>
                        </Box>

                        <Box className={classes.groupLabelInput}>
                            <Box mb={1}><Typography variant="h5">{t("ProForm.FormPersonalDetails.cellPhoneLabel")}</Typography></Box>
                            <InputPhone 
                                error={formErrors.step1.telephone.length === 0 ? "" : formErrors.step1.telephone}  
                                id="telephone" label={t("ProForm.FormPersonalDetails.cellPhoneLabel")} size="small" onChange={handleChange} defaultValue={values.telephone} />
                                {formErrors.step1.telephone.length > 0 && (
                                    <span className={classes.errorMessage}>{formErrors.step1.telephone}</span>
                                )}
                        </Box>

                        <Box className={classes.groupLabelInput}>
                        <Box mb={1}><Typography variant="h5">{t("ProForm.FormPersonalDetails.emaillLabel")}</Typography></Box>
                            <Input error={formErrors.step1.email} id="email" label={t("ProForm.FormPersonalDetails.emaillLabel")} size="small" onChange={handleChange} defaultValue={values.email} />
                            {formErrors.step1.email.length > 0 && (
                                <span className={classes.errorMessage}>{formErrors.step1.email}</span>
                            )}
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Box className={classes.groupLabelInput}>
                            <Box>
                                <Box><Typography variant="h5">{t("ProForm.FormPersonalDetails.groupCheckBox_1.title")}</Typography></Box>
                                <FormControlLabel
                                    control={<Checkbox onClick={handleChange} name="fr" color="primary" checked={ values.fr } />}
                                    label={t("ProForm.FormPersonalDetails.groupCheckBox_1.checkBoxLabel1")}
                                />

                                <FormControlLabel
                                    control={<Checkbox onClick={handleChange} name="en" color="primary" checked={ values.en } />}
                                    label={t("ProForm.FormPersonalDetails.groupCheckBox_1.checkBoxLabel2")}
                                />

                                <FormControlLabel
                                    control={<Checkbox onClick={handleChange} name="es" color="primary"  checked={ values.es } />}
                                    label={t("ProForm.FormPersonalDetails.groupCheckBox_1.checkBoxLabel3")}
                                />

                                <FormControlLabel
                                    control={<Checkbox onClick={handleChange} name="po" color="primary" checked={ values.po } />}
                                    label={t("ProForm.FormPersonalDetails.groupCheckBox_1.checkBoxLabel4")}
                                />

                                <FormControlLabel
                                    control={<Checkbox onClick={handleChange} name="ar" color="primary" checked={ values.ar } />}
                                    label={t("ProForm.FormPersonalDetails.groupCheckBox_1.checkBoxLabel5")}
                                />
                            </Box>
                            {formErrors.step1.spokenLanguages.length > 0 && (
                                    <span className={classes.errorMessage}>{formErrors.step1.spokenLanguages}</span>
                            )}
                        </Box>

                        <Box className={classes.groupLabelInput}>
                            <Box><Typography variant="h5">{t("ProForm.FormPersonalDetails.groupCheckBox_2.title")}</Typography></Box>
                            
                            <RadioGroup row aria-label="gender" name="authorization" value={values.authorization} onChange={handleChange}>
                                <FormControlLabel labelPlacement = "end" value="1" control={<Radio color="primary" />} label={t("ProForm.FormPersonalDetails.groupCheckBox_2.checkBoxLabel1")} />
                                <FormControlLabel labelPlacement = "end" value="0" control={<Radio color="primary" />} label={t("ProForm.FormPersonalDetails.groupCheckBox_2.checkBoxLabel2")} />
                            </RadioGroup>

                        </Box>

                        <Box className={classes.groupLabelInput}>
                            <Box><Typography variant="h5">{t("ProForm.FormPersonalDetails.groupCheckBox_3.title")}</Typography></Box>
                            <Box>{t("ProForm.FormPersonalDetails.groupCheckBox_3.desctiption")}</Box>

                            <RadioGroup row aria-label="gender" name="criminal" value={values.criminal} onChange={handleChange}>
                                <FormControlLabel labelPlacement = "end" value="1" control={<Radio color="primary" />} label={t("ProForm.FormPersonalDetails.groupCheckBox_2.checkBoxLabel1")} />
                                <FormControlLabel labelPlacement = "end" value="0" control={<Radio color="primary" />} label={t("ProForm.FormPersonalDetails.groupCheckBox_2.checkBoxLabel2")} />
                            </RadioGroup>

                        </Box>
                        <Box className={classes.sectionImg}>
                            <img src="images/prepose-menage.svg" alt=""/>
                        </Box>
                    </Grid>
                </Grid>

                <Box display="flex" justifyContent="flex-end">
                    <ButtonBlue onClick={this.continue} label="CONTINUE" />
                </Box>

            </React.Fragment>
        )
    }
}

export default compose(
    withStyles(styles),
    withTranslation()
  )(FormPersonalDetails);