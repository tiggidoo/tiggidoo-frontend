import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Slider, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '@media(max-width: 600px)':{
      width: '80%',
    },

    '& .MuiSlider-rail':{
      height: '4px'
    },
    '& .MuiSlider-track':{
      height: '4px'
    },
    '& .MuiSlider-mark':{
      height: '4px'
    },
    '& .MuiSlider-thumb':{
      width: '17px',
      height: '17px',
      marginTop: '-7px'
    },
    '& .MuiSlider-valueLabel':{
      left: 'calc(-50% + 1px)'
    }
    
  },
  margin: {
    height: theme.spacing(3),
  },
}));

const marks = [
  {
    value: 0,
    label: '',
  },
  {
    value: 5,
    label: '5Km',
  },
  {
    value: 100,
    label: '100Km',
  },
];

export default function DiscreteSlider({value, handleScope}) {
  const classes = useStyles();
  
  return (
      <Box className={classes.root}>
        <Slider
          defaultValue={5}
          //getAriaValueText={valuetext}
          value={value} 
          onChange={handleScope}
          aria-labelledby="discrete-slider-custom"
          step={5}
          valueLabelDisplay="auto"
          marks={marks}
        />
      </Box>
  );
}