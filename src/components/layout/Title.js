import React from 'react'
import { Box, Typography, makeStyles } from '@material-ui/core'

const useStyle = makeStyles((theme) => ({
    title: {
        margin: theme.spacing(0,0,5,2),
        '& h5':{
            color: theme.palette.primary.main
        },
        '@media(max-width: 1200px)': {
            margin: theme.spacing(0,0,2,0),
        }
    },
    subTitle: {
        '& h5':{
            color: theme.palette.tertiary.main
        }
    },
}))

const Title = ({title, subTitle}) => {
    const classes = useStyle();

    return (
    
        <Box className={classes.title} mb={1}>                    
            <Typography component="h5" variant="h5" >
                { title }
            </Typography>
            <Typography component="h5" variant="h5" >
                { subTitle }
            </Typography>
        </Box>
    )
}

export default Title
