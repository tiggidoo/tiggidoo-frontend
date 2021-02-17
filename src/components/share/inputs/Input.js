import React from 'react';
import TextField from "@material-ui/core/TextField";
import { makeStyles } from '@material-ui/core/styles';

export default function Input(props) {
    //console.log(props.error);
    const useStyles = makeStyles((theme) => ({

        //checkbox
        //.MuiCheckbox-colorPrimary.Mui-checked { color: white

        inputWidth: {
            //maxWidth: '517px',
            width: '100%',
            marginRight: '15px',
            //boxShadow: '-1px 3px 6px 2px #80808047',
            boxShadow: '-1px 4px 6px 3px #80808047',
            borderRadius: '4px',
            '& .MuiOutlinedInput-root': {
                borderRadius: '4px'
              },
              '& .MuiOutlinedInput-inputMarginDense':{
                paddingTop: '11px',
                paddingBottom: '11px',
            }
        },
        errors: {
            //maxWidth: '517px',
            width: '100%',
            marginRight: '15px',
            boxShadow: '-1px 4px 6px 3px #80808047',
            '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'red',
                  borderRadius: '4px'
                }
              },
            '& .MuiOutlinedInput-inputMarginDense':{
                paddingTop: '11px',
                paddingBottom: '11px',
            }
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
                variant = "outlined"
                size = { size }
                onChange = { onChange }
                value = { defaultValue }
                className = { customizedClass }
                inputProps={{
                    autoComplete: 'off'
                  }}
            />
        </div>
    );
}