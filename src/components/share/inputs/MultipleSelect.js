import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';
import { Box, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginRight: theme.spacing(3),
    minWidth: 120,
    maxWidth: 600,
    '& .MuiChip-root':{
      fontSize: '1.4rem'
    }
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelect({ id, servicesList, servicesChosen, handleChange, label }) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div>
      {
        (servicesList !== null) && (
          <FormControl className={classes.formControl}>
            <Typography variant="h5">{ label }</Typography>
            <Select
              labelId="demo-mutiple-chip-label"
              id={id}
              name={id}
              multiple
              value={servicesChosen}
              onChange={handleChange}
              input={<Input id="select-multiple-chip" />}
              renderValue={(selected) => (
                <div className={classes.chips}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} className={classes.chip} />
                  ))}
                </div>
              )}
              MenuProps={MenuProps}
            >
              {servicesList.map((name) => (
                <MenuItem key={name} value={name} style={getStyles(name, servicesChosen, theme)}>
                  <Box display="flex" flexDirection="row">
                    {name}
                  </Box>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )
      
      }
    </div>
  );
}