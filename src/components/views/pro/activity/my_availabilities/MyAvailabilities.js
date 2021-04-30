import React from 'react'
import { Grid } from '@material-ui/core'
import { useSelector } from 'react-redux'
import Dashboard from '../../../../layout/Dashboard'
import TitleForm from '../../../../layout/TitleForm'
import Availability from './Availability'
import ScheduledActivities from './ScheduledActivities'

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

            <Grid container>
                <Grid item xs={12}>
                    <TitleForm title={'MY ACTIVITIES'} subTitle={'My tasks'} />
                </Grid>
                <Grid item xs={12} md={4} style={{backgroundColor: '#fff'}}>
                    <Availability />
                </Grid>
                <Grid item xs={12} md={8} style={{backgroundColor: '#fff'}}>
                    <ScheduledActivities />
                </Grid>
            </Grid>
        </Dashboard>
    )
}
export default MyAvailabilities