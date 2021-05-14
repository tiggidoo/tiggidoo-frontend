import React from 'react'
import { Box, Grid } from '@material-ui/core'
//import { useSelector } from 'react-redux'
//import Dashboard from '../../../../layout/Dashboard'
import ActivitiesCalendar from './ActivitiesCalendar'
import ActivitiesList from './ActivitiesList'
import TitleForm from '../../../../layout/TitleForm'

// const useStyle = makeStyles((theme) => ({
//     myCriteria: {
//         '& .MuiCheckbox-root': {
//             padding: '5px'
//         },
//         '& .MuiFormControlLabel-label': {
//             fontSize: '1.7rem',
//             fontWeight: '100'
//         },
//         '& .MuiSvgIcon-root': {
//             fontSize: '2.5rem'
//         }

//     }
// }))

const MyActivity = ({ availability }) => {
    //const classes = useStyle()

    return (
        <Box>
            <Grid item sm={12}>
                <TitleForm title={'MON ACTIVITÉ'} subTitle={'Mes missions'} />
            </Grid>
            <Grid container>
                <Grid item xs={12} sm={12} md={6} lg={5}>
                    <ActivitiesCalendar availability={availability}/>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={5}>
                    <ActivitiesList />
                </Grid>
            </Grid>
        </Box>                 
    )
}

export default MyActivity