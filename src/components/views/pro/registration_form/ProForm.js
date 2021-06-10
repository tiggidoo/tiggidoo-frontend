import React, { Component } from 'react'
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import FormPersonalDetails from './FormPersonalDetails';
import FormPersonalBackground from './FormPersonalBackground';
import FormAdditionalInformation from './FormAdditionalInformation';
import Confirm from './Confirm';
//import Success from './Success';
import axios from 'axios';
import { withTranslation } from "react-i18next";

//REDUX FUNCTIONS
import { compose } from "redux"; /* bindActionCreators */
import { connect } from 'react-redux';
import { registrationAction } from '../../../../store/actions/registrationAction';
import HeaderRP from '../../../layout/HeaderRP';
import FooterRP from '../../../layout/FooterRP';
import { Box } from '@material-ui/core';
//import deletePhoneMask from '../../../../share/librery/librery'

//import { lookupViaCity, findFromCityStateProvince } from 'city-timezones'

const emailRegex = RegExp(
    /^[ ]*([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})[ ]*$/i
);

const formValid = (formErrors) => {

    let valid = true;
    Object.values(formErrors).forEach(val => {
        if (val.length > 0) {
            valid = false;
        }
    });

    return valid;
};

class ProForm extends Component {

    constructor(props) {
        super(props);
        /* This portions of lines orgenize the date with "2020-09-30" */

        let today = new Date();
        let year = today.getFullYear();
        let month = today.getMonth() + 1;
        month = (month < 10) ? "0" + month : month;
        let day = (today.getDate() < 10) ? "0" + today.getDate() : today.getDate();
        let formDate = year + "-" + month + "-" + day;

        this.state = {
            step: 1,
            lang: '',
            firstName: '',
            lastName: '',
            birthDay: '1',
            birthMonth: '1',
            birthYear: '1980',
            telephone: '',
            telephoneDialCode: '',
            email: '',
            en: false,
            fr: true,
            es: false,
            po: false,
            ar: false,
            authorization: '0',
            criminal: '0',
            experience: "0",
            referFirstName1: '',
            referLastName1: '',
            referEmail1: '',
            referTelephone1: '',
            referTelephone1DialCode: '',
            referTelephone2DialCode: '',
            referCompany1: '',
            referPosition1: '',
            referDepartureDate1: formDate,
            referFirstName2: '',
            referLastName2: '',
            referEmail2: '',
            referTelephone2: '',
            referCompany2: '',
            referPosition2: '',
            referDepartureDate2: formDate,
            workRegurary: false,
            workExtra: false,
            extraIncome: false,
            visibility: false,
            concept: false,
            how_know_us: '2',
            smartphoneWithData: '0',
            health: '0',
            healthDescription: '',
            files: [],
            preview: '',
            numberSpokenLanguages: 1,
            numberIntegrationPlatform: 0,
            numStreet: '',
            street: '',
            streetNumber: '',
            streetName: '',
            city: '',
            province: '',
            country: '',
            lat:'',
            lng:'',
            postCode: '',
            timezone:'',
            countryShortName:'',
            validate: 0,
            formErrors: {
                step1: {
                    firstName: 'First Name is required',
                    lastName: 'Last Name is required',
                    email: 'The email is required',
                    spokenLanguages: "",
                    telephone: 'Phone number is required.',
                    street: "The street is required",
                    city: "The city is required",
                    province: "The privince is required",
                    country: "The country is required",
                    postCode: "The post code is required"
                },
                step2: {
                    referFirstName1: 'The First Name is required',
                    referLastName1: 'The Last Name is required',
                    referEmail1: 'The Emial is required',
                    referTelephone1: 'Phone number is required',
                    referCompany1: 'The Company is required',
                    referPosition1: 'The Position is required',
                    referDepartureDate1: '',
                    integrationPlatform: 'Choose at least one option',
                    how_know_us: '',
                    servicesChosen: "The service is required"
                },
                step3: {
                    files: "An Image is required."
                }
            },
            formErrorsNoValidaton: {
                step2: {
                    referEmail2: '',
                    referTelephone2: ''
                }
            },
            how_know_us_list: null,
            servicesChosen: [],
            servicesList: [],
            emailAndPhoneExist: 0,
            emailAndPhoneMessage: "The email and number phone are already exist.",
            selectedTimezone: ''
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.howKnowUsAPI();
    }

    howKnowUsAPI = async () => {
        const lang = this.props.i18n.language

        console.log('este es el idioma: ', lang);

        await axios.get(`https://www.api-tiggidoo.com/api/howknowus/${lang}`)
        .then(res => {
            this.setState({
                how_know_us_list: res.data.data
            })
        })
        .then(res => {

            axios.get(`https://www.api-tiggidoo.com/api/services/all`)
            .then(data => {
                const res = data.data;

                let ser =  []                    
                if(data.status === 200){

                    for(let index in res){                        
                        if(index !== 'id'){
                            ser[res[index].id] =  lang === 'fr' ? res[index].fr : res[index].en
                        }
                    }
                }

                this.setState({
                    servicesList: ser
                })
                
            }).catch((e) => {
                console.log(e)
            })

        })
        .catch((error) => {
            console.log(error)
        })
    }

    validateMailAndNextStep = (emailAndPhoneExist) => {
        if (emailAndPhoneExist === 1) {
            this.setState({
                emailAndPhoneExist: 1,
                emailAndPhoneMessage: "The email and number phone are already exist."
            })
        } else {
            this.setState({
                emailAndPhoneExist: 0,
                emailAndPhoneMessage: ""
            })
            this.nextStep();
        }

    }

    nextStep = () => {

        const lang = this.props.i18n.language;
        const { step } = this.state;
        let formErrors = {};

        switch (step) {
            case 1:
                formErrors = this.state.formErrors.step1;
                break;
            case 2:
                formErrors = this.state.formErrors.step2;
                break;
            case 3:
                formErrors = this.state.formErrors.step3;
                break;
            default:
                break;
        }
        // && emailAndPhoneExist === 0
        if (formValid(formErrors)) {

            this.setState({
                step: step + 1,
                validate: 0,
                lang: lang
            });
        } else {
            this.setState({
                validate: 1
            })
        }
    }

    //Go back 
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    addRegistration = e => {
        this.props.registrationAction(this.state);
    }

    handleAddressGoogleApi = address => {

        console.log('PortView:1 ', address.geometry)
        console.log('Lat: ', address.geometry.location.lat())
        console.log('Lng: ', address.geometry.location.lng())
        //console.log('La:  ', address.geometry.viewport.La)
        //console.log('Ua:  ', address.geometry.viewport.Ua)

        const formErrors = this.state.formErrors;
        const arrayAddress = address.address_components;

        let streetNumber = '';
        let streetName = '';
        let city = '';
        let province = '';
        let country = '';
        let postCode = '';
        let country_short_name = '';
        let lat = address.geometry.location.lat();
        let lng = address.geometry.location.lng();

        for (let index in arrayAddress) {

            switch (arrayAddress[index].types[0]) {
                case 'street_number':
                    streetNumber = arrayAddress[index].long_name
                    formErrors.step1.steet = '';
                    break;
                case 'route':
                    streetName = arrayAddress[index].long_name
                    formErrors.step1.street = '';
                    break;
                case 'locality':
                    city = arrayAddress[index].long_name
                    formErrors.step1.city = '';
                    break;
                case 'political':
                    city = arrayAddress[index].long_name
                    formErrors.step1.city = '';
                    break;
                    case 'administrative_area_level_1':
                    province = arrayAddress[index].long_name
                    formErrors.step1.province = '';
                    break;
                case 'country':
                    country = arrayAddress[index].long_name
                    country_short_name = arrayAddress[index].short_name
                    formErrors.step1.country = '';
                    break;
                case 'postal_code':
                    postCode = arrayAddress[index].long_name
                    formErrors.step1.postCode = '';
                    break;

                default:
                    break;
            }

        }
        
        if(province.length === 0){
            province = city;
            formErrors.step1.province = '';
        }
        
        if(city.length === 0){
            city = province;
            formErrors.step1.city = '';
        }

        const resolvedOptions = Intl.DateTimeFormat().resolvedOptions()
        let timezone = resolvedOptions.timeZone;
        
        // let coor = lookupViaCity(city);
        // if(coor.length > 0){
        //     timezone = coor[0].timezone
        // }else{
        //     coor = findFromCityStateProvince(province);
        //     if(coor.length > 0){
        //         timezone = coor[0].timezone
        //     }
        // }

        if(postCode.length === 0){
            postCode = '000000';
            formErrors.step1.postCode = '';
        }
        //Vingelodden 6, Copenhagen Municipality, Denmark
        this.setState({
            streetNumber: streetNumber,
            streetName: streetName,
            city: city,
            province: province,
            country: country,
            lat:lat,
            lng:lng,
            postCode: postCode,
            countryShortName: country_short_name,
            timezone: timezone.trim(),
        });
    }

    handleChangePhone = (e, formattedValue, country, telValue, name) => {

        const value = e.target.value;
        if(value !== undefined){
            
            let ex = telValue.length - country.dialCode.length;
            const formErrors = this.state.formErrors;

            switch (name) {
                case "telephone":
                    formErrors.step1.telephone =
                        ex < 9 ? "The phone must have a minimum of 10 digits" : ""; 
                    this.setState({
                        telephone: value,
                        telephoneDialCode: country.dialCode
                    });
                    break;
                case "referTelephone1":
                    formErrors.step2.referTelephone1 =
                        ex < 9 ? "The phone must have a minimum of 10 digits" : "";
                        this.setState({
                            referTelephone1: value,
                            referTelephone1DialCode: country.dialCode
                        });
                    break;
                case "referTelephone2":
                    formErrors.step2.referTelephone2 =
                        ex < 9 ? "The phone must have a minimum of 10 digits" : "";
                        this.setState({
                            referTelephone2: value,
                            referTelephone2DialCode: country.dialCode
                        });
                    break;

                default:
                    break;
            }        
        }
    }

    handleChange = (e) => {
        const formErrors = this.state.formErrors;
        const formErrorsNoValidaton = this.state.formErrorsNoValidaton;
        switch (e.target.type) {

            case "date":
            case "text":
            case "select-one":
            case "radio":

                e.preventDefault();
                this.setState({
                    [e.target.name]: e.target.value,
                });

                let value = e.target.value;

                switch (e.target.name) {
                    case 'firstName':
                        formErrors.step1.firstName = value.length === 0 ? "The First Name is required" : "";
                        break;
                    case 'lastName':
                        formErrors.step1.lastName = value.length === 0 ? "The Last Name is required" : "";
                        break;
                    case 'street':
                        formErrors.step1.street = value.length === 0 ? "The Steet is required" : "";
                        break;
                    case 'email':
                        formErrors.step1.email =
                            emailRegex.test(value)
                                ? ""
                                : "Invalid email address.";
                        break;
                    case 'telephone':
                        let ex = value.replace('(', '');
                        ex = ex.replace(')', '');
                        ex = ex.replace('-', '');
                        ex = ex.replace(' ', '');
                        ex = ex.replace(/\s+/g, '');
                        ex = ex.trim();
                        formErrors.step1.telephone =
                            ex.length < 10 ? "The phone must have a minimum of 10 digits" : "";
                        break;
                    case 'referFirstName1':
                        formErrors.step2.referFirstName1 = value.length === 0 ? "The First Name is required" : "";
                        break;
                    case 'referLastName1':
                        formErrors.step2.referLastName1 = value.length === 0 ? "The Last Name is required" : "";
                        break;
                    case 'referEmail1':
                        formErrors.step2.referEmail1 =
                            emailRegex.test(value)
                                ? ""
                                : "Invalid email address.";
                        break;
                    case 'referTelephone1':
                        if (value.length === 1) {
                            value = '(' + value;
                        }

                        let ter = value.replace('(', '');
                        ter = ter.replace(')', '');
                        ter = ter.replace('-', '');
                        ter = ter.replace(' ', '');
                        ter = ter.replace(/\s+/g, '');
                        ter = ter.trim();
                        formErrors.step2.referTelephone1 =
                            ter.length < 10 ? "The phone must have a minimum of 10 digits" : "";
                        break;
                    case 'referCompany1':
                        formErrors.step2.referCompany1 = value.length === 0 ? "The Company is required" : "";
                        break;
                    case 'referPosition1':
                        formErrors.step2.referPosition1 = value.length === 0 ? "The Position is required" : "";
                        break;
                    case 'referDepartureDate1':
                        formErrors.step2.referDepartureDate1 = value.length === 0 ? "The End Date is required" : "";
                        break;


                    case 'referEmail2':
                        formErrorsNoValidaton.step2.referEmail2 =
                            emailRegex.test(value)
                                ? ""
                                : "Invalid email address.";
                        break;
                    case 'referTelephone2':
                        let tel = value.replace('(', '');
                        tel = tel.replace(')', '');
                        tel = tel.replace('-', '');
                        tel = tel.replace(' ', '');
                        tel = tel.replace(/\s+/g, '');
                        tel = tel.trim();
                        formErrorsNoValidaton.step2.referTelephone2 =
                            tel.length < 10 ? "The phone must have a minimum of 10 digits" : "";
                        break;


                    case 'how_know_us':
                        formErrors.step2.how_know_us = value.length === 0 ? "Choose one" : "";
                        break;
                    default:
                        break;
                }
                break;

            case "checkbox":
                //const formErrors = this.state.formErrors;
                let canitdad = 0;
                this.setState({
                    ...this.state,
                    [e.target.name]: e.target.checked,
                });

                switch (e.target.name) {
                    case 'es':
                    case 'fr':
                    case 'en':
                    case 'po':
                    case 'ar':
                        canitdad = this.state.numberSpokenLanguages;
                        if (e.target.checked) {
                            canitdad++;
                            this.setState({
                                numberSpokenLanguages: canitdad
                            });
                        } else {
                            canitdad--;
                            this.setState({
                                numberSpokenLanguages: canitdad
                            });
                        }
                        formErrors.step1.spokenLanguages = canitdad === 0 ? "Choose at least one language." : "";
                        break;
                    case 'workRegurary':
                    case 'workExtra':
                    case 'extraIncome':
                    case 'visibility':
                    case 'concept':

                        canitdad = this.state.numberIntegrationPlatform;
                        if (e.target.checked) {
                            canitdad++;
                            this.setState({
                                numberIntegrationPlatform: canitdad
                            });
                        } else {
                            canitdad--;
                            this.setState({
                                numberIntegrationPlatform: canitdad
                            });
                        }
                        formErrors.step2.integrationPlatform = canitdad === 0 ? "Choose at least one language." : "";

                        break;
                    default:
                        break;
                }

                break;

            default:
                if(e.target.name === 'servicesChosen'){
                    this.setState({
                        [e.target.name]: e.target.value,
                    });
                    formErrors.step2.servicesChosen = e.target.value.length === 0 ? "The service is required" : "";
                }
                break;
        }

    }

    setImages = (e) => {
        const formErrors = this.state.formErrors.step3;
        this.setState({
            [e.target.name]: e.target.files,
            preview: URL.createObjectURL(e.target.files[0]),
        })
        formErrors.files = "";
    }

    getStepContent = () => {

        const { step } = this.state;
        const { firstName, lastName, birthDay, birthMonth, birthYear, date_of_birth, telephone,
            email, en, fr, es, po, ar, authorization, criminal, experience,
            referFirstName1, referLastName1, referEmail1, referTelephone1, referCompany1,
            referPosition1, referDepartureDate1, referFirstName2, referLastName2, referEmail2,
            referTelephone2, referCompany2, referPosition2, referDepartureDate2, workRegurary,
            workExtra, extraIncome, visibility, concept, how_know_us, how_know_us_list, servicesChosen, 
            servicesList, smartphoneWithData, health,
            healthDescription, files, preview, validate, formErrors, formErrorsNoValidaton, emailAndPhoneExist, emailAndPhoneMessage,
            streetNumber, streetName, city, province, country, postCode, selectedTimezone, countryShortName } = this.state;

        const values = {
            firstName, lastName, birthDay, birthMonth, birthYear, date_of_birth, telephone,
            email, en, fr, es, po, ar, authorization, criminal, experience,
            referFirstName1, referLastName1, referEmail1, referTelephone1, referCompany1,
            referPosition1, referDepartureDate1, referFirstName2, referLastName2, referEmail2,
            referTelephone2, referCompany2, referPosition2, referDepartureDate2, workRegurary,
            workExtra, extraIncome, visibility, concept, how_know_us, how_know_us_list, servicesChosen, 
            servicesList, smartphoneWithData, health,
            healthDescription, files, preview, validate, formErrors, formErrorsNoValidaton, emailAndPhoneExist, emailAndPhoneMessage,
            streetNumber, streetName, city, province, country, postCode, selectedTimezone, countryShortName
        };
        //const statusCandidate = this.props.registration.status;
        switch (step) {
            case 1:
                return (
                    <FormPersonalDetails
                        validateMailAndNextStep={this.validateMailAndNextStep}
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        handleChangePhone={this.handleChangePhone}
                        handleAddressGoogleApi={this.handleAddressGoogleApi}
                        values={values}
                    />

                );
            case 2:
                return (
                    <FormPersonalBackground
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        handleChangePhone={this.handleChangePhone}
                        values={values}
                    />
                );
            case 3:
                return (
                    <FormAdditionalInformation
                        addRegistration={this.addRegistration}
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        setImages={this.setImages}
                        values={values}
                        statusCandidate={0}
                    />
                );
            case 4:
                //if(statusCandidate === 200){
                return (<Confirm
                    firstName={values.firstName}
                />);
            // }else{
            //      return(<CircularStatic />);
            //}

            default:
                throw new Error("Unknown step");
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <Box>
                <HeaderRP />
                    <main className={classes.layout}>
                        <Paper className={classes.paper}>
                            <React.Fragment>
                                {this.getStepContent()}
                            </React.Fragment>
                        </Paper>
                    </main>
                <FooterRP />
            </Box>
        );

    }
}

const styles = (theme) => ({
    layout: {
        width: "auto",
        marginTop: theme.spacing(20),
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(1530 + theme.spacing(2) * 2)]: {
            width: 1530,
            marginLeft: "auto",
            marginRight: "auto",
        },
        '@media (max-width:1366px)': { 
            marginTop: theme.spacing(15),
        },
        '@media (max-width:768px)': { 
            marginTop: theme.spacing(11),
        }
    },
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(1530 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    },
    stepper: {
        padding: theme.spacing(3, 0, 5),
    },
});

const mapDispathcToProps = (dispatch) => {
    return {
        registrationAction: (reg) => dispatch(registrationAction(reg))
    }
}

const mapStateToProps = (state) => {
    return { registration: state.registration };
};

export default compose(
    connect(mapStateToProps, mapDispathcToProps),
    withStyles(styles),
    withTranslation()
)(ProForm);
