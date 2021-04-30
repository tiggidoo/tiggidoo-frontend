import React, { useState } from 'react'
import { Box } from '@material-ui/core'
import moment from "moment";
import Calendar from '../../../../layout/calendar/Calendar'
const ActivitiesCalendar = () => {
    
    const [selectedDate, setSelectedDate] = useState(moment().add('days', 1));

    const onChangeDate = () => {
        setSelectedDate();
    }
    
    return (
        <Box>
            <Calendar value={selectedDate} onChange={onChangeDate} />
        </Box>
    )
}

export default ActivitiesCalendar