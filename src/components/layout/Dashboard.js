import { Box, Container, makeStyles } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import BodyWrapper from './BodyWrapper'
import Header from './Header'
import NavBar from './NavBar/NavBar'

const useStyle = makeStyles((theme) => ({
    workArea:{
        display: 'flex',
        //backgroundColor: '#2880fb73',
        height: '100vh'
    },
    content: {
        //backgroundColor: '#f728fb24',
        width: '75vw',
        '@media (max-width:992px)': { 
            width: '100vw',
        },
    }
}))

const Dashboard = ({children}) => {
    const classes = useStyle();

    const { isLoggedIn } = useSelector(
        state => ({
            auth: state.auth.pro,
            token: state.access_token,
            isLoggedIn: state.auth.isLoggedIn
        })
    ) 
    return (
        <BodyWrapper>
            <Header isLoggedIn={isLoggedIn}/>
            <Container maxWidth="lg">
                <Box className={classes.workArea}>
                    <NavBar />
                    <Box className={classes.content}>
                        {children}
                    </Box>
                </Box>
            </Container>
        </BodyWrapper>
    )
}

export default Dashboard
