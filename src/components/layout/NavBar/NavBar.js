import React, { useEffect, useState } from 'react'
import { Box, makeStyles } from '@material-ui/core';
import MovileBar from './MovileBar';
import DeskTopBar from './DeskTopBar';


const useStyle = makeStyles((theme) => ({
    menu: {
        backgroundColor: '#28fb4299',
        width: '25vw',
        margin: theme.spacing(20, 2, 2,2),
        '@media (max-width:992px)': { 
            position: 'absolute',
            width: '100vw',
            margin: 0,
            bottom: 0,
            right: 0
        },
    },
}))

const NavBar = () => {
    const classes = useStyle();

    const [state, setState] = useState({
        mobileView: false,
        drawerOpen: false,
    });

    const { mobileView } = state;

    useEffect(() => {
        const setResponsiveness = () => {
                return window.innerWidth < 992 ? setState((prevState) => ({ ...prevState, mobileView: true })) : setState((prevState) => ({ ...prevState, mobileView: false }));
        };
    
        setResponsiveness();
        window.addEventListener("resize", () => setResponsiveness());
    }, []);
    const displayDesktop = () => {
        return (
            <Box>
                <DeskTopBar />
            </Box>
        );
    };
    
      const displayMobile = () => {       
    
        return (
          <Box>
              <MovileBar />
          </Box>
        );
      };
    return (
        <Box className={classes.menu}>
            {mobileView ? displayMobile() : displayDesktop()}
        </Box>
    )
}

export default NavBar
