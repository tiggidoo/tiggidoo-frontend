import React, { useState } from 'react'
import { Box } from '@material-ui/core'
import moment from "moment";
import Calendar from '../../../../layout/calendar/Calendar'
const ActivitiesCalendar = ({ availability }) => {
    
    const [selectedDate, setSelectedDate] = useState(moment().add('days', 1));

    const onChangeDate = (day) => {
        let numWeeks = 4;
        let now = new Date();
        now.setDate(now.getDate() + numWeeks * 7);
        setSelectedDate(day);
    }
    
    return (
        <Box mb={4}>
            <Calendar value={selectedDate} onChange={onChangeDate} availability={availability} />
        </Box>
    )
}

export default ActivitiesCalendar