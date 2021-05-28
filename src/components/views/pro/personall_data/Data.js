import React, { useState } from 'react'
import { Box, Button, Divider, FormControl, Grid, makeStyles, RadioGroup, Typography } from '@material-ui/core'
//import { useSelector } from 'react-redux'
//import Dashboard from '../../../layout/Dashboard'
import Input from '../../../share/inputs/Input'
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { Link } from "react-router-dom"
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
            //padding: '7px'
        }
    },
    boxStyle: {
        margin: theme.spacing(0 , 6, 5, 0),
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
        },
        '& .MuiIconButton-edgeEnd':{
            top: '-4px'
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
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        margin: theme.spacing(4, 4, 2, 4),
        '@media(max-width: 600px)':{
            justifyContent: 'center',
        }
    },
    root: {
        width: '100%',
        border: '1px solid #BBBBBB',
        opacity: '1',
        height: '1px'
      },
}))

const Data = ({auth}) => {
    const classes = useStyle();

    const { credential } = auth;

    const [showPassword, setShowPassword] = useState(false);

    const [ formData, setFormData ] = useState({
        password: '',
        tpsTvq: '0'
    });

    const { password, tpsTvq } = formData

    const handleChange = e => {
        e.preventDefault()
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handDisplayPassword = e => {
        e.preventDefault();
        setShowPassword(!showPassword);
    }

    const handleMouseDownPassword = (e) => {
        e.preventDefault();
    };

    return (

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
                                            onBlur={handleChange} 
                                            defaultValue={password} 
                                            variant="outlined" 
                                            readOnly={false}
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

                    <Grid item md={12}>                    
                        <Box className={classes.root} mb={5}>
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
                        <Box mt={4}>                      
                            <FormControl component="fieldset">
                                <RadioGroup defaultValue={tpsTvq} aria-label="gender" name="tpsTvq" onClick={e=>handleChange(e)}>
                                    <Box display="flex" flexDirection="row">
                                        <RadioCustom value="1" label="Oui" defaultValue={tpsTvq} />
                                        <RadioCustom value="0" label="Non" defaultValue={tpsTvq} />
                                    </Box>
                                </RadioGroup>
                            </FormControl>
                        </Box>

                        <Box mt={7} mb={2}>
                            Notre plateforme Tiggidoo utilise le système de paiement STRIPE afin de simplifié le processus d’utilisation et des respecter tout les exigences de sécurité. 
                        </Box>
                        <Box>
                            Inscrivez-vous pour recevoir vos premiers revenus.
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={12}>
                    {/*  */}
                        <Box className={classes.btn}>
                            <Button variant="contained" color="primary">MODIFIER MES DONNEES</Button>
                        </Box>
                    </Grid>                  
                </Grid>
            
    )
}

export default Data