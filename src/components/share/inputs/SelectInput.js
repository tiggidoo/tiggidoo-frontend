import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import Box from '@material-ui/core/Box';
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
    const { data, id, name, defaultValue, onChange, error, inputRef, width} = props;

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
            <NativeSelect
                id={id}
                name={name}
                input={<BootstrapInput />}
                className={styleSelect}
                style={{ width: width }}
                value={defaultValueExists}
                onChange={onChange}
                IconComponent = {ExpandMoreIcon}
                inputRef = {inputRef !== undefined ? inputRef : null}
            >
                {buildOptions(data)}
            </NativeSelect>
            {(message.length > 0) && (
                <span className={classes.errorMessage}>{error}</span>
            )}
        </Box >
    )
}

export default SelectInput;