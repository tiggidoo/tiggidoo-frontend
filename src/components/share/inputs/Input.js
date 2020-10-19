import React from 'react';
import TextField from "@material-ui/core/TextField";
import { makeStyles } from '@material-ui/core/styles';

export default function Input(props) {

    const useStyles = makeStyles((theme) => ({
        inputWidth: {
            maxWidth: '517px',
            width: '100%'
        },
    }));

    const classes = useStyles();

    const { id, label, size, onChange, defaultValue } = props;
    return (
        <div>
            <TextField 
                id = { id }
                name = { id }
                placeholder = { label }
                autoComplete = "given-name"
                variant = "outlined"
                size = { size }
                onChange = { onChange }
                defaultValue = { defaultValue }
                className = { classes.inputWidth }
            />
        </div>
    );
}