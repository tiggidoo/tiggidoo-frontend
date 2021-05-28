import React from 'react'
import { Box, Typography } from '@material-ui/core'


const TitleForm = ({title}) => {

    return (    
        <Box>                    
            <Typography component="h5" variant="h5">
                { title }
            </Typography>
        </Box>
    )
}

export default TitleForm
