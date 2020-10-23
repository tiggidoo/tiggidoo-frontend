import React, { Component, useState } from 'react'
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

function ProForm (props) {

    const state = useState({
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
        

    });

    //Go to next step 
    const nextStep = () => {
        const { step } = state;
        console.log(step);
        setState({
            step: step + 1
        });
    }

    //Go back 
    const prevStep = () => {
        const { step } = state;
        setState({
            step: step - 1
        });
    }

    const addRegistration = e => {
        props.registrationAction(state);
        /*
        this.props.dispatch(
            { 
                type: 'CREATE_REGISTER_PRO', 
                payload:  this.state
            }
        );
        */
    }

    //Handle fields changes

    //handleChange = input => e => {
    //this.setState({ [input]: e.target.value });
    const handleChange = (e) => {
        
        switch (e.target.type) {
            case "text":
            case "select-one":
            case "radio":
              setState({
                [e.target.name]: e.target.value,
              });
              break;
            case "checkbox":
              setState({
                ...state,
                [e.target.name]: e.target.checked,
              });
              break;
            default:
              break;
          }
      
    }

    const setImages = (e) => {
        e.preventDefault();
        console.log(e.target.files[0].name);
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

    const getStepContent = () => {
        const { step } = state;
        const { firstName, lastName, date_of_birth, telephone, 
                email, en, fr, es, po, ar, authorization, criminal, experience,
                referFirstName1, referLastName1, referEmail1, referTelephone1, referCompany1, 
                referPosition1, referDepartureDate1, referFirstName2, referLastName2, referEmail2,
                referTelephone2, referCompany2, referPosition2, referDepartureDate2, workRegurary,
                workExtra, extraIncome, visibility, concept, smartphoneWithData, health, 
                healthDescription, file, images,fileName
            } = state;

        const values = { firstName, lastName, date_of_birth, telephone, 
                email, en, fr, es, po, ar, authorization, criminal, experience,
                referFirstName1, referLastName1, referEmail1, referTelephone1, referCompany1, 
                referPosition1, referDepartureDate1, referFirstName2, referLastName2, referEmail2,
                referTelephone2, referCompany2, referPosition2, referDepartureDate2, workRegurary,
                workExtra, extraIncome, visibility, concept, smartphoneWithData, health, 
                healthDescription, file, images,fileName };

        switch (step) {
            case 1:
                return (
                    <FormPersonalDetails
                        nextStep={nextStep}
                        handleChange={handleChange}
                        values={values}
                    />

                );
            case 2:
                return (
                    <FormPersonalBackground
                        nextStep={nextStep}
                        prevStep={prevStep}
                        handleChange={handleChange}
                        values={values}
                    />
                );
            case 3:

                
                return (
                    <FormAdditionalInformation
                        //addRegistration={this.addRegistration}
                        nextStep={nextStep}
                        prevStep={prevStep}
                        handleChange={handleChange}
                        setImages = { setImages }
                        values={values}
                    />
                );
            case 4:
                return (<Confirm />);
            default:
                throw new Error("Unknown step");
        }
    }
      
   
        const { classes } = props;
        return(        
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                <React.Fragment>
                    <form action="{addRegistration}">
                        { getStepContent() }
                    </form>
                </React.Fragment>
                </Paper>
            </main>
        );

    
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
