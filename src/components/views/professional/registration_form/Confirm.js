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
            fontSize: '4rem',
            '@media (max-width:1600px)': { 
                fontSize: '3rem',
            },
            '@media (max-width:1366px)': { 
                fontSize: '2.5rem',
            },
            '@media (max-width:768px)': { 
                fontSize: '2rem',
            }
        },
        '& h2':{
            fontFamily: 'sans-serif',
            fontWeight: 'bold',
            fontSize: '4rem',
            '@media (max-width:1600px)': { 
                fontSize: '3rem',
            },
            '@media (max-width:1366px)': { 
                fontSize: '2.5rem',
            },
            '@media (max-width:768px)': { 
                fontSize: '2rem',
            }
        },
        '& h4':{
            '@media (max-width:1366px)': { 
                fontSize: '1.6rem',
            },
            '@media (max-width:768px)': { 
                fontSize: '1.4rem',
            }
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
        width: '160px',
        '@media (max-width:1600px)': { 
            width: '140px'
        },
        '@media (max-width:1366px)': { 
            width: '120px'
        },
        '@media (max-width:768px)': { 
            width: '110px'
        }
    },
    btnHome:{
        fontWeight: 'bold'
    },
    link:{
    '& a':{
            textDecoration: 'none'
        }
    }
  }));

function Confirm(props) {
    const classes = useStyles();
    const { t } = props;
    //console.log(props);
    const firstName = props.firstName;

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div>
            <Box className={classes.confirmation} >
                <Box mb={3}>
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

                <Box mb={4}>
                    <Box className="mb-0">
                        <Typography variant="h3">{ t("ProForm.Confirmation.description4") }</Typography>
                    </Box>
                    <Box>
                        <Typography className={classes.textItalic}  variant="h4">{ t("ProForm.Confirmation.description5") }</Typography>
                    </Box>
                </Box>           
                <Box className={classes.link}>
                    <Link to="/">
                        <ButtonBlue className={classes.btnHome} label={ t("ProForm.Confirmation.button") } />
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