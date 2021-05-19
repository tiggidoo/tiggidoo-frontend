import React from 'react';
import TextField from "@material-ui/core/TextField";
import { MaskTelephone } from './mask/TextMaskCustom';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
const useStyles = makeStyles((theme) => ({
    shadow: {
        boxShadow: '-1px 4px 6px 3px #80808047',
    },
    inputWidth: {
        borderRadius: '4px',
        '& .MuiFormLabel-root':{
            '@media (max-width:600px)': {
                paddingTop: '3px',
                fontSize: '1.8rem'
            }
        },
        '& label.MuiInputLabel-outlined.MuiInputLabel-shrink':{
            transform: 'translate(14px, -8px) scale(0.75)'
        },
        '& .MuiOutlinedInput-root': {
            borderRadius: '4px'  //8px
        },
        
        // '& .MuiInputBase-input': {
        //     boxShadow: '1px 3px 4px 0px #80808047',
        //     height: '0.8em',
        //     borderRadius: '8px'
        // },
        
        '& .MuiOutlinedInput-inputMarginDense': {
            paddingTop: '11px',
            paddingBottom: '11px',
        }
    },
    errors: {
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#dc3545',
                borderRadius: '4px'
            }
        },
        '& .MuiInput-underline:before': {
            borderBottom: '1px solid #dc3545',
        },
        '& label': {
            color: '#dc3545',
        }
    },
    errorMessage: {
        color: '#dc3545',
        paddingTop: '5px',
        fontSize: '1.6rem',
    },
    dateMargin: {
        '& input': {
            paddingTop: '10.5px',
            paddingBottom: '10.5px'
        }
    },
    testFieldStyle: {
        display: 'flex',
        flexDirection: 'column',
        marginRight: theme.spacing(0),
        '@media(max-width: 600px)': {
            marginRight: theme.spacing(0),
        }
    }
}));

export default function Input(props) {

    const classes = useStyles();
    const { id, placeholder, label, size, onBlur, defaultValue, error, type, width, variant, readOnly, mask, inputRef } = props;
    let customizedClass = classes.inputWidth;// = error.length === 0 ? classes.inputWidth : classes.errors;

    if (variant === 'outlined') {
        customizedClass = customizedClass + ' ' + classes.shadow;
    }

    if (error.length > 0) {
        customizedClass = customizedClass + ' ' + classes.errors;
    }

    if (type === 'date') {
        customizedClass = customizedClass + ' ' + classes.dateMargin;
    }

    let defaultValueExists = '';
    if (defaultValue !== undefined || defaultValue !== null) {
        defaultValueExists = defaultValue;
    }

    let readOnlyPro = false;
    if (readOnly !== undefined) {
        if (readOnly) {
            readOnlyPro = true;
        }
    }

    let maskExists = '';
    if (mask !== undefined) {
        maskExists = mask;
    }

    switch (maskExists) {
        case 'telephone':
            return (
                <Box className={classes.testFieldStyle} style={{ width: width }}>
                    <TextField
                        id={id}
                        name={id}
                        placeholder={placeholder}
                        label={label}
                        variant={variant}
                        size={size}
                        type={type}
                        onChange={e => onBlur(e)}
                        value={defaultValueExists}
                        className={customizedClass}
                        InputProps={{
                            readOnly: readOnlyPro,
                            autoComplete: 'off',
                            inputComponent: MaskTelephone
                        }}
                        inputRef = {inputRef !== undefined ? inputRef : null}
                    />
                    {(error.length > 0) && (
                        <span className={classes.errorMessage}>{error}</span>
                    )}
                </Box>
            );
        default:

            return (
                <Box display="flex" flexDirection="column" mr={1} style={{ width: width }}>
                    <TextField
                        id={id}
                        name={id}
                        placeholder={placeholder}
                        label={label}
                        variant={variant}
                        size={size}
                        type={type}
                        onChange={e => onBlur(e)}
                        value={defaultValueExists}
                        className={customizedClass}
                        InputProps={{
                            readOnly: readOnlyPro,
                            autoComplete: 'off'
                        }}
                        inputRef = {inputRef !== undefined ? inputRef : null}
                    />
                    {(error.length > 0) && (
                        <span className={classes.errorMessage}>{error}</span>
                    )}
                </Box>
            );
    }
}