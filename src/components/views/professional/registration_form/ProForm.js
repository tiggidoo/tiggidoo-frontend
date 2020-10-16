import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { Box, Button, Checkbox, FormControlLabel, InputLabel } from '@material-ui/core';
import { withTranslation } from "react-i18next";
//import FormControlLabel from '@material-ui/core/FormControlLabel';
//import Checkbox from '@material-ui/core/Checkbox';


class ProForm extends Component {

  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName:'',
      birthDay:'',
      birthMonth:'',
      birthYear:'',
      cellPhone:'',
      email:'',
      chkFrench: false,
      chkEnglish: false,
      chkSpanish: false,
      chkPortuguese: false,
      chkArab: false
    };
  }

  handleChange = (e) => {
    console.log(e.target.type);
    console.log(this.state);
    switch (e.target.type) {
      case 'text':
        this.setState({  
          [e.target.name]: e.target.value 
        });
        break;            
      case 'checkbox':
        this.setState({ 
          ...this.state, 
          [e.target.name]: e.target.checked 
        });
        break;            
      
      default:
        break;
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }
  render(){
    const { t } = this.props;
    return (
      
      <form onSubmit={this.handleSubmit}>
      <React.Fragment>
        <Typography variant="h3" gutterBottom>
          {t("ProForm.title")}
        </Typography>
        
        <p>
          { t("ProForm.description") }
        </p>

        <Grid container spacing={3}>
          <Grid item sm={6}>
              
            <InputLabel shrink htmlFor="bootstrap-input">
              { t("ProForm.firstNameLabel") }
            </InputLabel>
            <TextField
              
              id="firstName"
              name="firstName"
              placeholder={ t("ProForm.firstNameLabel") }
              autoComplete="given-name"
              variant="outlined"
              onChange={this.handleChange}
              
            />

            <InputLabel shrink htmlFor="bootstrap-input">
              { t("ProForm.lastNameLabel") }
            </InputLabel>
            <TextField

              id="lastName"
              name="lastName"
              placeholder={ t("ProForm.lastNameInput") }
              autoComplete="given-name"
              variant="outlined"
              onChange={this.handleChange}
            />

            <InputLabel shrink htmlFor="bootstrap-input">
              { t("ProForm.birthDayLabel") }
            </InputLabel>
            
            <Box component="span">
              <TextField 
                id="birthDay"
                name="birthDay"
                autoComplete="given-name"
                variant="outlined"
                onChange={this.handleChange}
              />
              <TextField 

                id="birthMonth"
                name="birthMonth"
                autoComplete="given-name"
                variant="outlined"
                onChange={this.handleChange}
              />
              <TextField 

                id="birthYear"
                name="birthYear"
                autoComplete="given-name"
                variant="outlined"
                onChange={this.handleChange}

              />
            </Box>

            <InputLabel shrink htmlFor="bootstrap-input">
              { t("ProForm.cellPhoneLabel") }
            </InputLabel>
            <TextField

              id="cellPhone"
              name="cellPhone"
              placeholder={ t("ProForm.cellPhoneLabel") }
              autoComplete="given-name"
              variant="outlined"
              onChange={this.handleChange}
            />

            <InputLabel shrink htmlFor="bootstrap-input">
              { t("ProForm.emaillLabel") }
            </InputLabel>
            <TextField

              id="email"
              name="email"
              placeholder={ t("ProForm.emaillLabel") }
              autoComplete="given-name"
              variant="outlined"
              onChange={this.handleChange}

            />

          </Grid>

          <Grid item sm={6}>

            <InputLabel shrink htmlFor="bootstrap-input">
              { t("ProForm.groupCheckBox_1.title") }
            </InputLabel>

            <FormControlLabel
              control={<Checkbox onChange={this.handleChange} name="chkFrench" color="primary" />}
              label={ t("ProForm.groupCheckBox_1.checkBoxLabel1") }
            />

            <FormControlLabel
              control={<Checkbox onChange={this.handleChange} name="chkEnglish" color="primary" />}
              label={ t("ProForm.groupCheckBox_1.checkBoxLabel2") }
            />

            <FormControlLabel
              control={<Checkbox onChange={this.handleChange} name="chkSpanish" color="primary" />}
              label={ t("ProForm.groupCheckBox_1.checkBoxLabel3") }
            />

            <FormControlLabel
              control={<Checkbox onChange={this.handleChange} name="chkPortuguese" color="primary" />}
              label={ t("ProForm.groupCheckBox_1.checkBoxLabel4") }
            />

            <FormControlLabel
              control={<Checkbox onChange={this.handleChange} name="chkArab" color="primary" />}
              label={ t("ProForm.groupCheckBox_1.checkBoxLabel5") }
            />

            <InputLabel shrink htmlFor="bootstrap-input">
              { t("ProForm.groupCheckBox_2.title") }
            </InputLabel>


          </Grid>

        </Grid>
        
      </React.Fragment>
      
      <Button type="submit" variant="outlined" color="primary">
            Check Answer
          </Button>
      </form>
      
    );
  }
}

export default withTranslation()(ProForm);