import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const BootstrapButton = withStyles({
  root: {
    width: '28.1rem',
    height: '6.1rem',
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#2880fb',
    borderColor: '#2880fb',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
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