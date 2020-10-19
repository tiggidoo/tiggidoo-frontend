import React, { Component } from 'react'
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
//import TextField from "@material-ui/core/TextField";
import { Box, Checkbox, FormControlLabel, NativeSelect, RadioGroup, Radio } from "@material-ui/core";
import InputBase from '@material-ui/core/InputBase';
import ButtonBlue from '../../../share/buttons/ButtonBlue';
import Input from '../../../share/inputs/Input';

//import { makeStyles } from '@material-ui/core/styles';
import { withTranslation } from "react-i18next";

//STYLES
import { withStyles } from "@material-ui/core/styles";
//REDUX FUNCTIONS
import { compose } from "redux";

const styles = (theme) => ({
    groupLabelInput: {
        height: "75px",
        marginBottom: '56px',
    },
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
    },
}))(InputBase);

class FormPersonalDetails extends Component {

    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { t } = this.props;
        const { classes } = this.props;
        const { values, handleChange } = this.props;
        return (

            <React.Fragment>
                <Box mb={2}>
                    <Typography variant="h1">{t("ProForm.FormPersonalDetails.title")}</Typography>
                </Box>
                <Box mb={8}>
                    <Typography variant="h4">{t("ProForm.FormPersonalDetails.description1")}</Typography>
                    <Typography variant="h4">{t("ProForm.FormPersonalDetails.description2")}</Typography>
                </Box>

                <Grid container spacing={3}>
                    <Grid item sm={6}>
                        <Box className={classes.groupLabelInput}>
                            <Box mb={1}>{t("ProForm.FormPersonalDetails.firstNameLabel")}</Box>
                            <Input id="firstName" label={t("ProForm.FormPersonalDetails.firstNameLabel")} size="small" onChange={handleChange} defaultValue={values.firstName} />
                        </Box>

                        <Box className={classes.groupLabelInput}>
                            <Box mb={1}>{t("ProForm.FormPersonalDetails.lastNameLabel")}</Box>
                            <Input id="lastName" label={t("ProForm.FormPersonalDetails.lastNameInput")} size="small" onChange={handleChange} defaultValue={values.lastName} />
                        </Box>

                        <Box className={classes.groupLabelInput}>
                            <Box mb={1}>{t("ProForm.FormPersonalDetails.birthDayLabel")}</Box>
                            <Box display="flex">

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
                                        <option value={5}>Mars</option>
                                        <option value={6}>Juin</option>
                                        <option value={7}>July</option>
                                        <option value={8}>Auguest</option>
                                        <option value={9}>Septembre</option>
                                        <option value={10}>October</option>
                                        <option value={11}>Novembre</option>
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
                                        <option value={1}>1</option>
                                        <option value={2}>2</option>
                                        <option value={3}>3</option>
                                    </NativeSelect>
                                </Box>

                                <Box mr={2}>
                                    <NativeSelect
                                        id="birthYear"
                                        name="birthYear"
                                        value={values.birthYear}
                                        onChange={handleChange}
                                        input={<BootstrapInput />}
                                    >
                                        <option value={1968}>1968</option>
                                        <option value={1969}>1969</option>
                                        <option value={1970}>1970</option>
                                    </NativeSelect>
                                </Box>
                            </Box>
                        </Box>

                        <Box className={classes.groupLabelInput}>
                            <Box mb={1}>{t("ProForm.FormPersonalDetails.cellPhoneLabel")}</Box>
                            <Input id="telephone" label={t("ProForm.FormPersonalDetails.cellPhoneLabel")} size="small" onChange={handleChange} defaultValue={values.telephone} />
                        </Box>

                        <Box className={classes.groupLabelInput}>
                        <Box mb={1}>{t("ProForm.FormPersonalDetails.emaillLabel")}</Box>
                            <Input id="email" label={t("ProForm.FormPersonalDetails.emaillLabel")} size="small" onChange={handleChange} defaultValue={values.email} />
                        </Box>
                    </Grid>

                    <Grid item sm={6}>
                        <Box className={classes.groupLabelInput}>
                            <Box>{t("ProForm.FormPersonalDetails.groupCheckBox_1.title")}</Box>
                            <FormControlLabel
                                control={<Checkbox onChange={handleChange} name="fr" color="primary" checked={ values.fr } />}
                                label={t("ProForm.FormPersonalDetails.groupCheckBox_1.checkBoxLabel1")}
                            />

                            <FormControlLabel
                                control={<Checkbox onChange={handleChange} name="en" color="primary" checked={ values.en } />}
                                label={t("ProForm.FormPersonalDetails.groupCheckBox_1.checkBoxLabel2")}
                            />

                            <FormControlLabel
                                control={<Checkbox onChange={handleChange} name="es" color="primary"  checked={ values.es } />}
                                label={t("ProForm.FormPersonalDetails.groupCheckBox_1.checkBoxLabel3")}
                            />

                            <FormControlLabel
                                control={<Checkbox onChange={handleChange} name="po" color="primary" checked={ values.po } />}
                                label={t("ProForm.FormPersonalDetails.groupCheckBox_1.checkBoxLabel4")}
                            />

                            <FormControlLabel
                                control={<Checkbox onChange={handleChange} name="ar" color="primary" checked={ values.ar } />}
                                label={t("ProForm.FormPersonalDetails.groupCheckBox_1.checkBoxLabel5")}
                            />
                        </Box>

                        <Box className={classes.groupLabelInput}>
                            <Box>{t("ProForm.FormPersonalDetails.groupCheckBox_2.title")}</Box>
                            
                            <RadioGroup row aria-label="gender" name="authorization" value={values.authorization} onChange={handleChange}>
                                <FormControlLabel labelPlacement = "end" value="1" control={<Radio color="primary" />} label={t("ProForm.FormPersonalDetails.groupCheckBox_2.checkBoxLabel1")} />
                                <FormControlLabel labelPlacement = "end" value="0" control={<Radio color="primary" />} label={t("ProForm.FormPersonalDetails.groupCheckBox_2.checkBoxLabel2")} />
                            </RadioGroup>
{/* 
                            <FormControlLabel 
                                control={ <Checkbox onClick={handleChange} id="authorization_yes" name="authorization" value="1" color="primary" /> }
                                label={t("ProForm.FormPersonalDetails.groupCheckBox_2.checkBoxLabel1")}
                            />

                            <FormControlLabel 
                                control={ <Checkbox onClick={handleChange} id="authorization_no" name="authorization" value="0" color="primary" /> }
                                label={t("ProForm.FormPersonalDetails.groupCheckBox_2.checkBoxLabel2")}
                            />
 */}

                        </Box>

                        <Box className={classes.groupLabelInput}>
                            <Box>{t("ProForm.FormPersonalDetails.groupCheckBox_3.title")}</Box>
                            <Box>{t("ProForm.FormPersonalDetails.groupCheckBox_3.desctiption")}</Box>

                            <RadioGroup row aria-label="gender" name="criminal" value={values.criminal} onChange={handleChange}>
                                <FormControlLabel labelPlacement = "end" value="1" control={<Radio color="primary" />} label={t("ProForm.FormPersonalDetails.groupCheckBox_2.checkBoxLabel1")} />
                                <FormControlLabel labelPlacement = "end" value="0" control={<Radio color="primary" />} label={t("ProForm.FormPersonalDetails.groupCheckBox_2.checkBoxLabel2")} />
                            </RadioGroup>

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