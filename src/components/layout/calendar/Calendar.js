import React, { useState, useEffect } from "react";
import moment from "moment";
import Header from "./header";
import config from "../../../config.json";
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
    maxWidth: '52px',
    width: 'calc(100% / 7)',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: '400',
    '& div': {
      width: '100%',
    }
  },
  calendarDay: {
    position: 'relative',
    maxWidth: '52px',
    width: 'calc(100% / 7)',
    //width: '45px',
    display: 'inline-block',
    margin: '0',
    boxSizing: 'content-box',
    zIndex: '1',
    textAlign: 'center',
    '& > div': {
      width: 'calc(100% - 2px)',
      height: '45px',
      margin: '1px',
      position: 'relative',
      color: '#000',
      zIndex: '100',
      lineHeight: '54px',
      backgroundColor: 'white',
      border: '1px solid #ddd',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      '&.before': {
        color: '#9a9a9a',
        backgroundColor: '#ddd',
        border: '1px solid #fff'
      },
      '&.selected': {
        //width: 'calc(100% - 2px)',
        color: '#1b7df7',
        fontWeight: 'bold',
      },
      '&.today': {
        backgroundColor: '#32cc8c',
        border: '2px solid #2880fb',
        color: '#fff'
      },
      '&.weekend': {
        backgroundColor: '#dddddd',
        color: '#9a9a9a'
      },
      '&.morningtriangle': {
        border:'22.5px solid #d1d0d1',
        borderBottomColor:'transparent',
        borderRightColor:'transparent'
      },
      '&.afternoontriangle': {
        border:'22.5px solid #d1d0d1',
        borderTopColor:'transparent',
        borderLeftColor:'transparent'
      },
      '&.daytriangle': {
        border:'22.5px solid #d1d0d1'
      },
      '&.hidden': {
        display: 'none'
      }
    },
  },
  weekArea: {
    //backgroundColor: '#28cc8b'
  }
}))

const Calendar = ({ value, onChange, availability }) => {
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

  function isCurrentlyMonth(day) {
    return day.month() !== value.month()
  }

  function beforeToday(day) {
    if(day.month() === value.month()){
      return moment(day).isBefore(new Date(), "day");
    }
  }

  function isToday(day) {
    return moment(new Date()).isSame(day, "day");
  }

  function isBloqued(day) {
    //day.day() === 0 ? 6 : day.day()-1
    const dayPos = availability[config.DAYS_EN[day.isoWeekday()].substring(0,2)]
    return dayPos;
  }

  function dayStyles(day) {
    //if (day.day() === 0 || day.day() === 6) return "weekend";
    //if (daysBlocked.indexOf(day.day()) >= 0) return "weekend";
    if(beforeToday(day)) return "before";
    if(isCurrentlyMonth(day)) return "hidden"
    if(isSelected(day)) return "selected";
    if(isToday(day)) return "today";
    const dayPos = isBloqued(day);
    if(dayPos === 1) return "morningtriangle";
    if(dayPos === 2) return "afternoontriangle"
    if(dayPos === 3) return "daytriangle"
    //daytriangle
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