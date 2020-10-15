import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { Box, Button, Checkbox, FormControlLabel, InputLabel } from '@material-ui/core';
import { withTranslation } from "react-i18next";
//import FormControlLabel from '@material-ui/core/FormControlLabel';
//import Checkbox from '@material-ui/core/Checkbox';


function ProForm({ t }) {

  const [state, setState] = React.useState({
    chkFrench: true,
    chkEnglish: true,
    chkSpanish: true,
    chkPortuguese: true,
    chkArab: true

  });

  const handleChange = (event) => {
    setState({ 
      ...state, 
      [event.target.name]: event.target.checked 
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
  }

  return (
    
    <form onSubmit={handleSubmit}>
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
            // fullWidth
            autoComplete="given-name"
            variant="outlined"
          />

          <InputLabel shrink htmlFor="bootstrap-input">
            { t("ProForm.lastNameLabel") }
          </InputLabel>
          <TextField
            required
            id="lastName"
            name="lastName"
            placeholder={ t("ProForm.lastNameInput") }
            variant="outlined"
          />

          <InputLabel shrink htmlFor="bootstrap-input">
            { t("ProForm.birthDayLabel") }
          </InputLabel>
          
          <Box component="span">
            <TextField 
              required
              id="birthDay"
              name="birthDay"
              variant="outlined"
            />
            <TextField 
              required
              id="birthMonth"
              name="birthMonth"
              variant="outlined"
            />
            <TextField 
              required
              id="birthYear"
              name="birthYear"
              variant="outlined"
            />
          </Box>

          <InputLabel shrink htmlFor="bootstrap-input">
            { t("ProForm.cellPhoneLabel") }
          </InputLabel>
          <TextField
            required
            id="cellPhone"
            name="cellPhone"
            placeholder={ t("ProForm.cellPhoneLabel") }
            variant="outlined"
          />

          <InputLabel shrink htmlFor="bootstrap-input">
            { t("ProForm.emaillLabel") }
          </InputLabel>
          <TextField
            required
            id="email"
            name="email"
            placeholder={ t("ProForm.emaillLabel") }
            variant="outlined"
          />

        </Grid>

        <Grid item sm={6}>

          <InputLabel shrink htmlFor="bootstrap-input">
            { t("ProForm.groupCheckBox_1.title") }
          </InputLabel>

          <FormControlLabel
            control={<Checkbox onChange={handleChange} name="chkFrench" color="primary" />}
            label={ t("ProForm.groupCheckBox_1.checkBoxLabel1") }
          />

          <FormControlLabel
            control={<Checkbox onChange={handleChange} name="chkEnglish" color="primary" />}
            label={ t("ProForm.groupCheckBox_1.checkBoxLabel2") }
          />

          <FormControlLabel
            control={<Checkbox onChange={handleChange} name="chkSpanish" color="primary" />}
            label={ t("ProForm.groupCheckBox_1.checkBoxLabel3") }
          />

          <FormControlLabel
            control={<Checkbox onChange={handleChange} name="chkPortuguese" color="primary" />}
            label={ t("ProForm.groupCheckBox_1.checkBoxLabel4") }
          />

          <FormControlLabel
            control={<Checkbox onChange={handleChange} name="chkArab" color="primary" />}
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

export default withTranslation()(ProForm);