import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

//import { connect } from 'react-redux';
import { useParams, withRouter } from "react-router-dom";
import { useDispatch } from 'react-redux';

import { setAlert } from '../../store/actions/alertAction';
import Input from '../share/inputs/Input';
import AlertMessage from '../layout/AlertMessage';

import { resetPassword } from '../../store/actions/authAction';

/*
import axios from 'axios';
*/
function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link to="#" color="inherit" href="https://material-ui.com/">
                Tiggidoo
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    paper: {
        margin: theme.spacing(20, 10),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '@media (max-width:600px)': {
            margin: theme.spacing(10, 2),
        }
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(4),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    backImage: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%', 
        height: '90px',
        margin: '40px 0',
        //marginBottom: '40px',
        '@media (max-width:600px)': {
            height: '60px',
            margin: '20px 0',
        }
    },
    errorMessage: {
        color: '#dc3545',
        paddingTop: '5px'
    },
    errors: {
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'red',
                borderRadius: '4px'
            }
        },
        '& .MuiOutlinedInput-inputMarginDense': {
            paddingTop: '11px',
            paddingBottom: '11px',
        }
    },
    displayPassword: {
        marginLeft: '-6rem',
        '& .MuiIconButton-root': {
            padding: '7px'
        }
    },
    backProgressBar: {
        width: '100%',
        padding: '0 20px'
    },
    backProgressBarLayOut1: {
        width: '100%',
        backgroundColor: '#d0eae0',
        borderRadius: '5px'
    },
    backProgressBarLayOut2: {
        textAlign: 'center',
        height: '2.3rem',
        borderRadius: '5px'
    },
    progressBarText: {
        textAlign: 'center',
        marginTop: '-2.1rem',
        fontWeight: 'bold'
    },
}));

const ResetPasswordForm = ({ history }) => {

    const classes = useStyles();

    const dispatch = useDispatch();

    const [showPassword, setShowPassword] = useState(false);
    const [color, setColor] = useState('#f112024f');
    const [percentage, setPercentage] = useState('0%');
    const [messageText, setMessageText] = useState('Faible');
    let [colorTexto, setColorTexto] = useState('#000');
    let perc = 0;

    let { token, email } = useParams();

    token = decodeURIComponent(token);
    email = decodeURIComponent(email);

    const [formData, setFormData] = useState({
        password: '',
        passwordConfirmation: '',
        showPassword: false
    })
    const [validate, setValidate] = useState(false);

    const { password, passwordConfirmation } = formData;

    const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[?!@#%&])(?=.{8,})");
    const mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");

    const submitForm = (e) => {
        e.preventDefault();
        let isValidationOk = true;
        if (password.trim().length === 0 || passwordConfirmation.trim().length === 0) {
            isValidationOk = false;
            setValidate(true);
            setAlert("Ecrire un mot de passe et la confirmation", 'error');
        }
        if (password.trim().length < 8) {
            isValidationOk = false;
            setValidate(true);
            setAlert("Le mot de passe doit comporter au moins 8 chiffres", 'error');
        }
        if (!(passwordConfirmation.localeCompare(password) === 0)) {
            isValidationOk = false;
            setValidate(true);
            setAlert("Les mots de passe doivent être identiques", 'error');
        }
        if (isValidationOk) {
            dispatch(resetPassword(token, email, formData, history));
        } else {
            return false;
        }
    };

    const handleChange = e => {
        e.preventDefault();
        setFormData({ ...formData, [e.target.name]: e.target.value.trim() });

        if (e.target.name === 'password') {
            let value = e.target.value;

            if (strongRegex.test(value)) {
                setColor('#f11202');
                setMessageText('Forte');
                perc = 100;
            } else if (mediumRegex.test(value)) {
                setColor('#f1120275');
                setMessageText('Moyenne');
                perc = 60 + (value.length < 9 ? (value.length * 3) : 24);
            } else {
                setColor('#f112024f');
                setMessageText('Faible');
                perc = 10 + (value.length < 9 ? (value.length * 3) : 24);
            }
            if (perc > 35) {
                setColorTexto('#fff');
            } else {
                setColorTexto('#000');
            }
            setPercentage(value.length > 0 ? `${perc}%` : '0');
        }


    }
    const handDisplayPassword = e => {
        e.preventDefault();
        setShowPassword(!showPassword);
    }
    const handleMouseDownPassword = (e) => {
        e.preventDefault();
    };

    return (
        <Container maxWidth="sm" component="main" className={classes.root}>
            <CssBaseline />
            <Grid item md={12} component={Paper} elevation={6} square className={classes.sgnin} >
                <AlertMessage />
                <div className={classes.paper}>
                    <Box className={classes.backImage}>
                        <img src="images/logo_tiggidoo.svg" className={classes.image} alt="" />
                    </Box>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Changer le mot de passe
                    </Typography>
                    <form className={classes.form}>
                        <Box my={2} display="flex" flexDirection="row" alignItems="center">
                            <Input
                                id="password"
                                placeholder=""
                                label="Mot de passe *"
                                size="small"
                                width={'100%'}
                                type={showPassword ? 'text' : 'password'}
                                defaultValue={password}
                                onBlur={handleChange}
                                variant="outlined"
                                error={(password.trim().length === 0 && validate) ? 'Entrer un mot de passe' : ''}
                            />
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
                        </Box>
                        <Box mt={2} mb={3} display="flex" flexDirection="row" alignItems="center">
                            <Input
                                id="passwordConfirmation"
                                placeholder=""
                                label="Confirmation mot de passe *"
                                size="small"
                                type={showPassword ? 'text' : 'password'}
                                width={'100%'}
                                defaultValue={passwordConfirmation}
                                onBlur={handleChange}
                                variant="outlined"
                                error={(passwordConfirmation.trim().length === 0 && validate) ? 'Entrez la confirmation' : ''}
                            />
                            <Box className={classes.displayPassword}>
                                {(passwordConfirmation.trim().length > 0) && (
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
                        </Box>
                        {/* #32cc8c30, #32cc8c4a, #32cc8c61 #32cc8cb3 #32cc8c*/}
                        {/* '#d0eae0' */}
                        <Box className={classes.backProgressBar} >
                            <Box className={classes.backProgressBarLayOut1}>
                                <Box className={classes.backProgressBarLayOut2} style={{ width: percentage, backgroundColor: color }}></Box>
                                <Box className={classes.progressBarText} style={{ color: colorTexto }}>{messageText}</Box>
                            </Box>
                        </Box>
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={e => submitForm(e)}
                        >
                            Soumettre
                        </Button>

                        <Box my={5}>
                            <Copyright />
                        </Box>
                    </form>
                </div>
            </Grid>
        </Container>
    );

}


export default withRouter(ResetPasswordForm);
