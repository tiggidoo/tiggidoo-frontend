import { Box, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import Dashboard from '../../../layout/Dashboard'
import Input from '../../../share/inputs/Input'

const Data = () => {
    const { auth, token, isLoggedIn } = useSelector(
        state => ({
            auth: state.auth.pro,
            token: state.access_token,
            isLoggedIn: state.auth.isLoggedIn
        })
    ) 
    const { credential } = auth;

    console.log(credential);
    return (
        <Dashboard
            user = { auth }
            token = { token }
            isLoggedIn = {isLoggedIn}
        >
            
            <Grid item xs={12}>
                <Box mb={1}>
                    <Typography component="h5" variant="h5">
                        PERSONAL INFORMATION
                    </Typography>
                </Box>
                <Box>
                    <Typography component="h5" variant="h5" >
                        My personal data
                    </Typography>
                </Box>
            </Grid>
            <Grid container>
                <Grid item md={6}>
                    <Grid container>
                        <Grid item md={12}>
                            <Box mt={5}>
                                <Input
                                    id="firstName" 
                                    label="First Name" 
                                    size="small" 
                                    //onBlur={handleChange} 
                                    defaultValue={credential.firstName} 
                                    variant="outlined" 
                                    readOnly={true}
                                    error=""
                                />
                            </Box>
                        </Grid>

                        <Grid item md={12}>
                            <Box mt={5}>
                                <Input
                                    id="lastName" 
                                    label="Last Name" 
                                    size="small" 
                                    //onBlur={handleChange} 
                                    defaultValue={credential.lastName} 
                                    variant="outlined" 
                                    readOnly={true}
                                    error=""
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md={6}>
                    <Grid container>
                        <Grid item md={12}>
                            <Box mt={5}>
                                <Input
                                    id="email" 
                                    label="Email" 
                                    size="small" 
                                    //onBlur={handleChange} 
                                    defaultValue={credential.email} 
                                    variant="outlined" 
                                    readOnly={true}
                                    error=""
                                />
                            </Box>
                        </Grid>

                        <Grid item md={12}>
                            <Box mt={5}>
                                <Input
                                    id="phone" 
                                    label="Phone" 
                                    size="small" 
                                    //onBlur={handleChange} 
                                    defaultValue={credential.telephone} 
                                    variant="outlined" 
                                    readOnly={true}
                                    error=""
                                />
                            </Box>
                        </Grid>
                    </Grid>
            </Grid>

            </Grid>


        </Dashboard>
    )
}

export default Data