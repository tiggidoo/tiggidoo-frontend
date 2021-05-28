import { Box, makeStyles, FormControlLabel, Radio } from '@material-ui/core'
import React from 'react'
import clsx from 'clsx';

const useStyles = makeStyles((theme)=> ({
  root: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  icon: {
    borderRadius: '50%',
    width: 16,
    height: 16,
    boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: '#f5f8fa',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '$root.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2,
    },
    'input:hover ~ &': {
      backgroundColor: '#ebf1f5',
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
      background: 'rgba(206,217,224,.5)',
    },
  },
  checkedIcon: {
    backgroundColor: theme.palette.primary.main,
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
      display: 'block',
      width: 16,
      height: 16,
      content: '""',
    },
    'input:hover ~ &': {
      backgroundColor: theme.palette.primary.main,
    },
  },
  areaRadius: {
    width: '121px', 
    height: '55px', 
    display:"flex", 
    flexDirection: 'row', 
    justifyContent:'center', 
    marginRight: '10px', 
    borderRadius: '9px', 
  },
  areaRadiusActive:{
    background: '#F5F0F0 0% 0% no-repeat padding-box',
    boxShadow: '0px 3px 6px #00000029',
    opacity: 1
  }
}))

const RadioCustom = (props) => {
    const classes = useStyles();
    const { value, label,  defaultValue } = props

    let defaultClass = classes.areaRadius 
    if(defaultValue === value){
      defaultClass = defaultClass + ' ' + classes.areaRadiusActive 
    }

    return (
        <Box className={defaultClass}>
            <FormControlLabel 
              value={value} 
              label={label}
              control={
                <Radio
                  className={classes.root}
                  disableRipple
                  color="default"
                  checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
                  icon={<span className={classes.icon} />}
                  {...props}
                />      
              } 
            />      
        </Box>
    )
}

export default RadioCustom
