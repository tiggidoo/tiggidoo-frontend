import React, { Component } from 'react'
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
//import TextField from "@material-ui/core/TextField";
import { Box, Checkbox, FormControlLabel, NativeSelect, RadioGroup, Radio } from "@material-ui/core";
import InputBase from '@material-ui/core/InputBase';
import ButtonBlue from '../../../share/buttons/ButtonBlue';
import Input from '../../../share/inputs/Input';
import InputPhone from '../../../share/inputs/InputPhone';
import PlacesAutocomplete, {
    geocodeByAddress
  } from 'react-places-autocomplete';

//import { makeStyles } from '@material-ui/core/styles';
import { withTranslation } from "react-i18next";

//STYLES
import { withStyles } from "@material-ui/core/styles";
//REDUX FUNCTIONS
import { compose } from "redux";
//import { FileX } from 'react-bootstrap-icons';
import axios from 'axios';

const styles = (theme) => ({
    root: {
        border: '1px',
        color: '#2880fb',
        '& svg': {
            fontSize: '3.3rem'
        },
        '& .MuiCheckbox-colorPrimary.Mui-checked': {
            color: "#fff"
        }
    },
    groupLabelInput: {
        marginBottom: '32px',
        paddingRight: '30px',
        '@media (max-width:768px)': { 
            paddingRight: '20px',
            marginBottom: '56px',
        },
        '@media (max-width:600px)': { 
            paddingRight: '0'
        }
    },
    groupLabelInputAddress:{
        marginBottom: '20px',
        paddingRight: '10px',
        '@media (max-width:768px)': { 
            paddingRight: '20px',
            marginBottom: '56px',
        },
        '@media (max-width:600px)': { 
            paddingRight: '0'
        }
    },
    groupLabelInputPhoneAndMail: {
        marginBottom: '56px',
        paddingRight: '30px',
        '@media (max-width:768px)': { 
            paddingRight: '20px',
            marginBottom: '56px',
        },
        '@media (max-width:600px)': { 
            paddingRight: '0'
        }
    },
    groupLabelCheck: {
        marginBottom: '40px',
        paddingRight: '30px',
        '@media (max-width:1600px)': { 
            marginBottom: '5px'
        },
        '@media (max-width:1200px)': { 
            marginBottom: '40px',
            paddingRight: '10px'
        },
        '@media (max-width:768px)': { 
            //maxWidth: '100%',
            marginBottom: '56px',
        }
    },
    groupLabelSelect: {
        maxWidth: '517px',
        width: '100%',
        marginBottom: '56px',
        paddingRight: '30px'
    },
    errorMessage: {
        color: '#dc3545',
        paddingTop: '5px'
    },
    groupCheckBoxes: {
        display: "flex",
        flexWrap: "wrap"
    },
    classCheckBox: {
        width: "140px",
        '@media (max-width:1200px)': { 
            '& span':{
                fontSize: '16px'
            }
        }
    },
    sectionImg: {
        display: 'flex',
        justifyContent: 'flex-end',
        '& > img': {
            maxWidth: '303px',
            width: '100%',
            marginTop: '-140px',
            '@media (max-width:1600px)':{
                marginTop: '-50px',
            },
            '@media (max-width:768px)':{
                display: 'none'
            },
        }
    },
    noBold: {
        fontWeight: 'normal',
        fontSize: '20px',
        margin: '0px'
    },
    buttonBlue: {
        display:"flex", 
        justifyContent:"flex-end",
        '@media (max-width:768px)':{
            justifyContent:"center"
        }
    },
    NativeSelect:{
        display: 'flex',
        justifyContent: 'space-between',
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
    addressSearch:{
        '& input':{
            'width': '100%',
            'padding': '11px',
            'border': '1px solid #32cc8c',
            'color': '#2880fb',
            'borderRadius': '4px'
        },
        '& input:focus': {
            'border': '1px solid #2880fb',
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
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    }
}))(InputBase);

class FormPersonalDetails extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            address: ''
        };
    }

    continue = (e) => {
        e.preventDefault();
        //this.props.validateMailAndNextStep();
        this.verifyCredential();
        
    }

    verifyCredential = async () => {
        let emailAndPhoneExiste = 1;
        const { email, telephone } = this.props.values;
        if(email.length > 0 && telephone.length > 0){

            let varTelephone = telephone;
            varTelephone = varTelephone.replace('(', '');
            varTelephone = varTelephone.replace(')', '');
            varTelephone = varTelephone.replace('-', '');
            varTelephone = varTelephone.replace(' ', '');
            varTelephone = varTelephone.trim();

            const f = new FormData();
            
            f.append('email', email);
            f.append('telephone', varTelephone);
            await axios.post('https://www.api-tiggidoo.com/api/verifyCredential', f, {headers: {'Content-Type': 'multipart/form-data'}})    
            .then(res => {
                if(res.status === 200){
                    emailAndPhoneExiste = 0;
                }
                
            }).catch((error) => {
                console.log(error)
            })

            this.props.validateMailAndNextStep(emailAndPhoneExiste);

        }else{
            this.props.nextStep();
        }
    }

    handleChangeAddress = address => {
        this.setState({ address });
    };
    
    handleSelectAddress = async address => {
        const { handleAddressGoogleApi } = this.props;

        geocodeByAddress(address)
        .then(results =>{
            handleAddressGoogleApi(results[0]);
        })
        .catch(error => console.error('Error', error));
        
    };

    buildOptions(startOrYear, endOrMonth, type) {

        if (type === 'day') {
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
                    if (startOrYear % 4 === 0) {
                        endOrMonth = 29;
                    } else {
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
        //const { t } = this.props;
        //const { classes } = this.props;
        const { t, classes, values, handleChange } = this.props;

        const formErrors = values.formErrors;
        return (

            <React.Fragment>
                <Box mb={2}>
                    <Typography variant="h1">{t("ProForm.FormPersonalDetails.title")}</Typography>
                </Box>
                <Box mb={8}>
                    <p className={classes.noBold}>{t("ProForm.FormPersonalDetails.description1")}</p>
                    <p className={classes.noBold}>{t("ProForm.FormPersonalDetails.description2")}</p>
                </Box>

                <Grid container >
                    <Grid item xs={12} sm={12} md={6}>
                        <Grid container >
                            <Grid item xs={12} sm={12} md={6}>
                                <Box className={classes.groupLabelInput}>
                                    <Box mb={1}>
                                        <Typography variant="h5">{t("ProForm.FormPersonalDetails.firstNameLabel")}</Typography>
                                    </Box>
                                    <Input
                                        error={(formErrors.step1.firstName.length > 0 && values.validate === 1) ? formErrors.step1.firstName : ""}
                                        id="firstName" label={t("ProForm.FormPersonalDetails.firstNameLabel")} size="small" onChange={handleChange} defaultValue={values.firstName} />

                                    {(formErrors.step1.firstName.length > 0 && values.validate === 1) && (
                                        <span className={classes.errorMessage}>{t("ProForm.validations.firstName")}</span>
                                    )}

                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6}>
                                <Box className={classes.groupLabelInput}>
                                    <Box mb={1}><Typography variant="h5">{t("ProForm.FormPersonalDetails.lastNameLabel")}</Typography></Box>
                                    <Input
                                        error={(formErrors.step1.lastName.length > 0 && values.validate === 1) ? formErrors.step1.lastName : ""}
                                        id="lastName" label={t("ProForm.FormPersonalDetails.lastNameInput")} size="small" onChange={handleChange} defaultValue={values.lastName} />
                                    {(formErrors.step1.lastName.length > 0 && values.validate === 1) && (
                                        <span className={classes.errorMessage}>{t("ProForm.validations.lastName")}</span>
                                    )}
                                </Box>
                            </Grid>
                        </Grid>
                        <Box className={classes.groupLabelInput}>
                            <Grid container >
                                <Grid item xs={12}>
                                    <Box mb={1}>
                                        <Typography variant="h5">{t("ProForm.FormPersonalDetails.address.title")}</Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12}>
                                    <Box className={classes.groupLabelInputAddress}>
                                        <PlacesAutocomplete
                                            value={this.state.address}
                                            onChange={this.handleChangeAddress}
                                            onClick={this.handleSelectAddress}
                                            onSelect={this.handleSelectAddress}
                                        >
                                            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                                                <Box className={classes.addressSearch}>
                                                    <input {...getInputProps({placeholder: "Type an address and choose one"})} />
                                                    <div>
                                                        {loading ? <div>...loading</div> : null}
                                                        {suggestions.map((suggestion, index) => {

                                                            const style = {
                                                                backgroundColor: suggestion.active ? "#2880fb" : "#fff",
                                                                color: suggestion.active ? "#fff" : "#000"
                                                            };

                                                            return(
                                                                <div key={index} {...getSuggestionItemProps(suggestion, { style })}>
                                                                    {suggestion.description}
                                                                </div>
                                                            );    
                                                        })}
                                                    </div>
                                                </Box>
                                            )}

                                        </PlacesAutocomplete>
                                    </Box>
                                </Grid>

                                <Grid item xs={12} sm={12} md={6}>
                                    <Box className={classes.groupLabelInputAddress}>
                                        
                                        <Input
                                            error={(formErrors.step1.street.length > 0 && values.validate === 1) ? formErrors.step1.street : ""}
                                            id="street" label={t("ProForm.FormPersonalDetails.address.street")} size="small" defaultValue={values.street} />

                                        {(formErrors.step1.street.length > 0 && values.validate === 1) && (
                                            <span className={classes.errorMessage}>{t("ProForm.validations.street")}</span>
                                        )}
                                    </Box>
                                </Grid>

                                
                                <Grid item xs={12} sm={12} md={6}>
                                    <Box className={classes.groupLabelInputAddress}>
                                        <Input
                                            error={(formErrors.step1.city.length > 0 && values.validate === 1) ? formErrors.step1.city : ""}
                                            id="city" label={t("ProForm.FormPersonalDetails.address.city")} size="small" defaultValue={values.city} />
                                        {(formErrors.step1.city.length > 0 && values.validate === 1) && (
                                            <span className={classes.errorMessage}>{t("ProForm.validations.city")}</span>
                                        )}
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={12} md={4}>
                                    <Box className={classes.groupLabelInputAddress}>
                                        <Input
                                            error={(formErrors.step1.province.length > 0 && values.validate === 1) ? formErrors.step1.province : ""}
                                            id="province" label={t("ProForm.FormPersonalDetails.address.province")} size="small" defaultValue={values.province} />

                                        {(formErrors.step1.province.length > 0 && values.validate === 1) && (
                                            <span className={classes.errorMessage}>{t("ProForm.validations.province")}</span>
                                        )}

                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={12} md={4}>
                                    <Box className={classes.groupLabelInputAddress}>
                                        <Input
                                            error={(formErrors.step1.country.length > 0 && values.validate === 1) ? formErrors.step1.country : ""}
                                            id="country" label={t("ProForm.FormPersonalDetails.address.country")} size="small" defaultValue={values.country} />
                                        {(formErrors.step1.country.length > 0 && values.validate === 1) && (
                                            <span className={classes.errorMessage}>{t("ProForm.validations.country")}</span>
                                        )}
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={12} md={4}>
                                    <Box className={classes.groupLabelInputAddress}>
                                        <Input
                                            error={(formErrors.step1.postCode.length > 0 && values.validate === 1) ? formErrors.step1.postCode : ""}
                                            id="postCode" label={t("ProForm.FormPersonalDetails.address.postCode")} size="small" defaultValue={values.postCode} />

                                        {(formErrors.step1.postCode.length > 0 && values.validate === 1) && (
                                            <span className={classes.errorMessage}>{t("ProForm.validations.postCode")}</span>
                                        )}

                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box className={classes.groupLabelInput}>
                            <Box mb={1}><Typography variant="h5">{t("ProForm.FormPersonalDetails.cellPhoneLabel")}</Typography></Box>
                            <InputPhone
                                error={(formErrors.step1.telephone.length > 0 && values.validate === 1) ? formErrors.step1.telephone : ""}
                                id="telephone" label={t("ProForm.FormPersonalDetails.cellPhoneLabel")} size="small" onChange={handleChange} defaultValue={values.telephone} />

                            {(formErrors.step1.telephone.length > 0 && values.validate === 1) && (
                                <span className={classes.errorMessage}>{t("ProForm.validations.telephoneFilds")}</span>
                            )}
                        </Box>
                        <Box className={classes.groupLabelInput}>
                            <Box mb={1}><Typography variant="h5">{t("ProForm.FormPersonalDetails.emaillLabel")}</Typography></Box>
                            <Input error={(formErrors.step1.email.length > 0 && values.validate === 1) ? formErrors.step1.email : ""}
                                id="email" label={t("ProForm.FormPersonalDetails.emaillLabel")} size="small" onChange={handleChange} defaultValue={values.email} />

                            {(formErrors.step1.email.length > 0 && values.validate === 1) && (
                                <span className={classes.errorMessage}>{t("ProForm.validations.email")}</span>
                            )}

                        </Box>

                    </Grid>

                    <Grid item xs={12} sm={12} md={6}>
                        <Box className={classes.groupLabelSelect}>
                            <Box mb={1}><Typography variant="h5">{t("ProForm.FormPersonalDetails.birthDayLabel")}</Typography></Box>
                            <Box className={classes.NativeSelect}>
                                <Box mr={2}>

                                    <NativeSelect
                                        id="birthYear"
                                        name="birthYear"
                                        value={values.birthYear}
                                        onChange={handleChange}
                                        input={<BootstrapInput />}
                                    >
                                        {this.buildOptions(1930, 2020, 'year')}
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
                                        <option value={1}>{t("months.January")}</option>
                                        <option value={2}>{t("months.February")}</option>
                                        <option value={3}>{t("months.March")}</option>
                                        <option value={4}>{t("months.April")}</option>
                                        <option value={5}>{t("months.May")}</option>
                                        <option value={6}>{t("months.June")}</option>
                                        <option value={7}>{t("months.July")}</option>
                                        <option value={8}>{t("months.August")}</option>
                                        <option value={9}>{t("months.September")}</option>
                                        <option value={10}>{t("months.October")}</option>
                                        <option value={11}>{t("months.November")}</option>
                                        <option value={12}>{t("months.December")}</option>
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
                                        {this.buildOptions(values.birthYear, values.birthMonth, 'day')}

                                    </NativeSelect>
                                </Box>
                            </Box>
                        </Box>


                        <Box className={classes.groupLabelCheck}>
                            <Box>
                                <Box><Typography variant="h5">{t("ProForm.FormPersonalDetails.groupCheckBox_1.title")}</Typography></Box>
                                <Box className={classes.groupCheckBoxes}>
                                    <Box className={classes.classCheckBox}>
                                        <FormControlLabel
                                            control={<Checkbox onClick={handleChange} name="fr" color="primary" checked={values.fr} className={classes.root} />}
                                            label={t("ProForm.FormPersonalDetails.groupCheckBox_1.checkBoxLabel1")}
                                        />
                                    </Box>
                                    <Box className={classes.classCheckBox}>
                                        <FormControlLabel
                                            control={<Checkbox onClick={handleChange} name="en" color="primary" checked={values.en} className={classes.root} />}
                                            label={t("ProForm.FormPersonalDetails.groupCheckBox_1.checkBoxLabel2")}
                                        />
                                    </Box>

