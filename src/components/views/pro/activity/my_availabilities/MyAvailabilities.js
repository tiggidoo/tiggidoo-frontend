import React, { useState } from 'react'
import { Grid, Button, Box, makeStyles } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import Dashboard from '../../../../layout/Dashboard'
import TitleForm from '../../../../layout/TitleForm'
import Availability from './Availability'
import ScheduledActivities from './ScheduledActivities'
import { udateAvailabilities } from '../../../../../store/actions/proAction'

const useStyle = makeStyles((theme) => ({
    btn: {
        margin: theme.spacing(3,0,3,0),
        textAlign: 'center'
    }
}))

const MyAvailabilities = () => {
    const classes = useStyle()

    const { auth, token, isLoggedIn } = useSelector(
        state => ({
            auth: state.auth.pro,
            token: state.auth.access_token,
            isLoggedIn: state.auth.isLoggedIn
        })
    ) 
    const { availability } = auth

    const dispatch = useDispatch()

    const [enableTime, setEnableTime] = useState({
        Mo: availability['Mo'],
        Tu: availability['Tu'],
        We: availability['We'],
        Th: availability['Th'],
        Fr: availability['Fr'],
        Sa: availability['Sa'],
        Su: availability['Su'],
        am_Mo: (availability['Mo'] === 1 || availability['Mo'] === 3) ? true : false, 
        pm_Mo: (availability['Mo'] === 2 || availability['Mo'] === 3) ? true : false, 
        am_Tu: (availability['Tu'] === 1 || availability['Tu'] === 3) ? true : false, 
        pm_Tu: (availability['Tu'] === 2 || availability['Tu'] === 3) ? true : false, 
        am_We: (availability['We'] === 1 || availability['We'] === 3) ? true : false, 
        pm_We: (availability['We'] === 2 || availability['We'] === 3) ? true : false, 
        am_Th: (availability['Th'] === 1 || availability['Th'] === 3) ? true : false, 
        pm_Th: (availability['Th'] === 2 || availability['Th'] === 3) ? true : false,  
        am_Fr: (availability['Fr'] === 1 || availability['Fr'] === 3) ? true : false, 
        pm_Fr: (availability['Fr'] === 2 || availability['Fr'] === 3) ? true : false, 
        am_Sa: (availability['Sa'] === 1 || availability['Sa'] === 3) ? true : false, 
        pm_Sa: (availability['Sa'] === 2 || availability['Sa'] === 3) ? true : false, 
        am_Su: (availability['Su'] === 1 || availability['Su'] === 3) ? true : false, 
        pm_Su: (availability['Su'] === 2 || availability['Su'] === 3) ? true : false, 
    })

    const hancleChange = (e) => {
        const hour = e.target.name.split('_')[0]
        const day = e.target.name.split('_')[1] 
        let total = null
        if(hour === 'am'){
            if(e.target.checked && enableTime[`pm_${day}`]){
                total = 3
            }else if(e.target.checked && !enableTime[`pm_${day}`]){
                total = 1
            }else if(!e.target.checked && enableTime[`pm_${day}`]){
                total = 2
            }
        }else{
            if(e.target.checked && enableTime[`am_${day}`]){
                total = 3
            }else if(e.target.checked && !enableTime[`am_${day}`]){
                total = 2
            }else if(!e.target.checked && enableTime[`am_${day}`]){
                total = 1
            }
        }
 
        setEnableTime({
            ...enableTime, 
            [e.target.name]: e.target.checked,
            [day]: total
        })
    }

    const updateTime = (e) => {
        e.preventDefault()
        console.log('Token', token);
        dispatch(udateAvailabilities(token, auth.id, enableTime))
    }

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
                    <Availability availability={enableTime} hancleChange = { hancleChange } />
                </Grid>
                <Grid item xs={12} md={8} style={{backgroundColor: '#fff'}}>
                    <ScheduledActivities enableTime = { enableTime }/>
                </Grid>
                <Grid item xs={12}>
                    <Box className={classes.btn}>
                        <Button variant="contained" color="primary" onClick={e => updateTime(e) }>MODIFIER</Button>
                    </Box>
                </Grid>
            </Grid>
        </Dashboard>
    )
}
export default MyAvailabilities