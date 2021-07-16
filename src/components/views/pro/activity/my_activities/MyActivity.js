import React, { useState, useEffect } from 'react'
import { Box, Grid } from '@material-ui/core'
import ActivitiesCalendar from './ActivitiesCalendar'
import ActivitiesList from './ActivitiesList'
import TitleForm from '../../../../layout/TitleForm'

const MyActivity = ({ availability, activitiesPro, selectedDate, onChangeDate }) => {
    return (
        <Box>
            <Grid item sm={12}>
                <TitleForm title={'MON ACTIVITÉ'} subTitle={'Mes missions'} />
            </Grid>
            <Grid container>
                <Grid item xs={12} sm={12} md={6} lg={5}>
                    <ActivitiesCalendar 
                        availability={availability}
                        selectedDate={selectedDate}
                        onChangeDate={onChangeDate}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={7}>
                    <Box>
                        <ActivitiesList activitiesPro={ activitiesPro }/>
                    </Box>
                </Grid>
            </Grid>
        </Box>                 
    )
}

export default MyActivity