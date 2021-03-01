import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const BootstrapButton = withStyles({
  root: {
    //maxWidth: '32rem',
    width: '32rem',
    height: '6.1rem',
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 20,
    paddingTop: '3.3rem', //3.3rem 0rem
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#2880fb',
    borderColor: '#2880fb',
    fontWeight: 'bold',
    borderRadius: '0',
    fontFamily: [
      'sans-serif',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
        color: '#2880fb',
        backgroundColor: '#fff',
        borderColor: '#2880fb',
        boxShadow: 'none',
      },
    '&:active': {
        color: '#2880fb',
        backgroundColor: '#fff',
        borderColor: '#2880fb',
        boxShadow: 'none',
      },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
      outlineColor: '#2880fb',
    },
    '@media (max-width:768px)': { 
        width: '24rem',
        padding: '0',
        fontSize: 18,
    }
  },
})(Button);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function ButtonBlue(props) {
    const classes = useStyles();
    const { onClick, label } = props;
    return (
            <BootstrapButton onClick={onClick} variant="contained" color="primary" disableRipple className={classes.margin}>
                { label }
            </BootstrapButton>
    );
}