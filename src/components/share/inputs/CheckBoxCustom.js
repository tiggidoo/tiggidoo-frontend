import React from 'react'
import { Box, FormControlLabel, Checkbox, makeStyles } from '@material-ui/core'
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank'
import CheckBoxIcon from '@material-ui/icons/CheckBox'

const useStyle = makeStyles(() => ({
    formStyle:{
        '& .MuiFormControlLabel-root':{
            marginLeft: '0'
        }
    },
    bkgCheckBox:{
        marginLeft:'2px', 
        marginTop: '2px', 
        height: '17px', 
        width: '17px'        
    },
    checkStyle: {
        border: '2px solid #b4b4b4',
        width: '25px',
        height: '25px',
        borderRadius: '4px',
        margin: '5px',
        '& .MuiIconButton-label':{
            marginTop: '-13px',
            marginLeft: '-13px',
            color: '#fff'
        },
        '& .MuiTouchRipple-root': {
            top: '-10px',
            left: '-10px'
        }
    }
}))

const CheckBoxCustom = ({ value, name, label, handleChange }) => {
    const classes = useStyle()
    return (
        <Box className={classes.formStyle}>
            <FormControlLabel
                control={
                    <Box className={classes.checkStyle}>
                        <Box className={classes.bkgCheckBox} style={{ backgroundColor: value ? '#2880fb' : '#d3d2d3' }}>
 
                            <Checkbox  
                                icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                checkedIcon={<CheckBoxIcon fontSize="small" />}
                                label={label}
                                name={name} 
                                color="primary" 
                                onClick={ e => handleChange(e) }
                                checked={ value } 
                            />
                        
                        </Box>
                    </Box>
                }
                label={label}
            />
        </Box>
    )
}

export default CheckBoxCustom
