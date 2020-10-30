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

const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
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
        let month = today.getMonth()+1;
        let day = today.getDate();
        let formDate =year+"-"+month+"-"+day;

        //console.log(fecha);
        this.state = {
            step: 1,
            firstName: '',
            lastName: '',
            birthDay: '1',
            birthMonth: '1',
            birthYear: '1980',
            telephone: '',
            email: '',
            en: false,
            fr: false,
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
            preview:'',
            numberSpokenLanguages: 0,
            numberIntegrationPlatform: 0,
            validate: 0,
            formErrors: {
                step1: {
                    firstName: 'First Name is required',
                    lastName: 'Last Name is required',
                    email: 'The email is required',
                    spokenLanguages: "Choose at least one language.",
                    telephone: 'The Telephone is required.',
                },
                step2: {
                    referFirstName1: 'The First Name is required',
                    referLastName1: 'The Last Name is required',
                    referEmail1: 'The Emial is required',
                    referTelephone1: 'The Telephone is required',
                    referCompany1: 'The Company is required',
                    referPosition1: 'The Position is required',
                    referDepartureDate1: '',
                    integrationPlatform: 'Choose at least one option',
                    how_know_us: ''
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
            emailAndPhoneExist: 0,
            emailAndPhoneMessage: "The email and number phone are already exist."
        }
    }

    componentWillMount(){
        this.howKnowUsAPI();
    }


    howKnowUsAPI = async () => {
        //console.log(this.props.i18n.language);
        const lang = this.props.i18n.language
        await axios.get(`https://www.api-tiggidoo.com/api/howknowus/${lang}`)
        .then(res => {
 
            this.setState({
                how_know_us_list: res.data.data
            })
        }).catch((error) => {
            console.log(error)
        })
    }
    //Go to next step 

    validateMailAndNextStep = (emailAndPhoneExist) => {
        if(emailAndPhoneExist === 1){
            this.setState({
                emailAndPhoneExist: 1,
                emailAndPhoneMessage: "The email and number phone are already exist."
            })
        }else{
            this.setState({
                emailAndPhoneExist: 0,
                emailAndPhoneMessage: ""
            })
            this.nextStep();
        }
     
    }

    nextStep = () => {

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
                validate: 0

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
                    case 'email':
                        formErrors.step1.email =
                            emailRegex.test(value)
                                ? ""
                                : "Invalid email address.";
//                        console.log();
                        //
                        break;
                    case 'telephone':
                        let ex = value.replace('(', '');
                        ex = ex.replace(')', '');
                        ex = ex.replace('-', '');
                        ex = ex.replace(' ', '');
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
                        let ter = value.replace('(', '');
                        ter = ter.replace(')', '');
                        ter = ter.replace('-', '');
                        ter = ter.replace(' ', '');
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
                break;
        }

    }

    setImage2 = (e) => {

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
            workExtra, extraIncome, visibility, concept, how_know_us, how_know_us_list, smartphoneWithData, health,
            healthDescription, files, preview, validate, formErrors, formErrorsNoValidaton, emailAndPhoneExist, emailAndPhoneMessage
        } = this.state;

        const values = {
            firstName, lastName, birthDay, birthMonth, birthYear, date_of_birth, telephone,
            email, en, fr, es, po, ar, authorization, criminal, experience,
            referFirstName1, referLastName1, referEmail1, referTelephone1, referCompany1,
            referPosition1, referDepartureDate1, referFirstName2, referLastName2, referEmail2,
            referTelephone2, referCompany2, referPosition2, referDepartureDate2, workRegurary,
            workExtra, extraIncome, visibility, concept, how_know_us, how_know_us_list, smartphoneWithData, health,
            healthDescription, files, preview, validate, formErrors, formErrorsNoValidaton, emailAndPhoneExist, emailAndPhoneMessage
        };
        //console.log("esto es una pruebA");
        
        switch (step) {
            case 1:
                return (
                    <FormPersonalDetails
                        validateMailAndNextStep={this.validateMailAndNextStep}
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />

                );
            case 2:
                return (
                    <FormPersonalBackground
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
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
                    />
                );
            case 4:
                return (<Confirm
                    firstName={values.firstName}
                />);
            default:
                throw new Error("Unknown step");
        }
    }

    render() {
        const { classes } = this.props;
        
        return (
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <React.Fragment>
                        {this.getStepContent()}
                    </React.Fragment>
                </Paper>
            </main>
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

export default compose(
    connect(null, mapDispathcToProps),
    withStyles(styles),
    withTranslation()
)(ProForm);
