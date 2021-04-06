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
    { name, country, value, regions, enableSearch, disableCountryCode, disableDropdown, onChange, error }) => 
{
    const classes = useStyle();

    const handleChange = (e, formattedValue, country, value, name) => {
         e.preventDefault();
         onChange(e, formattedValue, country, value, name);
     }


    let customizedClass = classes.phoneInput;
    if (error.length > 0) {
        customizedClass = customizedClass + ' ' + classes.errors;
    }

    return (
        <Box className={customizedClass} mr={1}>
            <PhoneInput
                id= { name }
                name= { name }
                country={country}
                regions={regions}
                value={ value }
                placeholder='(123) 456-7890'
                disableCountryCode={disableCountryCode}
                disableDropdown={disableDropdown}
                //enableSearch={enableSearch}
                countryCodeEditable={false}
                //onChange={ handleChange }
                onChange={(value, country, e, formattedValue) => {
                    onChange(e, formattedValue, country, value, name)
                }}
                inputExtraProps={{
                    name: { name },
                  }}
            /> 
            {(error.length > 0) && (
                <span className={classes.errorMessage}>{error}</span>
            )}
        </Box>
    )
}

export default InputCustomPhone