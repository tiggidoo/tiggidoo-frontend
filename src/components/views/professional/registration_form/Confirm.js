import React from 'react'
import { Box, Typography } from "@material-ui/core";
import ButtonBlue from '../../../share/buttons/ButtonBlue';
import { Link } from "react-router-dom";
/* , Checkbox, FormControlLabel, NativeSelect, RadioGroup, Radio */

//STYLES
import { makeStyles } from '@material-ui/core/styles';
 
const useStyles = makeStyles((theme) => ({
    confirmation: {
        
        textAlign: 'center',
        color: '#4D4D4D',
        '& h2':{
            fontFamily: 'sans-serif',
            fontWeight: 'bold',
        }
    },
    textBlue: {
        color: '#2880F9'
    },
    textItalic:{
        fontStyle: 'italic',
        color: '#2880F9'
    }
  }));

export default function Confirm(props) {
    const classes = useStyles();
    //console.log(props);
    const firstName = props.firstName;
    return (
        <div>
            <Box className={classes.confirmation} >
                <Box mb={8} mt={10}>
                    <img src="images/section4-check.jpg" alt=""/>
                </Box>
                <Box mb={3}>
                    <Typography variant="h2">Merci {firstName}</Typography>
                    <Typography variant="h2">Votre candidature est déjà à l’étude par notre service recrutement</Typography>
                </Box>           
                <Box mb={3}>
                    <Typography variant="h4">L’humain est au coeur de nos valeurs, nous mettons un point d’honneur à étudier minutieusement chaque candidature</Typography>
                    <Typography variant="h4">Nous vous contacterons dès qu’une décision sera effective concernant votre dossier</Typography>
                </Box>           
                <Box mb={4}>
                    <Typography className={classes.textBlue} variant="h2">Wait & Clean</Typography>
                </Box>           

                <Box mb={4}>
                    <Typography variant="h3">Merci</Typography>
                </Box>           

                <Box mb={8}>
                    <Typography className={classes.textItalic}  variant="h3">Merci L’équipe de recrutement de Tiggidoo</Typography>
                </Box>           
                <Box>
                    <Link to="/">
                        <ButtonBlue label="ACCUEIL" />
                    </Link>
                </Box>
            </Box>
        </div>
    )
}