{/* 
                                    <Box className={classes.classCheckBox}>
                                        <FormControlLabel
                                            control={<Checkbox onClick={handleChange} name="es" color="primary" checked={values.es} className={classes.root} />}
                                            label={t("ProForm.FormPersonalDetails.groupCheckBox_1.checkBoxLabel3")}
                                        />
                                    </Box>
                                    <Box className={classes.classCheckBox}>
                                        <FormControlLabel
                                            control={<Checkbox onClick={handleChange} name="ar" color="primary" checked={values.ar} className={classes.root} />}
                                            label={t("ProForm.FormPersonalDetails.groupCheckBox_1.checkBoxLabel5")}
                                        />
                                    </Box>
                                    <Box className={classes.classCheckBox}>
                                        <FormControlLabel
                                            control={<Checkbox onClick={handleChange} name="po" color="primary" checked={values.po} className={classes.root} />}
                                            label={t("ProForm.FormPersonalDetails.groupCheckBox_1.checkBoxLabel4")}
                                        />
                                    </Box>
 */}

                                </Box>
                            </Box>
                            {(formErrors.step1.spokenLanguages.length > 0 && values.validate === 1) && (
                                <span className={classes.errorMessage}>{t("ProForm.validations.languages")}</span>
                            )}


                        </Box>

                        <Box className={classes.groupLabelCheck}>
                            <Box><Typography variant="h5">{t("ProForm.FormPersonalDetails.groupCheckBox_2.title")}</Typography></Box>

                            <RadioGroup row aria-label="gender" name="authorization" value={values.authorization} onChange={handleChange}>
                                <FormControlLabel labelPlacement="end" value="1" control={<Radio color="primary" />} label={t("ProForm.FormPersonalDetails.groupCheckBox_2.checkBoxLabel1")} />
                                <FormControlLabel labelPlacement="end" value="0" control={<Radio color="primary" />} label={t("ProForm.FormPersonalDetails.groupCheckBox_2.checkBoxLabel2")} />
                            </RadioGroup>

                        </Box>

                        <Box className={classes.groupLabelCheck} style={{marginTop: '-15px'}}>
                            <Box><Typography variant="h5">{t("ProForm.FormPersonalDetails.groupCheckBox_3.title")}</Typography></Box>
                            <Box>{t("ProForm.FormPersonalDetails.groupCheckBox_3.desctiption")}</Box>

                            <RadioGroup row aria-label="gender" name="criminal" value={values.criminal} onChange={handleChange}>
                                <FormControlLabel labelPlacement="end" value="1" control={<Radio color="primary" />} label={t("ProForm.FormPersonalDetails.groupCheckBox_2.checkBoxLabel1")} />
                                <FormControlLabel labelPlacement="end" value="0" control={<Radio color="primary" />} label={t("ProForm.FormPersonalDetails.groupCheckBox_2.checkBoxLabel2")} />
                            </RadioGroup>

                        </Box>
                        <Box className={classes.sectionImg}>
                            <img src="images/prepose-menage.svg" alt="" />
                        </Box>
                    </Grid>
                </Grid>
                <Box>
                    {(values.emailAndPhoneExist === 1) && (
                            <span className={classes.errorMessage}><Typography variant="h4">{t("ProForm.validations.cellPhoneLabelError")}</Typography></span>
                        )}
                    <Box className={classes.buttonBlue}>
                        <ButtonBlue onClick={this.continue} label={ t("ProForm.FormPersonalDetails.button") } />
                    </Box>
                </Box>

            </React.Fragment>
        )
    }
}

export default compose(
    withStyles(styles),
    withTranslation()
)(FormPersonalDetails);