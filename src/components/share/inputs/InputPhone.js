import React from 'react';
import TextField from "@material-ui/core/TextField";
import PropTypes from 'prop-types';
import MaskedInput from 'react-text-mask';
import { makeStyles } from '@material-ui/core/styles';

const TextMaskCustom = (props) => {
    const { inputRef, ...other } = props;
  
    return (
      <MaskedInput
        {...other}
        ref={(ref) => {
          inputRef(ref ? ref.inputElement : null);
        }}
        mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
        placeholderChar={'\u2000'}
        showMask
      />
    );
}

TextMaskCustom.propTypes = {
    inputRef: PropTypes.func.isRequired,
};
  

export default function InputPhone(props) {

    const useStyles = makeStyles((theme) => ({
        inputWidth: {
            maxWidth: '200px',
            width: '100%'
        },
        errors: {
            maxWidth: '200px',
            width: '100%',
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
                onChange = { onChange }
                defaultValue = { defaultValue }
                className = { customizedClass }
                InputProps={{
                    inputComponent:TextMaskCustom
                }}
            />
            
        </div>
    );
}