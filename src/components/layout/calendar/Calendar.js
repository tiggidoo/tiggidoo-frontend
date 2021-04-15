import React, { useState, useEffect } from "react";
import moment from "moment";
import Header from "./header";
import { Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  calendar: {
    boxSizing: 'border-box',
    fontSize: '1.4rem',
    maxWidth: '400px',
    width: '100%'
  },
  calendarHeader: {
    backgroundColor: 'var(--light-blue)',
    textAlign: 'center',
    minHeight: '2rem',
    lineHeight: '2rem',
    fontFamily: 'var(--font-book)',
    fontWeight: '700',
    display: 'flex',
    marginBottom: '10px'
  },
  calendarDayNames: {
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth: '1000px',
    margin: '0 auto',
    alignItems: 'center',
    marginBottom: '10px'
  },
  calendarHeaderPrevious: {
    flex: '1',
    textAlign: 'left',
    marginLeft: '1rem',
  },
  calendarHeaderNext: {
    flex: '1',
    textAlign: 'right',
    marginRight: '1rem',
  },
  calendarWeek: {
    backgroundColor: 'transparent',
    width: 'calc(100% / 7)',
    //height: '30px',
    //lineHeight: '30px',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: '400',
    '& div': {
      width: '100%',
    }
  },
  calendarDay: {
    position: 'relative',
    width: 'calc((100% / 7))',
    //height: '55px',
    display: 'inline-block',
    margin: '0',
    boxSizing: 'content-box',
    zIndex: '1',
    textAlign: 'center',
    '& > div': {
      // width: '54px',
      // height: '53px',
      width: 'calc(100% -2)',
      height: '47px',
      margin: '1px',
      position: 'relative',
      color: '#000', //'#fff',
      zIndex: '100',
      lineHeight: '54px',
      backgroundColor: 'white', //'#32cc8c'
      border: '1px solid #28cc8b',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      // '@media (max-width:1366px)': { 
      //   width: '47px',
      //   height: '47px',
      // },
      // '@media (max-width:1200px)': { 
      //   width: '40px',
      //   height: '40px',
      // },
      // '@media (max-width:374px)': { 
      //   width: '32px',
      //   height: '32px',
      // },
      '&.before': {
        color: '#9a9a9a',
        backgroundColor: '#ddd',
      },
      '&.selected': {
        width: 'calc(100% - 2px)',
        //border: '2px solid #1b7df7',
        color: '#1b7df7',
        fontWeight: 'bold',
      },
      '&.today': {
        backgroundColor: '#1a7df7',
        color: '#fff'
      },
      '&.weekend': {
        backgroundColor: '#dddddd',
        color: '#9a9a9a'
      }
    },
  },
  weekArea: {
    //backgroundColor: '#28cc8b'
  }
}))

const Calendar = ({ value, onChange }) => {
  const classes = useStyles();
  const [calendar, setCalendar] = useState([]);

  useEffect(() => {
    function buildCalendar(date) {
      const a = [];

      const startDay = date.clone().startOf("month").startOf("week");
      const endDay = date.clone().endOf("month").endOf("week");

      const _date = startDay.clone().subtract(1, "day");
      while (_date.isBefore(endDay, "day")) {
        a.push(
          Array(7)
            .fill(0)
            .map(() => _date.add(1, "day").clone())
        );
      }
      return a;
    }
    setCalendar(buildCalendar(value));
  }, [value]);

  function isSelected(day) {
    return value.isSame(day, "day");
  }

  function beforeToday(day) {
    return moment(day).isBefore(new Date(), "day");
  }

  function isToday(day) {
    return moment(new Date()).isSame(day, "day");
  }

  function dayStyles(day) {
    //if (day.day() === 0 || day.day() === 6) return "weekend";
    //if (daysBlocked.indexOf(day.day()) >= 0) return "weekend";
    if (beforeToday(day)) return "before";
    if (isSelected(day)) return "selected";
    if (isToday(day)) return "today";
    return "";
  }

  return (
    <Box display="flex" justifyContent="center">
      <Box className={classes.calendar}>
        <Header value={value} onChange={onChange} classes={classes} />

        <Box>
          <Box className={classes.calendarDayNames}>
            {["d", "m", "t", "w", "t", "f", "s"].map((d, da) => (
              <Box key={da} className={classes.calendarWeek}>{d}</Box>
            ))}
          </Box>
          <Box className={classes.weekArea}>
            {
              calendar.map((week, wi) => (
                <Box key={wi}>
                  {
                    week.map((day, di) => (
                      <Box
                        key={di}
                        className={classes.calendarDay}
                        onClick={() => {
                          if (day < moment(new Date()).startOf("day")) return;
                          onChange(day);
                        }}
                      >
                        <Box className={dayStyles(day)}>
                          {day.format("D").toString()}
                        </Box>
                      </Box>
                    )
                    )
                  }
                </Box>
              ))
            }
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Calendar;