import React from 'react'
import { Box, Grid, makeStyles, Typography } from '@material-ui/core'
import { useSelector } from 'react-redux'
import Dashboard from '../../../layout/Dashboard'
import SchedulesActivities from './SchedulesActivities'

const useStyle = makeStyles((theme) => ({
    myCriteria: {
        '& .MuiCheckbox-root': {
            padding: '5px'
        },
        '& h5':{
            fontWeight: '100'
        },
        '& .MuiFormControlLabel-label': {
            fontSize: '1.7rem',
            fontWeight: '100'
        },
        '& .MuiSvgIcon-root': {
            fontSize: '2.5rem'
        }

    },
    title: {
        margin: theme.spacing(0,0,5,2),
        '& h5':{
            color: theme.palette.primary.main
        },
        '@media(max-width: 1200px)': {
            margin: theme.spacing(0,0,2,0),
        }
    },
    subTitle: {
        '& h5':{
            color: theme.palette.tertiary.main
        }
    },
}))

const MyActivity = () => {
    const classes = useStyle()

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
            <Box  className={classes.myCriteria}>
                <Grid item sm={12}>
                    <Box className={classes.title}>
                        <Box mb={1}>
                            <Typography component="h5" variant="h5">
                                MON ACTIVITÉ
                            </Typography>
                        </Box>
                        <Box className={classes.subTitle}>
                            <Typography component="h5" variant="h5" >
                                Mes missions
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid container>
                    <Grid item xs={12} sm={12} md={6} lg={5}>
                        <SchedulesActivities />
                    </Grid>
                </Grid>
            </Box>            
        </Dashboard>
    )
}

export default MyActivity