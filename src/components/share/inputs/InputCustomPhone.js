import React from 'react'
import { Box, makeStyles } from '@material-ui/core'

import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const useStyle = makeStyles((theme) => ({
    phoneInput: {
        '& .react-tel-input':{
            boxShadow: '-1px 4px 6px 3px #80808047',
            borderRadius: '5px'
        },
        '& .react-tel-input .form-control':{
            height: '45px',
            width: '100%'
        },
        '& .react-tel-input .form-control:focus': {
            boxShadow: '0 0 0 0.2rem rgb(40 128 251)',
            border: '0px solid #dc3545',
            '.react-tel-input .flag-dropdown':{
                border: '1px solid #cacaca'
            }
        }
    },
    errors: {
        '& .react-tel-input .flag-dropdown':{
            border: '1px solid #dc3545'
        },
        '& .react-tel-input .form-control':{
            border: '1px solid #dc3545'
        }
    },
    errorMessage: {
        color: '#dc3545',
        paddingTop: '5px',
        fontSize: '1.6rem',
    }

}))


const InputCustomPhone = (
    { name, country, value, disableCountryCode, disableDropdown, onChange, error }) => 
{
    const classes = useStyle();

    const handleChange = e => {
        onChange(e);
    }

    let customizedClass = classes.phoneInput;
    if (error.length > 0) {
        customizedClass = customizedClass + ' ' + classes.errors;
    }

    return (
        <Box className={customizedClass} mr={1}>
            <PhoneInput
                name = {name}
                country={country}
                onlyCountries={['ca', 'us', 'fr', 'es']}
                value={ value }
                placeholder='(123) 456-7890'
                disableCountryCode={disableCountryCode}
                disableDropdown={disableDropdown}
                onChange={ handleChange }
            /> 
            {(error.length > 0) && (
                <span className={classes.errorMessage}>{error}</span>
            )}
        </Box>
    )
}



export default InputCustomPhone
