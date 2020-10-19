import React, { Component } from 'react'
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import FormPersonalDetails from './FormPersonalDetails';
import FormPersonalBackground from './FormPersonalBackground';
import FormAdditionalInformation from './FormAdditionalInformation';
import Confirm from './Confirm';
//import Success from './Success';


class ProForm extends Component {

    state = {
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
        authorization: false,
        criminal: false,

        experience: false,
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


    }

    //Go to next step 
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

    //Go back 
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    //Handle fields changes

    //handleChange = input => e => {
    //this.setState({ [input]: e.target.value });
    handleChange = (e) => {

        switch (e.target.type) {
            case "text":
            case "select-one":
              this.setState({
                [e.target.name]: e.target.value,
              });
              break;
            case "checkbox":
              this.setState({
                ...this.state,
                [e.target.name]: e.target.checked,
              });
              break;
            default:
              break;
          }
      
    }


    

    getStepContent = () => {
        const { step } = this.state;
        const { firstName, lastName, date_of_birth, telephone, 
                email, en, fr, es, po, ar, authorization, criminal, experience,
                referFirstName1, referLastName1, referEmail1, referTelephone1, referCompany1, 
                referPosition1, referDepartureDate1, referFirstName2, referLastName2, referEmail2,
                referTelephone2, referCompany2, referPosition2, referDepartureDate2, workRegurary,
                workExtra, extraIncome, visibility, concept            
            } = this.state;

        const values = { firstName, lastName, date_of_birth, telephone, 
                email, en, fr, es, po, ar, authorization, criminal, experience,
                referFirstName1, referLastName1, referEmail1, referTelephone1, referCompany1, 
                referPosition1, referDepartureDate1, referFirstName2, referLastName2, referEmail2,
                referTelephone2, referCompany2, referPosition2, referDepartureDate2, workRegurary,
                workExtra, extraIncome, visibility, concept };

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
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
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

export default withStyles(styles)(ProForm);