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
        //console.log(val);
        //console.log(val.length);
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
            //date_of_birth: '',
            birthDay: '',
            birthMonth: '',
            birthYear: '',
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
            smartphoneWithData: '0',
            health: '0',
            healthDescription:'',
            file: '',
            fileName:'',
            images:[],
            numberSpokenLanguages: 0,
            numberIntegrationPlatform:0,
            formErrors: {
                step1: {
                    firstName: 'First Name is required',
                    lastName: 'Last Name is required',
                    email: 'The email is required',
                    spokenLanguages: "Choose at least one language.",
                    // birthDay: 'Tha',
                    // birthMonth: '',
                    // birthYear: '',
                    telephone: 'The Telephone is required.',
                    //date_of_birth: '',
                    //birthDay: '',
                    //birthMonth: '',
                    //birthYear: '',
                    //telephone: '',
                    //email: '',
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
                    integrationPlatform: 'Choose at least one option'
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

        if(this.state.step > 1){
        if(formValid(formErrors)){
                this.setState({
                step: step + 1
            });
        }}else{
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


    handleOnBlur = (e) => {
        
        const formErrors = this.state.formErrors;

        switch (e.target.type) {
            case "checkbox":
                
                switch (e.target.name) {
                    case 'es':
                    case 'fr':
                    case 'en':
                    case 'po':
                    case 'ar':
                        console.log("Entro a languages");
                        const { numberSpokenLanguages } = this.state;
                        formErrors.step1.spokenLanguages = numberSpokenLanguages === 0 ? "Choose at least one language." : "";
                
                        break;
                    case 'workRegurary':
                    case 'workExtra':
                    case 'extraIncome':
                    case 'visibility':
                    case 'concept':
                        console.log("entro a platfomrs");
                        const { numberIntegrationPlatform } = this.state;
                        formErrors.step2.integrationPlatform = numberIntegrationPlatform === 0 ? "Choose at least one language." : "";
                
                        break;
                    default:
                        break;
                }

                break;
        
            default:
                break;
        }

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
    
    


                default:
                    break;
            }

            break;

        case "checkbox":
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
                    const { numberSpokenLanguages } = this.state;
                    if(e.type === 'change'){
                        if(e.currentTarget.checked){
                            this.setState({
                                numberSpokenLanguages: numberSpokenLanguages + 1
                            });
                        }else{
                            this.setState({
                                numberSpokenLanguages: numberSpokenLanguages - 1
                            });
                        }
                    }
                    break;
                case 'workRegurary':
                case 'workExtra':
                case 'extraIncome':
                case 'visibility':
                case 'concept':
                    const { numberIntegrationPlatform } = this.state;
                    if(e.type === 'change'){
                        if(e.currentTarget.checked){
                            this.setState({
                                numberIntegrationPlatform: numberIntegrationPlatform + 1
                            });
                        }else{
                            this.setState({
                                numberIntegrationPlatform: numberIntegrationPlatform - 1
                            });
                        }
                    }
                    break;
                default:
                    break;
            }

            break;
        default:
            break;
        }
        //console.log(this.state);
      
    }

    setImages = (e) => {
        e.preventDefault();
        //console.log(e.target.files[0].name);
        let self = this; // unsure if this is needed
        self.setState({ images: [] }); // empty out current images array
        const imageFiles = e.target.files; // document.getElementById("image"); // You may want to avoid querying the dom yourself, try and rely on react as much as possible
        const filesLength = imageFiles.length; // imageFiles.files.length;
        // const temp = null;

        for(var i = 0; i < filesLength; i++) {
            let reader = new FileReader();
            let file = imageFiles[i];
            console.log(file);
            reader.onloadend = () => {
                self.setState({ images: self.state.images.concat(reader.result), fileName: file.name  });
            }

            reader.readAsDataURL(file);
        }
    }

    getStepContent = () => {
        const { step } = this.state;
        const { firstName, lastName, date_of_birth, telephone, 
                email, en, fr, es, po, ar, authorization, criminal, experience,
                referFirstName1, referLastName1, referEmail1, referTelephone1, referCompany1, 
                referPosition1, referDepartureDate1, referFirstName2, referLastName2, referEmail2,
                referTelephone2, referCompany2, referPosition2, referDepartureDate2, workRegurary,
                workExtra, extraIncome, visibility, concept, smartphoneWithData, health, 
                healthDescription, file, images,fileName, formErrors
            } = this.state;

        const values = { firstName, lastName, date_of_birth, telephone, 
                email, en, fr, es, po, ar, authorization, criminal, experience,
                referFirstName1, referLastName1, referEmail1, referTelephone1, referCompany1, 
                referPosition1, referDepartureDate1, referFirstName2, referLastName2, referEmail2,
                referTelephone2, referCompany2, referPosition2, referDepartureDate2, workRegurary,
                workExtra, extraIncome, visibility, concept, smartphoneWithData, health, 
                healthDescription, file, images,fileName, formErrors };

        switch (step) {
            case 1:
                return (
                    <FormPersonalDetails
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        handleOnBlur={this.handleOnBlur}
                        values={values}
                    />

                );
            case 2:
                return (
                    <FormPersonalBackground
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        handleOnBlur={this.handleOnBlur}
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
                return (<Confirm />);
            default:
                throw new Error("Unknown step");
        }
    }
      
    render() {
        console.log("principal");
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
