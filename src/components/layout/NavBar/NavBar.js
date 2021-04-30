import React, { useEffect, useState } from 'react'
import { Box, makeStyles } from '@material-ui/core';
import MovileBar from './MovileBar';
import DeskTopBar from './DeskTopBar';


const useStyle = makeStyles((theme) => ({
    menu: {
        width: '25vw',
        margin: theme.spacing(20, 1, 0, 1),
        '@media (max-width:1200px)': { 
            margin: theme.spacing(12, 1, 0, 1),
            width: '24vw',
        },
        '@media (max-width:1024px)': { 
            position: 'fixed',
            width: '100vw',
            margin: 0,
            bottom: 0,
            right: 0,
            zIndex: 200
        },
    },
}))

const NavBar = ({ urlAvatar }) => {
    const classes = useStyle();

    const [state, setState] = useState({
        mobileView: false,
        drawerOpen: false,
    });

    const { mobileView } = state;

    useEffect(() => {
        const setResponsiveness = () => {
                return window.innerWidth <= 1024 ? setState((prevState) => ({ ...prevState, mobileView: true })) : setState((prevState) => ({ ...prevState, mobileView: false }));
        };
    
        setResponsiveness();
        window.addEventListener("resize", () => setResponsiveness());
    }, []);

    const displayDesktop = () => {
        return (
            <Box>
                <DeskTopBar urlAvatar = { urlAvatar } />
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
