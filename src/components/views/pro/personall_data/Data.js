import React, { useState } from 'react'
import { Box, Button, Checkbox, FormControlLabel, Grid, makeStyles, Typography } from '@material-ui/core'
import { useSelector } from 'react-redux'
import Dashboard from '../../../layout/Dashboard'
import Input from '../../../share/inputs/Input'
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { Link } from "react-router-dom"
import TitleForm from '../../../layout/TitleForm'

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
        margin: theme.spacing(0 , 2, 5, 2),
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
    }
}))

const Data = () => {
    const classes = useStyle();

    const { auth, token, isLoggedIn } = useSelector(
        state => ({
            auth: state.auth.pro,
            token: state.access_token,
            isLoggedIn: state.auth.isLoggedIn
        })
    ) 
    const { credential } = auth;
    const [showPassword, setShowPassword] = useState(false);
    //const [ password, setPassword ] = useState('HOLA');
    const password = '';
    
    const handDisplayPassword = e => {
        e.preventDefault();
        setShowPassword(!showPassword);
    }

    const handleMouseDownPassword = (e) => {
        e.preventDefault();
    };

    return (
        <Dashboard
            user = { auth }
            token = { token }
            isLoggedIn = {isLoggedIn}
        >
            <Grid item sm={12}>
                <TitleForm title={'PERSONAL INFORMATION'} subTitle={'My personal data'} />
            </Grid>
            <Grid container>
                <Grid item xs={12} sm={12} md={6}>
                    <Grid container>
                        <Grid item xs={12} sm={6} md={12}>
                            <Box className={classes.boxStyle}>
                                <Box>
                                    <Typography variant="h6">First Name</Typography>
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
                                    <Typography variant="h6">Last Name</Typography>
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
                                    <Typography variant="h6">Email</Typography>
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
                                    <Typography variant="h6">Phone</Typography>
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
                                    <Typography variant="h6">Password</Typography>
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
                        <Box className={classes.boxStyle}>
                            <FormControlLabel
                                control={<Checkbox name="fr" color="primary" checked={false} />}
                                label={"French"}
                            />
                            <FormControlLabel
                                control={<Checkbox  name="en" color="primary" checked={true} />}
                                label={"English"}
                            />
                        </Box>
                    </Grid>
                </Grid>

                <Grid item xs={12} sm={12} md={12}>
                    <Grid container>
                        <Box className={classes.boxStyleBanc}>
                            <Box>    
                                <Typography variant="h6">Transit Number</Typography>
                            </Box>
                            <Input
                                id="password1" 
                                label="" 
                                size="small" 
                                type={'text'}
                                //onBlur={handleChange} 
                                defaultValue={"12***"} 
                                variant="filled" 
                                readOnly={true}
                                error=""
                            />

                        </Box>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                    <Grid container>
                        <Box className={classes.boxStyleBanc}>
                            <Box>    
                                <Typography variant="h6">Financial Institution Number</Typography>
                            </Box>
                            <Input
                                id="password2" 
                                label="" 
                                size="small" 
                                type={'text'}
                                //onBlur={handleChange} 
                                defaultValue={"12***"} 
                                variant="filled" 
                                readOnly={true}
                                error=""
                            />

                        </Box>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                    <Grid container>
                        <Box className={classes.boxStyleBanc}>
                            <Box>    
                                <Typography variant="h6">Account Number</Typography>
                            </Box>
                            <Input
                                id="password3" 
                                label="" 
                                size="small" 
                                type={'text'}
                                //onBlur={handleChange} 
                                defaultValue={"12***"} 
                                variant="filled" 
                                readOnly={true}
                                error=""
                            />

                        </Box>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Box className={classes.btn}>
                        <Button variant="contained" color="primary">UPDATE</Button>
                    </Box>
                </Grid>                  
            </Grid>
            
        </Dashboard>
    )
}

export default Data