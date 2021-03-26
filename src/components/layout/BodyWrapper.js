import React from 'react';
import { Box } from '@material-ui/core';

const BodyWrapper = ({children}) => {
    return (
        <Box>
            {children}
        </Box>
    );
};

export default BodyWrapper;
