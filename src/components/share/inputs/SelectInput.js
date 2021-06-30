import React from 'react';
import { Box, FormControl, makeStyles, withStyles, NativeSelect, InputBase } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const BootstrapInput = withStyles((theme) => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        boxShadow: '0px 3px 6px #00000029',
        // Use the system font instead of the default Roboto font.
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
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    }
}))(InputBase);

const useStyles = makeStyles((theme) => ({
    selectArea:{
        display:'flex',
        flexDirection:'column',
        marginRight: theme.spacing(1),
        '& .MuiNativeSelect-icon': {
            top: 'calc(50% - 15px)',
            borderLeft: '1px solid gray',
            color: theme.palette.primary.main
        }
    },
    selectIcon:{
    },
    errorMessage: {
        color: '#dc3545',
        paddingTop: '5px',
        fontSize: '1.6rem',
    },
    error: {
        '& .MuiNativeSelect-select.MuiNativeSelect-select': {
            border: '1px solid #dc3545',
        }
    }
}));

const buildOptions = (data) => {
    const html = [];
    for (const index in data) {
        
        if(data[index].id !== undefined){
            //style={{ color: data[index].color, fontWeight: 'bold' }}
            html.push(<option key={data[index].id} value={data[index].id} >{data[index].name}</option>);
        }else{
            html.push(<option key={index} value={index} >{data[index]}</option>);
        }
        
    }
    return html;
}

function SelectInput(props) {
    const classes = useStyles();
    const { data, id, name, defaultValue, onChange, error, inputRef, width, color, disabled } = props;

    let message = '';
    let styleSelect = classes.selectIcon;
    
    if (error !== undefined) {
        if (error.length > 0) {
            message = error;
            styleSelect = classes.select + ' ' + classes.error;
        }
    }

    let defaultValueExists = '';
    if (defaultValue !== undefined || defaultValue !== null) {
        defaultValueExists = defaultValue;
    }
    
    return (
        <Box className={classes.selectArea}>
            <FormControl disabled={ disabled === undefined ? false : disabled }>
                <NativeSelect
                    id={id}
                    name={name}
                    input={<BootstrapInput />}
                    className={styleSelect}
                    value={defaultValueExists}
                    onChange={onChange}
                    IconComponent = {ExpandMoreIcon}
                    inputRef = {inputRef !== undefined ? inputRef : null}
                    style={{
                        width: width,
                        color: color !== undefined ? color : '#000',
                        fontWeight: color !== undefined ? 'bold' : '400'
                    }}
                >
                    {buildOptions(data)}
                </NativeSelect>
                {(message.length > 0) && (
                    <span className={classes.errorMessage}>{error}</span>
                )}
            </FormControl>
        </Box >
    )
}

export default SelectInput;