import React, { useState } from 'react'
import { Box, Button, Divider, FormControl, FormControlLabel, FormLabel, Grid, makeStyles, RadioGroup, Typography } from '@material-ui/core'
//import { useSelector } from 'react-redux'
//import Dashboard from '../../../layout/Dashboard'
import Input from '../../../share/inputs/Input'
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { Link } from "react-router-dom"
//import TitleForm from '../../../layout/TitleForm'
import CheckBoxCustom from '../../../share/inputs/CheckBoxCustom'
import Label from '../../../share/inputs/Label';
import TitleForm from '../../../layout/TitleForm';
import RadioCustom from '../../../share/inputs/RadioCustom';

const useStyle = makeStyles((theme) => ({
    
    displayPassword: {
        marginLeft: '-4rem',
        width: '44px',
        float: 'right',
        right: '10px',
        position: 'relative',
        top: '-52px',        
        '& .MuiIconButton-root': {
            padding: '7px'
        }
    },
    boxStyle: {
        margin: theme.spacing(0 , 0, 5, 0),
        '& .MuiOutlinedInput-root': {
            backgroundColor: '#dcdcdc'
        },
        '& .MuiFormControl-root': {
            boxShadow: 'none',
            border: '0 solid'
        },
        '& .MuiOutlinedInput-notchedOutline':{
            border: 'none'
        },
        '@media(max-width: 1200px)': {
            padding: theme.spacing(0),
            margin: theme.spacing(1,0)
        },
        '& h6':{
            fontSize: '1.5rem',
            fontWeight: 'bold'
        }
    },
    boxStyleBanc: {
        width: '100%',
        backgroundColor: '#fff',
        margin: theme.spacing(0 , 0, 2, 0),
        '@media(min-width: 600px)': {
            width: '50%',
        },
        '@media(min-width: 1200px)': {
            width: '47%',
            margin: theme.spacing(0 , 2, 2, 2)
        }
    },
    btn: {
        padding: theme.spacing(4, 4, 2, 4),
        textAlign: 'center',
        '@media(min-width: 600px)':{
            textAlign: 'right',
        }
    },
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
      },
}))

const Data = ({auth}) => {
    const classes = useStyle();

    const { credential } = auth;
    const [showPassword, setShowPassword] = useState(false);
    //const [ password, setPassword ] = useState('HOLA');
    const password = '';
    
    const handleChange = e => {
        e.preventDefault()
    }

    const handDisplayPassword = e => {
        e.preventDefault();
        setShowPassword(!showPassword);
    }

    const handleMouseDownPassword = (e) => {
        e.preventDefault();
    };

    return (
            // <Grid item sm={12}>
            //     <TitleForm title={'PERSONAL INFORMATION'} subTitle={'My personal data'} />
            // </Grid>
            <Grid container>
                <Grid item xs={12}>
                    <Box mb={3}>
                        <TitleForm title="MES DONNEES PERSONELLES" />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <Grid container>
                        <Grid item xs={12} sm={6} md={12}>
                            <Box className={classes.boxStyle}>
                                <Box>
                                    <Label text="PRENOM" />
                                </Box>
                                <Box>
                                    <Input
                                        id="firstName" 
                                        label="" 
                                        size="medium" 
                                        //onBlur={handleChange} 
                                        defaultValue={credential.firstName} 
                                        variant="outlined" 
                                        readOnly={true}
                                        error=""
                                    />
                                </Box>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={6} md={12}>
                            <Box className={classes.boxStyle}>
                                <Box>    
                                    <Label text="NOM" />
                                </Box>
                                <Box>
                                    <Input
                                        id="lastName" 
                                        label="" 
                                        size="medium" 
                                        //onBlur={handleChange} 
                                        defaultValue={credential.lastName} 
                                        variant="outlined" 
                                        readOnly={true}
                                        error=""
                                    />
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <Grid container>
                        <Grid item xs={12} sm={6} md={12}>
                            <Box className={classes.boxStyle}>
                                <Box>    
                                    <Label text="CURRIEL" />
                                </Box>
                                <Box>
                                    <Input
                                        id="email" 
                                        label="" 
                                        size="medium" 
                                        //onBlur={handleChange} 
                                        defaultValue={credential.email} 
                                        variant="outlined" 
                                        readOnly={true}
                                        error=""
                                    />
                                </Box>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={6} md={12}>
                            <Box className={classes.boxStyle}>
                                <Box>    
                                    <Label text="TELEPHONE" />
                                </Box>
                                <Box>
                                    <Input
                                        id="phone" 
                                        label="" 
                                        size="medium" 
                                        //onBlur={handleChange} 
                                        defaultValue={credential.telephone} 
                                        variant="outlined" 
                                        readOnly={true}
                                        error=""
                                    />
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={12} sm={12} md={6}>
                    <Grid container>
                        <Grid item xs={12} sm={6} md={12}>
                            <Box className={classes.boxStyle}>
                                <Box>    
                                    <Label text="MOT DE PASSE" />
                                </Box>
                                <Box flexDirection="row" alignItems="center">
                                    <Input
                                        id="password" 
                                        label="" 
                                        size="medium" 
                                        type={showPassword ? 'text' : 'password'}
                                        //onBlur={handleChange} 
                                        defaultValue={credential.email} 
                                        variant="outlined" 
                                        readOnly={true}
                                        error=""
                                    />
                                </Box>
                                <Box className={classes.displayPassword}>
                                    {(password.trim().length > 0) && (
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            name="showPassword"
                                            onClick={e => handDisplayPassword(e)}
                                            onMouseDown={e => handleMouseDownPassword(e)}
                                            edge="end"
                                        >
                                            {showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    )} 
                                </Box>
                                <Box mt={2}>
                                    <Link to={'/data_personal'}>Update Password</Link>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={12} sm={12} md={12}>
                    <Grid container>
                        <Box className={classes.boxStyle} display="flex">
                            <Box mr={3}>
                                <CheckBoxCustom
                                    name="fr"
                                    value={true}
                                    handleChange={handleChange}
                                    label="Fr"
                                />
                            </Box>
                            <Box>
                                <CheckBoxCustom
                                    name="en"
                                    value={false}
                                    handleChange={handleChange}
                                    label="En"
                                />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>


                <Grid item xd={12}>                    
                    <Box className={classes.root}>
                        <Divider />
                    </Box>
                </Grid>
                <Grid item xd={12}>
                    <Box mb={1}>
                        <TitleForm title="INFORMATIONS POUR LE VERSEMENT" />
                    </Box>
                    <Box mb={2}>
                        <Typography variant="h6" style={{color: '#000'}}>Êtes-vous assujetti à la TPS/TVQ</Typography>
                    </Box>
                    <Box mb={2}>
                        

                    <FormControl component="fieldset">
                        <FormLabel component="legend">Gender</FormLabel>
                            <RadioGroup defaultValue="female" aria-label="gender" name="customized-radios">
                            <FormControlLabel value="female" control={<RadioCustom />} label="Female" />
                            <FormControlLabel value="male" control={<RadioCustom />} label="Male" />
                            <FormControlLabel value="other" control={<RadioCustom />} label="Other" />
                            <FormControlLabel
                                value="disabled"
                                disabled
                                control={<RadioCustom />}
                                label="(Disabled option)"
                            />
                            </RadioGroup>
                    </FormControl>

                    </Box>
                </Grid>

                <Grid item xs={12}>
                    <Box className={classes.btn}>
                        <Button variant="contained" color="primary">MDODIFIER MES DONNEES</Button>
                    </Box>
                </Grid>                  
            </Grid>
            
    )
}

export default Data