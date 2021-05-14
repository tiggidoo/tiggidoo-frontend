import React from 'react'
import { Box, makeStyles, Typography } from '@material-ui/core'

const useStyle = makeStyles((theme) => ({
    labelStyle:{
        '& h6':{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#7a7a7a'
        }
    }
}))

const Label = ({ text }) => {
    const classes = useStyle()
    return (
        <Box className={classes.labelStyle}>
            <Typography variant="h6">{ text }</Typography>
        </Box>
    )
}

export default Label
