import React from 'react'
import { Box, Grid, Typography } from '@material-ui/core'
import { useSelector } from 'react-redux'
import Dashboard from '../../../layout/Dashboard'
import Title from '../../../layout/Title'



const MyAvailabilities = () => {
    
    const { auth, token, isLoggedIn } = useSelector(
        state => ({
            auth: state.auth.pro,
            token: state.access_token,
            isLoggedIn: state.auth.isLoggedIn
        })
    ) 

    return (
        <Dashboard
            user = { auth }
            token = { token }
            isLoggedIn = {isLoggedIn}
        >

            <Grid container >
                <Grid item xs={12}>
                    <Title title={'MY ACTIVITIES'} subTitle={'My tasks'} />
                </Grid>
                <Grid item xs={5}>

                </Grid>
            </Grid>
        </Dashboard>
    )
}

export default MyAvailabilities