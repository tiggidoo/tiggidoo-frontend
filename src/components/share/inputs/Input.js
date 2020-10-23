import React from 'react';
import TextField from "@material-ui/core/TextField";
import { makeStyles } from '@material-ui/core/styles';

export default function Input(props) {
    //console.log(props.error);
    const useStyles = makeStyles((theme) => ({

        inputWidth: {
            maxWidth: '517px',
            width: '100%',
            paddingRight: '15px'
        },
        errors: {
            maxWidth: '517px',
            width: '100%',
            paddingRight: '15px',
            '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'red',
                }
              },
        }
    }));


    const classes = useStyles();
    const { id, label, size, onChange, defaultValue, error } = props;
    const customizedClass = error.length === 0 ? classes.inputWidth : classes.errors;
    return (
        <div>
            <TextField 
                id = { id }
                name = { id }
                placeholder = { label }
                autoComplete = "given-name"
                variant = "outlined"
                size = { size }
                onBlur = { onChange }
                defaultValue = { defaultValue }
                className = { customizedClass }
            />
        </div>
    );
}