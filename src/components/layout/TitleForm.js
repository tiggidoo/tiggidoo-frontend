import React from 'react'
import { Box, Typography } from '@material-ui/core'


const TitleForm = ({title}) => {

    return (    
        <Box>                    
            <Typography component="h5" variant="h5" style={{color: '#7a7a7a'}}>
                { title }
            </Typography>
        </Box>
    )
}

export default TitleForm
