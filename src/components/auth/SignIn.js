import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { Link } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Checkbox, Container, FormControlLabel, Hidden } from '@material-ui/core';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { authAction } from '../../store/actions/authAction';
import { useHistory } from "react-router-dom";
import AlertMessage from '../layout/AlertMessage';

import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import InputAdornment from '@material-ui/core/InputAdornment';
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
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
        margin: theme.spacing(0, 16),
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        '@media (max-width:1366px)': {
            margin: theme.spacing(0, 13),
        },
        '@media (max-width:1200px)': {
            margin: theme.spacing(0, 7),
        },
        '@media (max-width:600px)': {
            margin: theme.spacing(0, 4),
        }
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
        '& .MuiOutlinedInput-adornedStart':{
            paddingLeft: 0,
            backgroundColor: '#e5e2e2',
            borderRadius: 0
        },
        '& .MuiOutlinedInput-notchedOutline':{
            border: 0
        },
        '& .MuiButton-root': {
            borderRadius: 0
        }
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    backImage: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
        backgroundColor: theme.palette.primary.main,
        '& img': {
            padding: '3rem'
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
        marginLeft: '-4rem',
        marginTop: '5px',
        '& .MuiIconButton-root': {
            padding: '7px'
        }
    },
    boxIcon:{
        backgroundColor: '#2880fb', //'#2880fb', 
        width:'43px', 
        height: '43px',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    iconStyle: {
        fontSize: '20px', 
        backgroundColor: 'transparent', 
        color: 'white'
    },
    forgotPassword: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        '@media (max-width: 768px)': {
            '& a':{
                fontSize: '14px'
            },
            '& span': {
                fontSize: '14px'
            }
        }
    }
}));

const SignIn = (props) => {

    const classes = useStyles();
    //const [loggedin, setLoggedin] = useState(false);
    const [validate, setValidate] = useState(0);
    const [showPassword, setShowPassword] = useState(false);
    //const isLoggedIn = useSelector(store => store.auth.isLoggedIn);
    const history = useHistory();

    const { isLoggedIn, authAction } = props;


    const [formData, setFormData] = useState({
        email: '',
        password: '',
        remember: false
    })

    const { email, password, remember } = formData;

    React.useEffect(() => {

        function loggearse() {
            if (isLoggedIn) {
                history.push('/dashboard');
            }
        }
        loggearse();
    }, [isLoggedIn, history])

    const submitForm = (e) => {
        e.preventDefault();
        if (email === "" || password === "") {
            setValidate(1);
            return;
        }

        authAction(email, password, remember, 0);

    };

    const handDisplayPassword = e => {
        e.preventDefault();
        setShowPassword(!showPassword);
    }
    const handleMouseDownPassword = (e) => {
        e.preventDefault();
    };
/*
    const handleRememberMe = e => {
        setRemember(e.target.checked);
    }
*/
    const handleChange = e => {
        e.preventDefault();
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    return (
        <Container maxWidth="xl">
            <Grid container component="main" className={classes.root}>
                <CssBaseline />

                <Grid item md={6} lg={6}>
                    <Hidden smDown>
                        <Box className={classes.backImage}>
                            <img src="images/loginImage.png" className={classes.image} alt="" />
                        </Box>
                    </Hidden>
                </Grid>
                <Grid item md={6} lg={6} component={Paper} elevation={6} square className={classes.sgnin} >
                    <AlertMessage />
                    <div className={classes.paper}>
                        <form className={classes.form}>
                            <Box mb={5}>
                                <Typography variant="h2">BONJOUR,</Typography>
                                <Typography variant="h2">Heureux de vous retrouver!</Typography>
                            </Box>
                            <Box>
                                <TextField
                                    className={(email.length === 0 && validate === 1) ? classes.errors : ""}
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    placeholder="Email Address *"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                    value={email}
                                    size="small"
                                    onChange={(e) => handleChange(e)}
                                    InputProps={{
                                        startAdornment: (
                                        <InputAdornment position="start">
                                            <Box className={classes.boxIcon}>
                                                <PersonIcon className={classes.iconStyle} />
                                            </Box>
                                        </InputAdornment>
                                        ),
                                    }}
                                />
                                {(email.length === 0 && validate === 1) && (
                                    <span className={classes.errorMessage}>Enter your Email</span>
                                )}
                            </Box>
                            <Box display="flex" flexDirection="row" alignItems="center">
                                <TextField
                                    className={(password.length === 0 && validate === 1) ? classes.errors : ""}
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    placeholder="Password *"
                                    type={showPassword ? 'text' : 'password'}
                                    id="password"
                                    autoComplete="current-password"
                                    value={password}
                                    size="small"
                                    onChange={(e) => handleChange(e)}
                                    InputProps={{
                                        startAdornment: (
                                        <InputAdornment position="start">
                                            <Box className={classes.boxIcon}>
                                                <LockIcon className={classes.iconStyle} />
                                            </Box>
                                        </InputAdornment>                                            
                                        ),
                                    }}
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
                            {(password.length === 0 && validate === 1) && (
                                <span className={classes.errorMessage}>Enter your password</span>
                            )}
                            {validate === 3 && (
                                <span className={classes.errorMessage}>Username And/Or Password Incorrect</span>
                            )}
                            <Box>
                                <Button
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                    onClick={submitForm}
                                >
                                    Sign In
                                </Button>
                            </Box>
                            <Box>
                                <Box className={classes.forgotPassword}>
                                    <Link to="/reset-password-admin-form">
                                        Forgot password?
                                    </Link>
                                    <FormControlLabel
                                        control={<Checkbox color="primary" />}
                                        label="Remember me"
                                        onClick={(e) => handleChange(e)}
                                    />
                                </Box>
                            </Box>
                            <Box mt={5}>
                                <Copyright />
                            </Box>
                        </form>
                    </div>
                </Grid>
            </Grid>
        </Container>
    );

}

SignIn.propTypes = {
    authAction: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    //const isLoggedIn = useSelector(store => store.auth.isLoggedIn);
    isLoggedIn: state.auth.isLoggedIn
})

export default connect(mapStateToProps, { authAction })(SignIn);
