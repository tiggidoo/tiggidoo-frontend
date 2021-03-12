import React, { Component } from 'react'
//import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Box, FormControlLabel, RadioGroup, Radio, Button } from "@material-ui/core";
import ButtonBlue from '../../../../share/buttons/ButtonBlue';
import ButtonIcon from '../../../../share/buttons/ButtonIcon';
import Input from '../../../../share/inputs/Input';
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';

import { withStyles } from "@material-ui/core/styles";

//import { makeStyles } from '@material-ui/core/styles';
import { withTranslation } from "react-i18next";
//REDUX FUNCTIONS
import { compose } from "redux";

class FormAdditionalInformation extends Component {


    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    valRegistration = (e) => {
        e.preventDefault();
        const { values } = this.props;
        const formErrors = values.formErrors;
        if((formErrors.step3.files.length === 0 && values.validate === 0)){
            this.props.addRegistration();
        }
        this.props.nextStep();
    }
    render() {
        const { t } = this.props;
        const { classes } = this.props;
        const { values, handleChange, setImages } = this.props;
        const formErrors = values.formErrors;
        
        return (
            <React.Fragment>
                <Box mb={5}>
                    <Typography variant="h1">{t("ProForm.FormAdditionalInformation.title")}</Typography>
                    {/* <Typography variant="h3">{t("ProForm.FormAdditionalInformation.subtitle")}</Typography> */}
                </Box>

                <Box mb={4}>
                    <Box mb={1}>
                        <Typography variant="h5">{t("ProForm.FormAdditionalInformation.groupCheckBox_1.title")}</Typography>
                    </Box>   


                    <RadioGroup row aria-label="gender" name="smartphoneWithData" value={values.smartphoneWithData} onChange={handleChange}>
                        <FormControlLabel labelPlacement = "end" value="1" control={<Radio color="primary" />} label={t("ProForm.FormAdditionalInformation.groupCheckBox_1.checkBoxLabel1")} />
                        <FormControlLabel labelPlacement = "end" value="0" control={<Radio color="primary" />} label={t("ProForm.FormAdditionalInformation.groupCheckBox_1.checkBoxLabel2")} />
                    </RadioGroup>

                    <Box mt={3} mb={4}>
                        <p>{t("ProForm.FormAdditionalInformation.paragraph")}</p>
                    </Box>
                </Box>

                <Box mb={4}>
                    <Box>
                        <Box mb={2}>
                            <Typography variant="h5">{t("ProForm.FormAdditionalInformation.groupCheckBox_2.title")}</Typography>
                        </Box>   
                        <RadioGroup row aria-label="gender" name="health" value={values.health} onChange={handleChange}>
                            <FormControlLabel labelPlacement = "end" value="1" control={<Radio color="primary" />} label={t("ProForm.FormAdditionalInformation.groupCheckBox_2.checkBoxLabel1")} />
                            <FormControlLabel labelPlacement = "end" value="0" control={<Radio color="primary" />} label={t("ProForm.FormAdditionalInformation.groupCheckBox_2.checkBoxLabel2")} />
                        </RadioGroup>

                        <Input 
                            id="healthDescription" 
                            placeholder={t("ProForm.FormAdditionalInformation.sicksLabel")} 
                            size="small" 
                            onBlur={handleChange}
                            variant="outlined" 
                            defaultValue={values.healthDescription}
                            error="" 
                        />
                    </Box>

                    <Box mt={1}>
                        <p>{t("ProForm.FormAdditionalInformation.paragraph_2")}</p>
                    </Box>
                </Box>

                <Box>
                    <Box mb={5}>
                        <Typography variant="h5">{t("ProForm.FormAdditionalInformation.titlePhoto")}</Typography>
                    </Box>   
                    <p>{t("ProForm.FormAdditionalInformation.paragraphPhoto")}</p>           




                    <Box display="flex" mt={5}>
                        <Box mr={5}>
                            {/* <Button htmlFor="sampleFile" component="label" name="images" type="submit">{t("ProForm.FormAdditionalInformation.titleButton")}</Button> */}
                            <Button htmlFor="sampleFile" component="label" variant="contained" type="submit">{t("ProForm.FormAdditionalInformation.titleButton")}</Button>
                            <input id="sampleFile" type="file" name="files" style={{display:'none'}} multiple onChange={setImages}  />
                            <Box mt={2}>{t("ProForm.FormAdditionalInformation.photoType")}</Box>

                        </Box>

                        <Box mr={6}>
                            <Box mb={1}>
                                <Typography variant="h5">{t("ProForm.FormAdditionalInformation.MyPhoto")}</Typography>
                            </Box>
                            <label htmlFor="upload-button">
                                {values.preview ? (
                                    <img src={values.preview} alt="dummy" width="113" height="127" />
                                ) : (
                                    <Box className={classes.myPhoto}>
                                        <InsertPhotoIcon />
                                    </Box>
                                )}
                            </label>
                        </Box>

                        <Box>
                            <Box mb={1}>
                                <Typography variant="h5">{t("ProForm.FormAdditionalInformation.example")}</Typography>
                            </Box>
                            <Box>
                                <img src="images/img_seccion1.png" alt=""/>
                            </Box>
                        </Box>
                    </Box>
                    {(formErrors.step3.files.length > 0 && values.validate === 1) && (
                        <span className={classes.errorMessage}><Typography variant="h4">{t("ProForm.validations.photo")}</Typography></span>
                    )}                            

                </Box>

                <Box mt={3} className={classes.groupButtons}>
                    <Box>
                        <ButtonIcon onClick={this.back} label={t("ProForm.FormAdditionalInformation.buttonBack")} />
                    </Box>
                    <Box>
                        <ButtonBlue onClick={this.valRegistration} label={t("ProForm.FormAdditionalInformation.buttonNext")} />
                    </Box>
                </Box>
            </React.Fragment>
        )
    }
}

const styles = (theme) => ({
    groupLabelInput: {
        height: "75px",
        marginBottom: '56px',
    },
    inputWidth: {
        maxWidth: '160px',
        width: '100%',
        marginRight: '23px',
        marginBottom: '24px'
    },
    groupButtons: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        textAlign: 'center',
        '@media (max-width:768px)': { 
            justifyContent: 'center',
        }
    },
    myPhoto:{
        width:"113px", 
        height:"127px",
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '& .MuiSvgIcon-root': {
            fontSize: '10rem'
        }
    },
    errorMessage: {
        color: '#dc3545',
        paddingTop: '5px',
        fontSize: '14px'
    }
});

export default compose(withStyles(styles), withTranslation())(FormAdditionalInformation);
