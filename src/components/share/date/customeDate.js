import React from 'react';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
  } from '@material-ui/pickers';

 function customeDate() {
        <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
            label="Date picker dialog"
            format="MM/dd/yyyy"
            //value={selectedDate}
            //onChange={handleDateChange}
            KeyboardButtonProps={{
                'aria-label': 'change date',
            }}
        />      
  }

  export default customeDate;