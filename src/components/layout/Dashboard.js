import { Box, Container, makeStyles } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import BodyWrapper from './BodyWrapper'
import Header from './Header'

const useStyle = makeStyles((theme) => ({
    workArea:{
        display: 'flex',
        backgroundColor: '#2880fb73',
        height: '100vh'
    },
    menu: {
        backgroundColor: '#28fb4299',
        width: '25vw'
    },
    content: {
        backgroundColor: '#f728fb24',
        width: '75vw'

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
    console.log(isLoggedIn);
    return (
        <BodyWrapper>
            <Header isLoggedIn={isLoggedIn}/>
            <Container maxWidth="lg">
                <Box className={classes.workArea}>
                    <Box className={classes.menu} >
                        {/* <Drawer authority={authority} /> */}
                    </Box>
                    <Box className={classes.content}>
                        {children}
                    </Box>
                </Box>
            </Container>
        </BodyWrapper>
    )
}

export default Dashboard
