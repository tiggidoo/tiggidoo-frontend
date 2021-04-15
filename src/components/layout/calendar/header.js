import React from "react";
import { Box } from "@material-ui/core";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

export default function CalendarHeader({ value, onChange, classes }) {
  function currMonthName() {
    return value.format("MMMM");
  }

  function currYear() {
    return value.format("YYYY");
  }

  function prevMonth() {
    return value.clone().subtract(1, "month");
  }

  function nextMonth() {
    return value.clone().add(1, "month");
  }

  function thisMonth() {
    return value.isSame(new Date(), "month");
  }

  return (
    
    <Box className={classes.calendarHeader}>
      <Box
        className={classes.calendarHeaderPrevious}
        onClick={() => !thisMonth() && onChange(prevMonth())}
      >
        {!thisMonth() ? <ArrowBackIosIcon /> : null}
      </Box>
      <Box className="current">
        {currMonthName()} {currYear()}
      </Box>
      <Box className={classes.calendarHeaderNext} onClick={() => onChange(nextMonth())}>
        <ArrowForwardIosIcon />
      </Box>
    </Box>
  );
}
