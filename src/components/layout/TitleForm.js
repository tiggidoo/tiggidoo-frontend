import React from 'react'
import { Box, Typography, makeStyles } from '@material-ui/core'

const useStyle = makeStyles((theme) => ({
    title: {
        margin: theme.spacing(0,0,5,2),
        '& h5':{
            color: theme.palette.primary.main,            
        },
        '& h6':{
            color: '#878787',
            fontWeight: 'bold',
        },
        '@media(max-width: 1200px)': {
            margin: theme.spacing(0,0,2,0),
        }
    }
    
}))

const TitleForm = ({title, subTitle}) => {
    const classes = useStyle();

    return (    
        <Box className={classes.title} mb={1}>                    
            <Typography component="h5" variant="h5" >
                { title }
            </Typography>
            <Typography component="h6" variant="h6" >
                { subTitle }
            </Typography>
        </Box>
    )
}

export default TitleForm
