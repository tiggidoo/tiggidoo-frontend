import React, { Component } from 'react'
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import FormPersonalDetails from './FormPersonalDetails';
import FormPersonalBackground from './FormPersonalBackground';
import FormAdditionalInformation from './FormAdditionalInformation';
import Confirm from './Confirm';
//import Success from './Success';

//REDUX FUNCTIONS
import { compose } from "redux"; /* bindActionCreators */
import { connect } from 'react-redux';
import { registrationAction } from '../../../../store/actions/registrationAction';
/*
const formValid = formErrors => {

    let valid = true;
    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false)
    });
    return valid;
}
*/

const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );

const formValid = (formErrors) => {
    
    let valid = true;
    Object.values(formErrors).forEach(val => {
        if(val.length > 0){
            valid=false;
        }
    });
    return valid;
};

class ProForm extends Component {

    constructor(props){
        super(props);
        
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
            fr:false,
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
            referDepartureDate1: '',
            referFirstName2: '',
            referLastName2: '',
            referEmail2: '',
            referTelephone2: '',
            referCompany2: '',
            referPosition2: '',
            referDepartureDate2: '',
            workRegurary:false,
            workExtra:false,
            extraIncome:false,
            visibility:false,
            concept:false,
            how_know_us:'0',
            smartphoneWithData: '0',
            health: '0',
            healthDescription:'',
            files:[],
            numberSpokenLanguages: 0,
            numberIntegrationPlatform:0,
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
                    referDepartureDate1: 'The Final Date is required',
                    referFirstName2: 'The First Name is required',
                    referLastName2: 'The Last Name is required',
                    referEmail2: 'The Emial is required',
                    referTelephone2: 'The Telephone is required',
                    referCompany2: 'The Company is required',
                    referPosition2: 'The Position is required',
                    referDepartureDate2: 'The Final Date is required',
                    integrationPlatform: 'Choose at least one option',
                    how_know_us: 'Choose one'
                },
                step3: {
                    files: "An Image is required."
                }
            }
        }
    
    }

    //Go to next step 
    nextStep = () => {
        const { step } = this.state;
        let formErrors = {};

        switch (step){
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

        if(formValid(formErrors)){
            this.setState({
                step: step + 1
            });
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
        /*
        this.props.dispatch(
            { 
                type: 'CREATE_REGISTER_PRO', 
                payload:  this.state
            }
        );
        */
    }


    handleChange = (e) => {
        
        const formErrors = this.state.formErrors;
        switch (e.target.type) {

            case "text":
            case "select-one":
            case "radio":
        
                e.preventDefault();
                this.setState({
                    [e.target.name]: e.target.value,
                });
                            
                let value = e.target.value;

                switch (e.target.name){
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
                        formErrors.step2.referTelephone1 = value.length === 0 ? "The Telefone is required" : "";
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
                    case 'referFirstName2':
                        formErrors.step2.referFirstName2 = value.length === 0 ? "The First Name is required" : "";
                        break;
                    case 'referLastName2':
                        formErrors.step2.referLastName2 = value.length === 0 ? "The Last Name is required" : "";
                        break;
                    case 'referEmail2':
                        formErrors.step2.referEmail2 = 
                            emailRegex.test(value)
                                ? ""
                                : "Invalid email address.";
                        break;
                    case 'referTelephone2':
                        formErrors.step2.referTelephone2 = value.length === 0 ? "The Telefone is required" : "";
                        break;
                    case 'referCompany2':
                        formErrors.step2.referCompany2 = value.length === 0 ? "The Company is required" : "";
                        break;
                    case 'referPosition2':
                        formErrors.step2.referPosition2 = value.length === 0 ? "The Position is required" : "";
                        break;
                    case 'referDepartureDate2':
                        formErrors.step2.referDepartureDate2 = value.length === 0 ? "The End Date is required" : "";
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
                        
                        canitdad  = this.state.numberSpokenLanguages;
                        if(e.target.checked){
                            canitdad++;
                            this.setState({
                                numberSpokenLanguages: canitdad
                            });
                        }else{
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

                        canitdad  = this.state.numberIntegrationPlatform;
                        if(e.target.checked){
                            canitdad++;
                            this.setState({
                                numberIntegrationPlatform: canitdad
                            });
                        }else{
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
        })
        formErrors.files= "";
    }

    getStepContent = () => {
        const { step } = this.state;

        const { firstName, lastName, birthDay, birthMonth, birthYear, date_of_birth, telephone, 
                email, en, fr, es, po, ar, authorization, criminal, experience,
                referFirstName1, referLastName1, referEmail1, referTelephone1, referCompany1, 
                referPosition1, referDepartureDate1, referFirstName2, referLastName2, referEmail2,
                referTelephone2, referCompany2, referPosition2, referDepartureDate2, workRegurary,
                workExtra, extraIncome, visibility, concept, how_know_us, smartphoneWithData, health, 
                healthDescription, files, formErrors
            } = this.state;

        const values = { firstName, lastName, birthDay, birthMonth, birthYear, date_of_birth, telephone, 
                email, en, fr, es, po, ar, authorization, criminal, experience,
                referFirstName1, referLastName1, referEmail1, referTelephone1, referCompany1, 
                referPosition1, referDepartureDate1, referFirstName2, referLastName2, referEmail2,
                referTelephone2, referCompany2, referPosition2, referDepartureDate2, workRegurary,
                workExtra, extraIncome, visibility, concept, how_know_us, smartphoneWithData, health, 
                healthDescription, files, formErrors };

        switch (step) {
            case 1:
                return (
                    <FormPersonalDetails
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
                        setImages = { this.setImages }
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
        return(        
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                <React.Fragment>
                    { this.getStepContent() }
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
    return{
        registrationAction: (reg) => dispatch(registrationAction(reg))
    }
}

export default compose(
    connect(null, mapDispathcToProps),
    withStyles(styles),
)(ProForm);
