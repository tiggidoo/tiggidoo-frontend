import React, { useEffect, useState } from 'react'
import { Box, makeStyles } from '@material-ui/core';
import MovileBar from './MovileBar';
import DeskTopBar from './DeskTopBar';

const useStyle = makeStyles((theme) => ({
    menu: {
        width: '25vw',
        margin: theme.spacing(20, 1, 0, 1),
        '@media (max-width:1200px)': { 
            margin: theme.spacing(18, 1, 0, 1),
            width: '24vw',
        },
        '@media (max-width:1024px)': { 
            position: 'fixed',
            width: '100vw',
            margin: 0,
            bottom: 0,
            right: 0,
            zIndex: 200,
            boxShadow: '0px 2px 4px 2px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 0px 10px 0px rgb(0 0 0 / 12%)'
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
