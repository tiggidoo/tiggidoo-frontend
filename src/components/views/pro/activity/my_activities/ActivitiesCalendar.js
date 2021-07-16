import React from 'react'
import { Box } from '@material-ui/core'
import Calendar from '../../../../layout/calendar/Calendar'
const ActivitiesCalendar = ({ availability, selectedDate, onChangeDate }) => {
    
   
    return (
        <Box mb={4}>
            <Calendar value={selectedDate} onChange={onChangeDate} availability={availability} />
        </Box>
    )
}

export default ActivitiesCalendar