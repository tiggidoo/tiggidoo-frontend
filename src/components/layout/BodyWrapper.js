import React from 'react';
import { Box, makeStyles } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
    bkg:{
        backgroundColor: '#d3d2d3'
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
