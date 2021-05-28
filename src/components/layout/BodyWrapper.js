import React from 'react';
import { Box, makeStyles } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
    bkg:{
        backgroundColor: '#f6f6f6',
        '@media(max-width: 992px)':{
            backgroundColor: '#fff'
        }
    }
}))

const BodyWrapper = ({children}) => {
    const classes = useStyle()

    return (
        <Box className={classes.bkg}>
            {children}
        </Box>
    );
};

export default BodyWrapper;
