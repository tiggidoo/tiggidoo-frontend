import React from 'react'
import { Box, Typography } from "@material-ui/core";
import ButtonBlue from '../../../share/buttons/ButtonBlue';
import { Link } from "react-router-dom";
/* , Checkbox, FormControlLabel, NativeSelect, RadioGroup, Radio */

//import { makeStyles } from '@material-ui/core/styles';
import { withTranslation } from "react-i18next";
//REDUX FUNCTIONS
import { compose } from "redux";

//STYLES
import { makeStyles } from '@material-ui/core/styles';
 
const useStyles = makeStyles((theme) => ({
    confirmation: {
        
        textAlign: 'center',
        color: '#4D4D4D',
        '& h1':{
            fontFamily: 'sans-serif',
            fontWeight: 'bold',
            fontSize: '4rem'
        },
        '& h2':{
            fontFamily: 'sans-serif',
            fontWeight: 'bold',
            fontSize: '4rem'
        }
    },
    textBlue: {
        color: '#2880F9'
    },
    textItalic:{
        fontStyle: 'italic',
        color: '#2880F9'
    },
    widthImg:{
        width: '160px'
    }
  }));

function Confirm(props) {
    const classes = useStyles();
    const { t } = props;
    //console.log(props);
    const firstName = props.firstName;
    return (
        <div>
            <Box className={classes.confirmation} >
                <Box mb={8} mt={10}>
                    <img className={classes.widthImg} src="images/section4-check.jpg" alt=""/>
                </Box>
                <Box mb={3}>
                    <Typography variant="h1">{ t("ProForm.Confirmation.title") } {firstName}</Typography>
                    <Typography variant="h1">{ t("ProForm.Confirmation.subTitle") }</Typography>
                </Box>           
                <Box mb={3}>
                    <Typography variant="h4">{ t("ProForm.Confirmation.description1") }</Typography>
                </Box>           
                <Box mb={3}>
                    <Typography variant="h4">{ t("ProForm.Confirmation.description2") }</Typography>
                </Box>           
                <Box mb={4}>
                    <Typography className={classes.textBlue} variant="h2">{ t("ProForm.Confirmation.description3") }</Typography>
                </Box>           

                <Box mb={8}>
                    <Typography className={classes.textItalic}  variant="h4">{ t("ProForm.Confirmation.description4") }</Typography>
                </Box>           
                <Box>
                    <Link to="/">
                        <ButtonBlue label={ t("ProForm.Confirmation.button") } />
                    </Link>
                </Box>
            </Box>
        </div>
    )
}

export default compose(
    withTranslation()
)
(Confirm);