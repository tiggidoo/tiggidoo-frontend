import React from 'react'
import { Box, Typography, makeStyles } from '@material-ui/core'

const useStyle = makeStyles((theme) => ({
    title: {
        '& h6':{
            color: '#6d6d6d',
            fontWeight: 'bold',
        },
        '@media(max-width: 1200px)': {
            margin: theme.spacing(0,0,2,0),
        }
    }
    
}))

const SubTitleForm = ({subTitle}) => {
    const classes = useStyle();

    return (    
        <Box className={classes.title} mb={1}>                    
            <Typography component="h6" variant="h6" >
                { subTitle }
            </Typography>
        </Box>
    )
}

export default SubTitleForm
