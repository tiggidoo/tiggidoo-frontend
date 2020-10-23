import React, { Component } from 'react'
//import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Box, FormControlLabel, RadioGroup, Radio } from "@material-ui/core";
import ButtonBlue from '../../../share/buttons/ButtonBlue';
import ButtonIcon from '../../../share/buttons/ButtonIcon';
import Input from '../../../share/inputs/Input';

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
        this.props.addRegistration();
        this.props.nextStep();
    }
    render() {
        const { t } = this.props;
        const { classes } = this.props;
        const { values, handleChange, setImages } = this.props;
        
        
        return (
            <React.Fragment>
                <Box mb={5}>
                    <Typography variant="h1">{t("ProForm.FormAdditionalInformation.title")}</Typography>
                    <Typography variant="h3">{t("ProForm.FormAdditionalInformation.subtitle")}</Typography>
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

                        <Input error="" id="healthDescription" label={t("ProForm.FormAdditionalInformation.sicksLabel")} size="small" onChange={handleChange} defaultValue={values.healthDescription}/>
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
                        <Box>
                            <input type="file" name="images" onChange={setImages}  />
                            {/* <Button htmlFor="sampleFile" component="label" name="images" type="submit">{t("ProForm.FormAdditionalInformation.titleButton")}</Button>  */}
                        </Box>
                        <Box>
                            <Box mb={1}>
                                <Typography variant="h5">Pour Exemple</Typography>
                            </Box>
                            <Box>
                                <img src="images/img_seccion1.png" alt=""/>
                            </Box>
                        </Box>
                    </Box>
                        
                </Box>

                <Box mt={3} className={classes.groupButtons}>
                    <Box>
                        <ButtonIcon onClick={this.back} label="BACK" />
                    </Box>
                    <Box>
                        <ButtonBlue onClick={this.valRegistration} label="VALIDER L'INSCRIPTION" />
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
    }
});

export default compose(withStyles(styles), withTranslation())(FormAdditionalInformation);
