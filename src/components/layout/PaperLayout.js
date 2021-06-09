import React from 'react';
import { Box, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles((theme) => ({
  paper: {
    padding: '30px',
    marginBottom:'20px',
    borderRadius: '10px',
    fontSize: "2.1rem",
    boxShadow: '0px 10px 10px #00000058',
    '@media(max-width: 600px)':{
        boxShadow: 'none',
    }
  }
}));

const PaperLayout = ({children}) => {
  const classes = useStyle();
  return(
      <Paper className={classes.paper}>
        <Box>
          {children}
        </Box>
      </Paper>
  );
}

export default PaperLayout;