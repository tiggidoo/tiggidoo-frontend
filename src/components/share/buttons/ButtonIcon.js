import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';

const useStyles = makeStyles((theme) => ({
  button: {
    width: '28.1rem',
    height: '6.1rem',
    background: 'transparent',
    margin: theme.spacing(1),
    bordeColor: 'none',
    boxShadow: 'none',
    '&:hover': {
        color: '#2880fb',
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        boxShadow: 'none',
      },
    '&:active': {
        color: '#2880fb',
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        boxShadow: 'none',
      },
    '&:focus': {
        color: '#2880fb',
        backgroundColor: 'transparent',
        borderColor: 'transparent',
//      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
        outlineColor: 'transparent',
    },
  },
}));

export default function ButtonIcon(props) {
  const classes = useStyles();
  const { onClick, label } = props;

  return (
      <Button
        variant="contained"
        color="default"
        onClick={onClick}
        className={classes.button}
        startIcon={<ArrowBackIos />}
      >
        { label }
      </Button>
      
  );
}